import { PhoneIcon } from "@heroicons/react/outline";

/* This example requires Tailwind CSS v2.0+ */
export default function CallToAction() {
  return (
    <div className="bg-teal-800">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Quality PPE products?</span>
          <span className="block">
            Talk to{" "}
            <span className="inline-block font-light bg-gray-800 py-1 px-2 text-teal-400  font-['Mochiy_Pop_P_One']">
              Safe Apparels
            </span>
            .
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          If you&apos;d like to learn more about the PPE we make and sell or any
          other printing or branding services we offer, don&apos;t hesitate to
          get in touch with us at all.
        </p>
        <p className="mt-4 text-lg leading-6 text-white">
          We are located at MPL Place,Kirichwa Road.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-extrabold rounded-md text-teal-600 bg-white hover:bg-teal-50 sm:w-auto"
        >
          <PhoneIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-3">TALK TO US</span>
        </a>
      </div>
    </div>
  );
}
