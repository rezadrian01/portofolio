export default function SkillCard({ skills, title }) {
  return (
    <div className=" bg-black/30  rounded-lg shadow-lg px-4 pt-4 pb-8 ">
      <div>
        <div className="border-b-2 border-b-stone-500 py-2 mb-4">
          <h4 className="font-bold text-2xl text-center">{title}</h4>
        </div>
        <ul className="font-semibold grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {skills.map((skill) => {
            return (
              <li
                className="flex flex-col items-center hover:scale-110 duration-100 cursor-pointer"
                key={skill.id}
              >
                <img className="w-14 h-14 xl:w-20 xl:h-20 " src={skill.img} />
                <h5 className="text-lg">{skill.title}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
