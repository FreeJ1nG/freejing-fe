import { FC } from "react";
import { useRouter } from "next/router";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";

const EducationSection: FC = () => {
  const router = useRouter();

  return (
    <VerticalTimeline lineColor="black" className="drop-shadow-lg">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        icon={
          <div className="relative w-8 h-8 sm:w-12 sm:h-12">
            <Image src="/UI.png" alt="UI" fill />
          </div>
        }
      >
        <h2 className="vertical-timeline-element-title font-bold text-white pb-2">
          University of Indonesia
        </h2>
        <h3 className="vertical-timeline-element-subtitle pb-1">
          Depok, West Java
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Undergraduate</h4>
        <p>2021 - Present</p>
        <div className="flex flex-col text-xs sm:text-sm md:text-base">
          <div>- Learned how to code python 🐍</div>
          <div>
            - Learned a lot of Web Development Frameworks (React.js, Next.js,
            Django, and{" "}
            <button
              onClick={() => router.push("/cv")}
              className="text-green-500 font-bold"
            >
              more
            </button>
            ) ⌨️
          </div>
          <div>
            - Participated in a few Dota 2 tournaments representing the
            University of Indonesia 🇮🇩
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        icon={
          <div className="relative w-8 h-8 sm:w-12 sm:h-12">
            <Image src="/penabur.png" alt="Penabur" fill />
          </div>
        }
      >
        <h2 className="vertical-timeline-element-title font-bold pb-2">
          Brilliant Class SMAK Penabur Gading Serpong
        </h2>
        <h3 className="vertical-timeline-element-subtitle pb-1">
          Gading Serpong, Banten
        </h3>
        <h4 className="vertical-timeline-element-subtitle">High School</h4>
        <p>2018 - 2021</p>
        <div className="flex flex-col text-xs sm:text-sm md:text-base">
          <div>- Silver Medalist of the 20th Nationals of Informatics 🥈</div>
          <div>
            - Top 16 Candidates for Internationals on Informatics selection
          </div>
          <div>- 3rd placement on Falcon Programming Contest (UPH) 🥉</div>
          <div>- 3rd placement on Dcode10 Academy 🥉</div>
          <div>- Learned how to code C++ ⌨</div>
          <div>
            - Made a website made out of HTML and CSS for a school competition
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        icon={
          <div className="relative w-8 h-8 sm:w-12 sm:h-12">
            <Image src="/penabur.png" alt="Penabur" fill />
          </div>
        }
      >
        <h2 className="vertical-timeline-element-title font-bold pb-2">
          SMPK Penabur Cirebon
        </h2>
        <h3 className="vertical-timeline-element-subtitle pb-1">
          Cirebon, West Java
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Junior High School
        </h4>
        <p>2015 - 2018</p>
        <div className="flex flex-col text-xs sm:text-sm md:text-base">
          <div>- Represented my school on local math competitions ➕</div>
          <div>- Learned how to play the guitar 🎸</div>
          <div>- Learned minecraft redstone 🟥</div>
          <div>- Learned minecraft command block 😎</div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        icon={
          <div className="relative w-8 h-8 sm:w-12 sm:h-12">
            <Image src="/penabur.png" alt="Penabur" fill />
          </div>
        }
      >
        <h2 className="vertical-timeline-element-title font-bold pb-2">
          SD Plus Penabur Cirebon
        </h2>
        <h3 className="vertical-timeline-element-subtitle pb-1">
          Cirebon, West Java
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Primary School</h4>
        <p>2012 - 2015</p>
        <div className="flex flex-col text-xs sm:text-sm md:text-base">
          <div>- Played a lot of soccer ⚽</div>
          <div>- Swam a lot 🏊</div>
          <div>- Played Point Blank 🔫</div>
          <div>- Learned how to play the drum 🥁</div>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationSection;
