import { useState, useEffect } from "react";
import { animate, AnimatePresence, easeIn, motion } from "framer-motion";

import MenuButton from "./UI/MenuButton";

export default function MainNavigation() {
  const [isShow, setIsShow] = useState(false);
  function toggleNav() {
    setIsShow((prevState) => !prevState);
  }

  const breakPoint = 640;
  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth >= breakPoint && isShow) {
        toggleNav(false);
      }
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isShow]);

  function handleScroll(event) {
    if (event.target.tagName && event.target.hash) {
      event.preventDefault();
      const targetId = event.target.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      const offset = 80;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  let cssClass = "gap-12 hidden sm:flex lg:mr-16 lg:gap-20";
  //   if (!isShow) {
  //     cssClass += "hidden";
  //   }
  let navContent = (
    <>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a onClick={handleScroll} href="#about">
          About Me
        </a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a onClick={handleScroll} href="#skills">
          Skills
        </a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a onClick={handleScroll} href="#">
          My Projects
        </a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a onClick={handleScroll} href="#">
          Contact
        </a>
      </motion.li>
    </>
  );
  return (
    <nav className="bg-black/40 text-slate-300 px-8 py-6 shadow-lg sticky top-0 backdrop-blur-sm ">
      <ul className="flex justify-between text-lg items-center">
        <li>
          <a className="font-semibold">Reza Adrian</a>
        </li>
        <ul className={cssClass}>{navContent}</ul>
        <AnimatePresence>
          {isShow && (
            <motion.div
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${
                isShow ? "fixed" : "hidden"
              } inset-0 h-screen bg-black/70 sm:hidden`}
            >
              <motion.ul
                variants={{
                  animate: { transition: { staggerChildren: 0.05 } },
                  exit: { transition: { staggerChildren: 0.05 } },
                }}
                className="flex flex-col gap-8 text-center mt-32 text-2xl"
              >
                {navContent}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <li className={`block z-[999] `}>
          <MenuButton
            top="-top-2"
            onClick={toggleNav}
            isShow={isShow}
            size={6}
          />
          {/* <button onClick={toggleNav}>Tes</button> */}
        </li>
      </ul>
    </nav>
  );
}
