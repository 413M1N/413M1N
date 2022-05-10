/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Contact () {
  return (
    <div className="bg-teal-800">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-gray-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            CONTACT INFORMATION
          </p>
          </h1>
        <p className="mt-4 text-lg leading-6 text-white">
          Don&apos;t hesitate to give us a call or send us an email.
        </p>
        <br></br>
        <div className="mt-35 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center" >
          <div>
               <span className="block text-gray-900 sm:text-2xl font-['Mochiy_Pop_P_One']">LOCATION</span>
              <p className="mt-4 text-lg leading-6 text-white">
              <span className="block">MPL PLACE KIRICHWA ROAD</span>
            </p>
          </div>
          <div>
              <span className="block text-gray-900 sm:text-2xl font-['Mochiy_Pop_P_One']">PHONE NUMBER</span>
            <p className="mt-4 text-lg leading-6 text-white">
              <span className="block">0796 081 493</span>
              <span className="block">0735 932 202</span>
            </p>
          </div>
          <div>
               <span className="block text-gray-900 sm:text-2xl font-['Mochiy_Pop_P_One']">EMAIL ADDRESS</span>
              <p className="mt-4 text-lg leading-6 text-white">
              <span className="block">info@safeapparels.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}