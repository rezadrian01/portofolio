import SkillCard from "./SkillCard";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <div className="text-stone-400 p-6 w-full md:w-5/6 lg:w-5/6 mt-20 mx-auto flex flex-col gap-6">
      <h3 className="font-semibold text-4xl">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((skill, index) => {
          return <SkillCard title={index} skills={[...skill]} />;
        })}
      </div>
    </div>
  );
}
