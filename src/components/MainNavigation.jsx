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
        <a href="#">About Me</a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a href="#">Skills</a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a href="#">My Projects</a>
      </motion.li>
      <motion.li
        variants={{
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
          exit: { y: -30, opacity: 0 },
        }}
      >
        <a href="#">Contact</a>
      </motion.li>
    </>
  );
  return (
    <nav className="bg-black/90 text-slate-300 px-8 py-6 shadow-lg">
      <ul className="flex justify-between text-lg items-center">
        <li>
          <a className="font-semibold">Reza Adrian</a>
        </li>
        <div className={cssClass}>{navContent}</div>
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
                }}
                className="flex flex-col gap-8 text-center mt-32 text-2xl"
              >
                {navContent}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`sm:hidden z-10`}>
          <MenuButton top="-top-2" onClick={toggleNav} isShow={isShow} />
        </div>
      </ul>
    </nav>
  );
}
