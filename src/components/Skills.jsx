import SkillCard from "./SkillCard";
import skills from "../../data/skills";
import SkillTab from "./SkillsTab";

export default function Skills() {
  return (
    <div className="text-stone-400 p-6 w-full md:w-5/6 lg:w-5/6 mt-20 mx-auto flex flex-col gap-6">
      <h3 className="font-semibold text-4xl">Skills</h3>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              title={skill.titleSkills}
              skills={[...skill.skills]}
            />
          );
        })}
      </div>
      <div className="grid lg:hidden">
        <SkillTab />
      </div>
    </div>
  );
}
