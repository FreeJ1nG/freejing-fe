import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { EducationSection, ProficienciesSection } from "@/common/components";
import { Button } from "@mui/material";

const AboutSection: FC = () => {
  const router = useRouter();

  return (
    <div id="about" className="w-full flex flex-col items-center gap-y-20">
      <div className="flex flex-col lg:flex-row items-center gap-y-5 sm:gap-y-10 gap-x-20">
        <div className="relative min-w-[288px] min-h-[288px] sm:min-w-[320px] sm:min-h-[320px] overflow-hidden rounded-full">
          <Image src="/me.png" alt="A Picture of me" fill />
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-y-5">
          <div className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left font-black">
            Hi There!
          </div>
          <div className="flex flex-col gap-y-1 items-center lg:items-start">
            <div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
              I{"'"}m an undergraduate in the University of Indonesia
            </div>
            <div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
              I make a lot of fun projects and websites!
            </div>
            <div className="text-sm sm:text-lg md:text-xl xl:text-2xl text-center lg:text-left">
              <div className="flex items-center gap-x-2">
                Openly looking for internships
                <div className="text-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <Button
              onClick={() => router.push("/cv")}
              className="w-fit"
              variant="outlined"
            >
              See my CV
            </Button>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <div className="flex items-center gap-x-2">
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
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                />
              </svg>
              <div className="font-semibold text-lg">04 June 2003</div>
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
      <ProficienciesSection />
    </div>
  );
};

export default AboutSection;
