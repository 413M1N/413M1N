/* This example requires Tailwind CSS v2.0+ */

import Image from "next/image";

export default function Expertise() {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <div
              className="max-h-full"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                className="h-full w-full object-fit opacity-50 xl:absolute xl:inset-0"
                src="/expertise/printing.jpg"
                alt="People working on laptops"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            We offer quality{" "}
            <span className="underline decoration-teal-600 underline-offset-1 decoration-wavy text-teal-600 font-['Mochiy_Pop_P_One']">
              {" "}
              printing{" "}
            </span>{" "}
            services
          </p>
          <section className="mt-5 text-lg text-gray-300">
            <ul className="list-disc list-inside space-y-4">
              <li>
                <span className="text-teal-500 font-semibold">
                  Heat Press:{" "}
                </span>
                Heat and pressure are used to imprint a design.
              </li>
              <li>
                <span className="text-teal-500 font-semibold">
                  Embroidery:{" "}
                </span>
                Create patterns on textiles.
              </li>
              <li>
                <span className="text-teal-500 font-semibold">
                  Screen Printing:{" "}
                </span>
                Print on fabrics ranging from cotton to polyester.
              </li>
            </ul>
          </section>
          {/* <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                    </span>
                  </p>
                ))}
              </div> */}
        </div>
      </div>
    </div>
  );
}
