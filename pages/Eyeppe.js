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
    name: 'Basic Plus goggles',
    href: '#',
    imageSrc: 'products/basicplus.jpg',
    imageAlt: '.',
  },
  {
    id: 2,
    name: 'Empiral goggles',
    href: '#',
    imageSrc: 'products/empiral.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'UD 71 Clear goggles',
    href: '#',
    imageSrc: 'products/ud71clear.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'UD 71 Clear goggle',
    href: '#',
    imageSrc: 'products/ud71dark.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'UD 71 Yellow',
    href: '#',
    imageSrc: 'products/ud71yellow.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'UD 131 Clear',
    href: '#',
    imageSrc: 'products/ud131clear.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'UD 131 Dark',
    href: '#',
    imageSrc: 'products/ud131dark.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Welding Goggles',
    href: '#',
    imageSrc: 'products/welding.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  // More products...
]

export default function Eyeppe () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            EYE PROTECTION
          </p>
          </h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
