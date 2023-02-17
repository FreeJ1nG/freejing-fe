import { FC } from "react";
import Image from "next/image";

export interface SocialCardProps {
  title: string;
  imageSrc: string;
  to: string;
}

const SocialCard: FC<SocialCardProps> = ({ title, imageSrc, to }) => {
  return (
    <div className="justify-self-center flex flex-row">
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className="relative w-16 h-16 sm:w-20 sm:h-20"
      >
        <Image src={imageSrc} alt={title} fill />
      </a>
    </div>
  );
};

export default SocialCard;
