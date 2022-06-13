/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


const products = [
  {
    id: 1,
    name: "Fire Extinguisher",
    description: "Fire extinguisher with water and foam ",
    imageSrc: "products/fire.jpg",
    imageAlt: "Fire extinguishe with water and foam",
  },
  {
    id: 2,
    name: "Fire Blanket",
    description:
      "Easy to pull down tags to release blanket,fire-resistant,Suitable for small cooking oil fires and clothing fires",
    imageSrc: "products/fireblanket.jpg",
    imageAlt:
      "releaseEasy to pull down tags to  blanket,fire-resistant,Suitable for small cooking oil fires and clothing fires",
  },
  {
    id: 3,
    name: "Barricade Tape",
    description: "Caution tape,barrier tape,construction tape",
    imageSrc: "products/Barricade.jpg",
    imageAlt: "Caution tape,barrier tape,construction tape",
  },
  {
    id: 4,
    name: "Safety Cone",
    description: "Pvc traffic cone 70cm height",
    imageSrc: "products/safetycone1.jpg",
    imageAlt: "Pvc traffic cone 70cm height.",
  },
  {
    id: 5,
    name: "First Aid Kit",
    description:
      "Occupational first kit,Lockable metal box contains 238 medical items that can serve up to 50 people",
    imageSrc: "products/firstaidkit.jpg",
    imageAlt:
      "Occupational first kit,Lockable metal box contains 238 medical items that can serve up to 50 people",
  },
  {
    id: 6,
    name: "Full Body Harness",
    description:'Smart anti-tangle for hassle-free donning experience,New patented shoulder/back padding design minimizes overhead muscular fatigue,light-than-ever harness,formulated webbing flexes to accommodate movement',
    imageSrc: "products/fullharness.jpg",
    imageAlt:"Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Safety Harness",
    description:'Single hook,adjustable harness,safety harness belt system helps protect user from falling',
    imageSrc: "products/harness.jpg",
    imageAlt:"Single hook,adjustable harness,safety harness belt system helps protect user from falling.",
  },
  {
    id: 8,
    name: "Truncheon",
    description:'Hight quality fiber material',
    imageSrc: "products/truncheon.jpg",
    imageAlt: "Hight quality fiber material.",
  },
  {
    id: 9,
    name: "Askari Web belt",
    href: "#",
    imageSrc: "products/web.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Lanyard & Whistle",
    href: "#",
    imageSrc: "products/whistle.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Gas Detector",
    href: "#",
    imageSrc: "products/gas.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    name: "Heavy duty cable protector",
    href: "#",
    imageSrc: "products/cableprotector.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Accessories () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            ACCESSORIES
          </p>
          </h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-5 aspect-h-5 bg-gray-900 rounded-lg  xl:aspect-w-15 xl:aspect-h-15">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                />
              </div>
              <h3 className="mt-4 text-sm text-teal-900 font-['Mochiy_Pop_P_One']">{product.name}</h3>
              <p className="mt-1 text-sm  text-white-300">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}