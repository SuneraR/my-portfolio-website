"use client";

import { motion } from "framer-motion";
import { useActionState, useEffect, useState } from "react";
import ContactButton from "./ContactButton";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm({ action }) {
  const [state, formAction] = useActionState(action, {});
  const [token, setToken] = useState("");
  const [siteKey, setSiteKey] = useState("1x00000000000000000000AA");

  useEffect(() => {
    const envKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    if (envKey && !isLocal) {
      setSiteKey(envKey);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg"
    >
      <form action={formAction} className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2 text-sm sm:text-base">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            className="bg-white/5 backdrop-blur-sm border border-white/10 py-2.5 sm:py-3 px-3 sm:px-4 placeholder:text-gray-400 text-white rounded-lg outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all font-medium text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2 text-sm sm:text-base">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="What's your email?"
            className="bg-white/5 backdrop-blur-sm border border-white/10 py-2.5 sm:py-3 px-3 sm:px-4 placeholder:text-gray-400 text-white rounded-lg outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all font-medium text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2 text-sm sm:text-base">
            Your Message
          </label>
          <textarea
            rows="5"
            name="message"
            placeholder="What do you want to say?"
            className="bg-white/5 backdrop-blur-sm border border-white/10 py-2.5 sm:py-3 px-3 sm:px-4 placeholder:text-gray-400 text-white rounded-lg outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all font-medium resize-none text-sm sm:text-base sm:rows-7"
          />
        </div>
        <input type="hidden" name="captchaToken" value={token} />
        <input type="hidden" name="siteKey" value={siteKey} />
        <Turnstile
          siteKey={siteKey}
          onSuccess={(token) => setToken(token)}
          onExpire={() => setToken("")}
          onError={() => setToken("")}
          refreshExpired="auto"
        />
        {!token && (
          <p className="text-amber-300 text-xs sm:text-sm">
            Complete the captcha to enable Send.
          </p>
        )}
        <ContactButton disabled={!token} />
        {state.success && (
          <p className="text-green-500 text-sm mt-2">
            Your message has been sent successfully!
          </p>
        )}
        {state.errors && (
          <ul className="text-red-500 text-sm mt-2">
            {state.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
      </form>
    </motion.div>
  );
}
