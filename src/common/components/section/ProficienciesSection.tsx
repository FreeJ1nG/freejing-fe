import { FC } from "react";
import { PROFICIENCIES } from "@/common/constants/proficiencies";
import { SkillCard } from "@/common/components";

const ProficienciesSection: FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="font-bold text-3xl px-2 text-center">Proficiencies</div>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PROFICIENCIES.map((proficiency) => (
          <SkillCard key={proficiency.id} {...proficiency} />
        ))}
      </div>
    </div>
  );
};

export default ProficienciesSection;
