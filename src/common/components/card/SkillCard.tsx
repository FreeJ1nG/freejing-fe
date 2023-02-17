import { FC } from "react";
import Image from "next/image";

export interface SkillCardProps {
  imageSrc: string;
  title: string;
  to: string;
}

const SkillCard: FC<SkillCardProps> = ({ imageSrc, title, to }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="justify-self-center outline-none p-1 flex flex-col items-center justify-center gap-y-3 w-28 h-28 sm:w-44 sm:h-44 hover:bg-green-300/70 transition-all duration-300 rounded-xl drop-shadow-sm good-shadow"
    >
      <div className="relative w-16 h-16 sm:w-24 sm:h-24">
        <Image src={imageSrc} alt={title} fill />
      </div>
      <div className="font-bold text-xs sm:text-sm text-center">{title}</div>
    </a>
  );
};

export default SkillCard;
