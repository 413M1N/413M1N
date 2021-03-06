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
    name: "Executive Men Shoes",
    description:
      "Water-resistant, Microfiber leather,Steel toe & steel mid-plate,Oil,acid and slip-resistant,Energy absorbing heels,Padded insole,Has no laces",
    href: "#",
    imageSrc: "products/menwithoutlace.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 2,
    name: "Executive non-safety Shoe",
    description:
      "Breathable genuine leather with cool comfort technique,Non-safety toe & plate",
    href: "#",
    imageSrc: "products/nonsafety.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 3,
    name: "Mens Safety Shoe ",
    description:
      "Breathable genuine leather, Steel toe,Steel toe,Oil-resistant,Energy absorbing heels,Padded insole",
    href: "#",
    imageSrc: "products/vaultexshoe.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Mens Safety Boot",
    description:
      "Steel toe,Steel plate,Oil resistant,Breathable genuine leather with cool comfort technique.",
    href: "#",
    imageSrc: "products/vaultexboot.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "MTS Safety Boot",
    description:
      "Water-resistant full nubuck leather upper,Anti-magnetic and thermal insulated composite midsole,Ultra-light and extra-wide, Ankle protection,Slip-resistant,Anti-static,Electrostatic discharge,Antibacterial insole,",
    href: "#",
    imageSrc: "products/mts-boot.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Security Jogger Boot",
    href: "#",
    imageSrc: "products/securityjogger.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "MTS Safety Shoe",
    description:
      "Water-resistant full nubuck leather upper,Anti-magnetic and thermal insulated composite midsole,Ultra-light and extra-wide, Ankle protection,Slip-resistant,Anti-static,Electrostatic discharge,Antibacterial insole,",
    href: "#",
    imageSrc: "products/mts-shoe.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Neilson Safety Boot",
    description:
      "Steel toe,Steel plate,Oil resistant,Breathable genuine leather,Energy absorbing heels,Padded insole",
    href: "#",
    imageSrc: "products/neilson.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Nurses Crocs",
    description:
      "Crocs Lock??? slip-resistant tread,Fully molded and easy to clean with soap and water,Enclosed toe design and thicker metatarsal area help protect foot from spills",
    href: "#",
    imageSrc: "products/crocs.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Egoli Gumboots",
    description:
      "Heavy duty gumboot,Steel-toe,PVC water resistant,Anti-slip and anti-static sole",
    href: "#",
    imageSrc: "products/egoligum.jpg",
    imageAlt:
      "Heavy duty gumboot,Steel-toe,PVC water resistant,Anti-slip and anti-static sole.",
  },
  {
    id: 12,
    name: "Heavy duty Gumboots",
    description: "Heavy-duty gumboot.,PvC water resistant,Anti-static sole",
    href: "#",
    imageSrc: "products/heavydutygum.jpg",
    imageAlt: "Heavy-duty gumboot.,PvC water resistant,Anti-static sole.",
  },
  {
    id: 13,
    name: "Light duty Gumboots",
    description: "Light duty gumboots,water resistant,anti slip",
    href: "#",
    imageSrc: "products/lightdutygum.jpg",
    imageAlt: "Light duty gumboots,water resistant,anti slip.",
  },
  {
    id: 14,
    name: "CnP Lightduty Gumboots",
    description: "Light duty gumboots,water resistant,anti slip",
    href: "#",
    imageSrc: "products/cnplight.jpg",
    imageAlt: "Light duty gumboots,water resistant,anti slip",
  },
  /*
   {
    id: 17,
    name: 'PVC Gumboots',

    href: '#',
    imageSrc: 'products/pvcgum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  */
  {
    id: 18,
    name: "Safety Gumboots",
    description:
      "Direct Injection Full PVC Gumboot,Breathable Textile Lining,Electrical resistance,Heat resistance,Knee-length, PVC mining gumboot with safety toe protection.",
    href: "#",
    imageSrc: "products/safetygum.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Footwear () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-9 pb-2 text-center lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-10 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            FOOTWEAR
          </p>

          </h1>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
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
