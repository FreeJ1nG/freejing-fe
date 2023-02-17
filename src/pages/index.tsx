import {
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@/common/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center px-5">
      <div className="flex flex-col gap-y-20 w-[1200px] py-20">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
