import { useState } from "react";
import { motion } from "framer-motion";

import skills from "../../data/skills";

export default function SkillTab() {
  const [activeTab, setActiveTab] = useState("Backend");
  //   console.log(skills.find((skill) => skill.titleSkills === activeTab));
  function handleChangeTab(identifier) {
    setActiveTab(identifier);
  }
  let tabContent = (
    <ul className="grid grid-cols-2 gap-y-8">
      {skills
        .find((skill) => skill.titleSkills === activeTab)
        .skills.map((currentSkill) => {
          return (
            <li
              className="flex flex-col items-center text-xl"
              key={currentSkill.id}
            >
              <img className="w-14 h-14" src={currentSkill.img} />
              <h5>{currentSkill.title}</h5>
            </li>
          );
        })}
    </ul>
  );
  //kasih min height
  return (
    <>
      <menu className="flex gap-5 sm:gap-16 md:gap-24 text-base sm:text-lg md:text-xl mb-8">
        {skills.map((skill, index) => {
          return (
            <button
              className="relative pb-2"
              onClick={() => handleChangeTab(skill.titleSkills)}
              key={index}
            >
              {activeTab === skill.titleSkills && (
                <>
                  <motion.div
                    layoutId="underline"
                    className="absolute h-1 bottom-0 left-0 right-0 border-b-2 border-b-stone-400"
                  />
                </>
              )}
              <span>{skill.titleSkills}</span>
            </button>
          );
        })}
      </menu>
      <section className="bg-black/30  rounded-lg shadow-lg px-4 py-8">
        {tabContent}
      </section>
    </>
  );
}
