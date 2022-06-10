/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: 'CLEANERS UNIFORM', description: '', href: '/uniforms/cleaning' },
  { name: 'HOUSEKEEPING UNIFORMS', description: '', href: '/uniforms/cleaning' },
  { name: 'DRIVERS UNIFORM', description: '', href: '/uniforms/cleaning' },
  { name: 'HOSPITAL UNIFORMS', description: '', href: '/uniforms/cleaning' },
{ name: 'WORKERS UNIFORMS', description: '', href: '/uniforms/cleaning' },
 { name: 'CHEF UNIFORMS', description: '', href: '/uniforms/cleaning' },
]
import Image from "next/image";
import Link from "next/link";

export default function Stitching(){
  return (
    <div className="bg-teal-800">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h1 className="text-yellow-300 sm:text-5xl font-['Mochiy_Pop_P_One']">
            STITCHING
          </h1>
          <p className="mt-4 text-white">
            Our quality garments will have your staff looking and feeling like
            professionals.
          </p>{" "}
          <br></br>
          <p className="mt-4 text-yellow-300">
            OUR PRODUCT RANGES COVER THE BELOW:{" "}
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <Link key={feature.name} href={feature.href} passHref>
                <div className="border-t border-gray-200 pt-10 cursor-pointer">
                  <dt className="font-medium text-white">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-white">
                    {feature.description}
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
        <div className="image-container">
          <Image
            src="/stitching/shirts1.png"
            alt="People working on laptops"
            className={"image"}
            height="1000"
            width="1000"
          />
        </div>
      </div>
    </div>
  );
}