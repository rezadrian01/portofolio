export default function About() {
  return (
    <>
      <div
        id="about"
        className=" text-stone-400 p-6 w-full md:w-5/6 lg:w-5/6  rounded-lg  mx-auto mt-56 sm:mt-64 mb-20"
      >
        <div className="border-b border-b-stone-400 py-4 mb-8">
          <h3 className="font-bold text-3xl lg:text-4xl">About Me</h3>
        </div>
        <div className="text-base md:text-lg lg:text-xl flex flex-col gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quia et, excepturi molestiae doloribus obcaecati, quae dolorem natus
            praesentium, officia sit delectus suscipit reiciendis similique?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque, doloribus.
          </p>
        </div>
      </div>
    </>
  );
}
