import Heading from "../Heading";
import SubHeading from "../SubHeading";
import ContactForm from "./ContactForm";
import { sendEmail } from "@/actions/email";

export default function Contact() {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2.5">
          <Heading text={"Contact Me"} />
          <SubHeading text={"Let’s Build Something Together"} />
        </div>
        <div className="mx-auto w-[600px]">
          <ContactForm action={sendEmail} />
        </div>
      </div>
    </div>
  );
}
