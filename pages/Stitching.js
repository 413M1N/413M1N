/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: 'CLEANERS UNIFORM', description: '' },
  { name: 'HOUSEKEEPING UNIFORMS', description: '' },
  { name: 'DRIVERS UNIFORM', description: '' },
  { name: 'HOSPITAL UNIFORMS', description: '' },
{ name: 'WORKERS UNIFORMS', description: '' },
 { name: 'CHEF UNIFORMS', description: '' },
]
import Image from "next/image";
export default function Stitching(){
  return (
    <div className="bg-teal-800">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h1 className="text-yellow-300 sm:text-5xl font-['Mochiy_Pop_P_One']">STITCHING</h1>
          <p className="mt-4 text-white">
           Our quality garments will have your staff looking and feeling like professionals.
          </p> <br></br>
          <p className="mt-4 text-yellow-300">
           OUR PRODUCT RANGES COVER THE BELOW:        </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-10">
                <dt className="font-medium text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:gap-4 lg:gap-10">
           <Image
                src="/stitching/vest.png"
                alt="People working on laptops"
                height="200%"
               width="300%"

              />
          <Image
                src="/stitching/Chef.png"
                alt="People working on laptops"
                height="150%"
               width="200%"

              />
         <Image
                src="/stitching/askari1.png"
                alt="People working on laptops"
                height="500%"
               width="700"

              />
               <Image
                src="/stitching/Spray.png"
                alt="People working on laptops"
                height="1000%"
               width="1000%"

              />
          <Image
                src="/stitching/dust.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/stitching/gown.png"
                alt="People working on laptops"
                height="1080%"
               width="1080%"

              />
              <Image
                src="/stitching/driver.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/stitching/raincoat.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/stitching/jacket.png"
                alt="People working on laptops"
                height="720px"
               width="1080%"

              />
              <Image
                src="/stitching/House.png"
                alt="People working on laptops"
                height="720px"
               width="1080px"

              />
              <Image
                src="/stitching/Shirt1.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
               <Image
                src="/stitching/Overall.png"
                alt="People working on laptops"
                height="2140%"
               width="2140%"

              />
               <Image
                src="/stitching/tunic.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
            <Image
                src="/stitching/eskimo1.png"
                alt="People working on laptops"
                height="2000%"
               width="2000%"

              />
            <Image
                src="/stitching/apron.png"
                alt="People working on laptops"
                height="720px"
               width="1080%"

              />
               <Image
                src="/stitching/cargo.png"
                alt="People working on laptops"
                height="500%"
               width="500%"

              />
        </div>
      </div>
    </div>
  )
}