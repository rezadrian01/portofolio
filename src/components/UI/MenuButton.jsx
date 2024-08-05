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
        {...props}
        className={`cursor-pointer w-${sizeButton.w} h-${sizeButton.h}`}
      >
        <div className={parentClass}>
          <div
            className={`${childClass} ${isShow ? "top-2 rotate-45" : "top-0"}`}
          />
          <div
            className={`${childClass} ${isShow ? "top-2 rotate-45" : "top-2"}`}
          />
          <div
            className={`${childClass} ${isShow ? "top-2 -rotate-45" : "top-4"}`}
          />
        </div>
      </button>
    </>
  );
}
