"use server";
import nodemailer from "nodemailer";

export async function sendEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const captchaToken = formData.get("captchaToken");
  const siteKey = formData.get("siteKey");

  if (!captchaToken) {
    throw new Error("Captcha missing");
  }

  const secretKey = siteKey && siteKey.startsWith("1x")
    ? process.env.TURNSTILE_TEST_SECRET_KEY || "1x0000000000000000000000000000000AA"
    : process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Captcha secret missing");
  }

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: secretKey,
        response: captchaToken,
      }),
    }
  );

  const data = await res.json();

  if (!data.success) {
    throw new Error("Captcha verification failed");
  }



   let errors = [];

  if (!name || name.trim().length === 0) {
    errors.push("Name is required");
  }
  if (!email || email.trim().length === 0) {
    errors.push("Email is required");
  }
  if(!email.includes("@")){
    errors.push("Email is invalid");
  }
  if (!message || message.trim().length === 0) {
    errors.push("Message is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      html: `
        <div>
          <h3>New Contact from Website</h3>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
}
