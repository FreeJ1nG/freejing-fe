import { FC, useState } from "react";
import { PROJECTS } from "@/common/constants/projects";
import { ProjectCard } from "@/common/components";
import { Carousel } from "react-responsive-carousel";

const ProjectsSection: FC = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <div id="projects" className="flex flex-col gap-y-3">
      <div className="font-bold text-3xl px-2 text-center">Projects</div>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="pt-4 relative">
        <div className="absolute z-40 bottom-0 top-0 left-0 flex items-center">
          <button
            onClick={() =>
              setSlide((slide - 1 + PROJECTS.length) % PROJECTS.length)
            }
            className="bg-black text-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        <div className="absolute z-40 bottom-0 top-0 right-0 flex items-center">
          <button
            onClick={() => setSlide((slide + 1) % PROJECTS.length)}
            className="bg-black text-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          selectedItem={slide}
          className="w-full"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsSection;
