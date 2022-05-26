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
    name: 'Ladies Safety Shoe',
    description: '',
    imageSrc: 'products/sporty.jpg',
    imageAlt: '.',
  },
  {
    id: 2,
    name: 'Ladies Safety Shoe ROP/SBP',
    href: '#',
    imageSrc: 'products/withoutlace.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Ladies/Men Safety Shoe',
    href: '#',
    imageSrc: 'products/ladiesexecutive.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Executive Men Shoes',
    href: '#',
    imageSrc: 'products/menwithoutlace.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Executive non-safety Shoe',
    href: '#',
    imageSrc: 'products/nonsafety.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Mens Safety Shoe ',
    href: '#',
    imageSrc: 'products/vaultexshoe.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Mens Safety Boot',
    href: '#',
    imageSrc: 'products/vaultexboot.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'MTS Safety Boot',
    href: '#',
    imageSrc: 'products/mts-boot.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 9,
    name: 'Security Jogger Boot',
    href: '#',
    imageSrc: 'products/securityjogger.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 10,
    name: 'MTS Safety Shoe',
    href: '#',
    imageSrc: 'products/mts-shoe.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 11,
    name: 'Neilson Safety Boot',
    href: '#',
    imageSrc: 'products/neilson.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: 'Nurses Crocs',
    href: '#',
    imageSrc: 'products/crocs.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 13,
    name: 'Egoli Gumboots',
    href: '#',
    imageSrc: 'products/egoligum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 14,
    name: 'Heavy duty Gumboots',
    href: '#',
    imageSrc: 'products/heavydutygum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 15,
    name: 'Light duty Gumboots',
    href: '#',
    imageSrc: 'products/lightdutygum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 16,
    name: 'CnP Lightduty Gumboots',
    href: '#',
    imageSrc: 'products/cnplight.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 17,
    name: 'PVC Gumboots',
    href: '#',
    imageSrc: 'products/pvcgum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 18,
    name: 'Safety Gumboots',
    href: '#',
    imageSrc: 'products/safetygum.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Footwear () {
  return (
     <div className="bg-teal-800">
     <div className="mx-auto max-w-7xl w-full pt-9 pb-2 text-center lg:py-48 lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-yellow-300 sm:text-4xl font-['Mochiy_Pop_P_One']">
            FOOTWEAR
          </p>

          </h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-lg  xl:aspect-w-15 xl:aspect-h-15">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-white-100 font-['Mochiy_Pop_P_One']">{product.name}</h3>
              <p className="mt-1 text-lg  text-white-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
