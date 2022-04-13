import Slider from "../Slider/Slider";

export default function Landing() {
  return (
    <main className="lg:relative bg-turqoise-pattern">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span className="inline-block xl:inline text-yellow-600  font-['Mochiy_Pop_P_One']">
              SAFE APPARELS
            </span>{" "}
          </h1>
          <h1 className="text-xl tracking-tight font-normal text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl mt-2">
            <span className=" inline-block text-white ">
              Your safety is our priority
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-50 sm:text-xl md:mt-5 md:max-w-3xl">
            Providing high-quality, consistent Personal Protective Equipment by
            implementing best global practices in PPE manufacturing, supplying,
            and training.
          </p>
          {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center uppercase justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full mt-10 hidden lg:block">
        <Slider />
      </div>
    </main>
  );
}
