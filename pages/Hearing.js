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
    name: 'Imperial Earmuff',
    imageSrc: 'products/earmuff.jpg',
    imageAlt: 'Imperial earmuff ',
  },
  {
    id: 2,
    name: 'Reusable Earplugs',
    imageSrc: 'products/ear.jpg',
    imageAlt: 'Reusable earplugs',
  },
  {
    id: 3,
    name: 'Disposable Earplugs',
    imageSrc: 'products/disposable.jpg',
    imageAlt: 'Disposable earplugs',
  },
  {
    id: 4,
    name: 'Attachable Earmuff',
    imageSrc: 'products/earmuff2.jpg',
    imageAlt: 'Attachable earmuff.',
  },

  // More products...
]
export default function Hearing () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            EAR PPE
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
              <p className="mt-1 text-sm text-white-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}