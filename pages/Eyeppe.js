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
    name: "Helmet with ventilation",
    description:
      "High-density polyethylene, unique crown ventilation system with plastic cradle,Sweat band-brushed cloth on foam,Touch and lightweight,Customized logo options",
    imageSrc: "products/Helmetbreathe.jpg",
    imageAlt: "safety helmet with ventillation",
  },
  {
    id: 2,
    name: "Helmets without ventilation",
    description:
      "6 point pin lock text line suspension with foam sweatband,Short brim for the broader field view,Comfortable,tough and lightweight,colors:Blue,yellow and white",
    imageSrc: "products/Helmet.jpg",
    imageAlt: "Safety helmets without ventillation",
  },
  {
    id: 3,
    name: "Face shield",
    description:
      "Ratchet headgear,face protection against liquid splashes and flying objects,a lightweight visor gives high impact resistance",
    imageSrc: "products/faceshield.jpg",
    imageAlt: "Safety face shield",
  },
  {
    id: 4,
    name: "Hairnets",
    description:
      "Non-wooven medical grade",
    imageSrc: "products/hair.jpg",
    imageAlt: "Hairnets non wooven",
  },
  {
    id: 5,
    name: "Bump cap",
    description:
      "Direct ventilation reduces fogging & circulates air,Contains polycarbonated lens offering secure protection against impact hazards",
    imageSrc: "products/bumpcap.jpg",
    imageAlt: "Safety bump caps",
  },
  {
    id: 6,
    name: "Chin strap",
    description: "Helmet not included, colors blue and white",
    imageSrc: "products/chinstrap.jpg",
    imageAlt: "Helmets chin strap",
  },
  {
    id: 7,
    name: "Empiral goggles",
    description: "Scratch-resistant,polycarbonate lens,",
    imageSrc: "products/empiral.jpg",
    imageAlt:"Safety googles,empiral goggles",
  },
  {
    id: 8,
    name: "UD 71 Clear goggles",
    description: "Anti-scratch coating.Anti-fog",
    imageSrc: "products/ud71clear.jpg",
    imageAlt: "Safety clear goggles .",
  },
  {
    id: 9,
    name: "UD 71 dark goggle",
    description: "Anti-scratch coating,dark lens,Anti-fog ",
    imageSrc: "products/ud71dark.jpg",
    imageAlt:
      "Safety dark goggles.",
  },
  {
    id: 10,
    name: "UD 71 Yellow",
    description: "Anti-scratch coating,polycarbonated lens,Anti-fog ",
    imageSrc: "products/ud71yellow.jpg",
    imageAlt:
      "Safety yellow goggles.",
  },
  {
    id: 11,
    name: "UD 131 Clear",
    description: "Anti-scratch coating,clearlens,Anti-fog ",
    imageSrc: "products/ud131clear.jpg",
    imageAlt:
      "Safety clear goggles vaultex.",
  },
  {
    id: 12,
    name: "UD 131 Dark",
    description: "Polycarbonate lense,Anti-scratch coating,",
    imageSrc: "products/ud131dark.jpg",
    imageAlt:
      "Safety dark goggles.",
  },
  {
    id: 13,
    name: "Welding Goggles",
    description:
      "Flipup lens holder with 1.00mm polycarbonated cover lens,Indirect ventilated soft pvc frame with elastic strap,Anti-sratch",
    imageSrc: "products/weldinggoggles.jpg",
    imageAlt:
      "safety welding goggles with flip flap.",
  },
  {
    id: 14,
    name: "Welding Shield",
    description:
      "Lightweight Welding Faceshield,Wrap around head shield provides good face and front neck protection,Flip-up lens for improved vision,Green infrared lens certified to DIN 11, EN169",
    imageSrc: "products/weldingshield.jpg",
    imageAlt:
      "Safety welding shield.",
  },

  // More products...
];

export default function Eyeppe () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
           HEAD/EYE PROTECTION
          </p>
          </h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-lg  xl:aspect-w-15 xl:aspect-h-15">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                />
              </div>
              <h3 className="mt-4 text-sm text-white-100 font-['Mochiy_Pop_P_One']">{product.name}</h3>
              <p className="mt-1 text-sm  text-white-900">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
