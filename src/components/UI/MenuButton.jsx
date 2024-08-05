import { motion } from "framer-motion";

export default function MenuButton({ top, isShow, size, ...props }) {
  let sizeButton = {
    w: size || 6,
    h: size || 6,
  };
  let parentClass = `relative ${top ? top : null}`;
  let childClass = `absolute border-b-2 border-b-stone-300 w-${sizeButton.w} duration-200`;
  return (
    <>
      <button
        className={`cursor-pointer w-${sizeButton.w} h-${sizeButton.h}`}
        {...props}
      >
        <motion.div className={parentClass}>
          <motion.div
            animate={{
              rotate: isShow ? 45 : 0,
              transition: { duration: 0.01, type: "spring" },
              y: isShow ? 8 : 0,
            }}
            className={`${childClass} top-0`}
          ></motion.div>
          <motion.div
            animate={{
              rotate: isShow ? 45 : 0,
              transition: { duration: 0.01, type: "spring" },
              y: isShow ? 0 : 0,
            }}
            className={`${childClass} top-2`}
          ></motion.div>
          <motion.div
            animate={{
              rotate: isShow ? -45 : 0,
              transition: { duration: 0.01, type: "spring" },
              y: isShow ? -8 : 0,
            }}
            className={`${childClass} top-4`}
          ></motion.div>
        </motion.div>
      </button>
    </>
  );
}
