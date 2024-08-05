import nodeJsImg from "../assets/tools/nodejs.png";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="text-stone-400 p-6 w-full md:w-5/6 lg:w-5/6 mt-20 mx-auto flex flex-col gap-6">
      <h3 className="font-semibold text-4xl">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <SkillCard
          title="Backend"
          skills={["Node.Js", "Express", "Restfull APIs", "GraphQL"]}
        />
        <SkillCard
          title="Frontend"
          skills={["Tailwind", "React", "Redux", "Framer motion"]}
        />
        <SkillCard title="Database" skills={["MongoDB", "MySQL"]} />
        <SkillCard title="Other" skills={["Firebase", "Git", "Postman"]} />
      </div>
    </div>
  );
}
