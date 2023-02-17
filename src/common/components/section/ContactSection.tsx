import { FC } from "react";
import { SocialCard } from "@/common/components";
import { SOCIALS } from "@/common/constants/socials";

const ContactSection: FC = () => {
  return (
    <div id="contact" className="w-full flex flex-col gap-y-3">
      <div className="font-bold text-3xl px-2 text-center">Get in Touch</div>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {SOCIALS.map((social) => (
          <SocialCard key={social.id} {...social} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
