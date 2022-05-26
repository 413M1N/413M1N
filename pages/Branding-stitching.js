/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: 'HEAT PRESS', description: 'Heat presses print t-shirts quickly and economically without sacrificing quality. The machines are capable of printing complex, vivid, and full color images.' },
  { name: 'SCREEN PRINTING', description: 'Screen printing is the process of pressing ink through a stencilled mesh screen to create a printed design.' },
  { name: 'EMBROIDERY', description: 'Embroidery is the process is turning graphic design into needle and thread art for application to the fabric. These designs can be simple, single colour or multi-colour intricate pieces of art.' },

]
import Image from "next/image";
export default function Branding(){
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h1 className="text-teal-300 sm:text-5xl font-['Mochiy_Pop_P_One']">BRANDING</h1>
          <p className="mt-4 text-black-300">
           We offer quality printing services
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-300 pt-10">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-white-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-1 sm:gap-4 lg:gap-10">
           <Image
                src="/Branding/polo.png"
                alt="People working on laptops"
                height="200%"
               width="300%"

              />
          <Image
                src="/Branding/Bag.png"
                alt="People working on laptops"
                height="150%"
               width="200%"

              />
         <Image
                src="/Branding/hoodie.png"
                alt="People working on laptops"
                height="500%"
               width="700"

              />
          <Image
                src="/Branding/fleece.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/Branding/cup.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/Branding/reflector.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/Branding/umbrella.png"
                alt="People working on laptops"
                height="850%"
               width="1000%"

              />
              <Image
                src="/Branding/whitecup.png"
                alt="People working on laptops"
                height="720px"
               width="1080%"

              />
              <Image
                src="/Branding/pouch.png"
                alt="People working on laptops"
                height="720px"
               width="1080px"

              />



        </div>
      </div>
    </div>
  )
}