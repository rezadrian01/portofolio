import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import SkillCard from "./SkillCard";
import skills from "../data/skills";
import SkillTab from "./SkillsTab";

export default function Skills() {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      id="skills"
      className="text-stone-400 p-6 w-full md:w-5/6 lg:w-5/6 mx-auto flex flex-col gap-6"
    >
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
    </motion.div>
  );
}
