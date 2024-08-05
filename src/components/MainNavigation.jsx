import { useState } from "react";
import MenuButton from "./UI/MenuButton";

export default function MainNavigation() {
  const [isShow, setIsShow] = useState(false);
  function toggleNav() {
    setIsShow((prevState) => !prevState);
  }
  let cssClass = "gap-12 hidden sm:flex lg:mr-16 lg:gap-20";
  //   if (!isShow) {
  //     cssClass += "hidden";
  //   }
  let navContent = (
    <>
      <li>
        <a href="#">About Me</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">My Projects</a>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>
    </>
  );
  return (
    <nav className="bg-black/90 text-slate-300 px-8 py-6 shadow-lg">
      <ul className="flex justify-between text-lg items-center">
        <li>
          <a className="font-semibold">Reza Adrian</a>
        </li>
        <div className={cssClass}>{navContent}</div>
        <div
          className={`${
            isShow ? "fixed" : "hidden"
          } inset-0 h-screen bg-black/70 sm:hidden`}
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
