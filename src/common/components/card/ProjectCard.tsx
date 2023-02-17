import { FC } from "react";
import Image from "next/image";

export interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  to: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  to,
}) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div className="relative w-full aspect-video">
        <Image src={imageSrc} alt={title} fill />
      </div>
    </a>
  );
};

export default ProjectCard;
