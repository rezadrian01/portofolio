import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuButton from "./UI/MenuButton";

export default function MainNavigation() {
  const [isShow, setIsShow] = useState(false);
  function toggleNav() {
    setIsShow((prevState) => !prevState);
  }
  let cssClass = "gap-12 hidden sm:flex";
  //   if (!isShow) {
  //     cssClass += "hidden";
  //   }
  let navContent = (
    <>
      <li>
        <NavLink>About Me</NavLink>
      </li>
      <li>
        <NavLink>My Projects</NavLink>
      </li>
      <li>
        <NavLink>Skills</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-black/85 text-slate-300 px-8 py-6">
      <ul className="flex justify-between text-lg items-center">
        <li>
          <NavLink className="font-semibold">Reza Adrian</NavLink>
        </li>
        <div className={cssClass}>{navContent}</div>
        <div
          className={`${
            isShow ? "fixed" : "hidden"
          } inset-0 h-screen bg-black/70`}
        >
          <div className="flex flex-col gap-8 text-center mt-32 text-2xl">
            {navContent}
          </div>
        </div>
        <div className="sm:hidden z-10">
          <MenuButton top="-top-2" onClick={toggleNav} isShow={isShow} />
        </div>
      </ul>
    </nav>
  );
}
