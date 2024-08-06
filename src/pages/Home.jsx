import photo from "../assets/8 crop.jpg";

export default function HomePage() {
  return (
    <>
      <div id="home" className=" flex flex-col p-8  pt-8 lg:pt-64 min-h-[70vh]">
        <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-10 justify-center">
          <div className="">
            <img
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover object-top rounded-full mb-8"
              src={photo}
            />
          </div>
          <div className="text-stone-400 lg:w-1/2 text-center">
            <h1 className="text-5xl lg:text-7xl font-semibold mb-4">
              Hi, I'm Ahmad Reza Adrian
            </h1>
            <p className="font-thin text-xl">
              Backend Developer | Fullstack Developer
            </p>
            {/* <p className="text-lg">
              As a Backend Developer, I specialize in crafting the backbone of
              web applications that deliver top-notch performance and
              scalability.
            </p>
            <p className="text-lg">
              Dive into my portfolio to see my work and potential
              collaborations.
            </p> */}
            {/* <button>Check My Projects</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
