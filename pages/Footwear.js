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
    name: 'Ladies safety shoe',
    href: '#',
    imageSrc: 'products/lad.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Ladies safety shoe ROP/SBP',
    href: '#',
    imageSrc: 'products/withoutlaces.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Mens safety shoe',
    href: '#',
    imageSrc: 'products/mensafety.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: '3M 8210',
    href: '#',
    imageSrc: 'products/3m8210.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Disposable Mask',
    href: '#',
    imageSrc: 'products/disposable.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: '3M 9211',
    href: '#',
    imageSrc: 'products/3m9211.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'KN95 with valve',
    href: '#',
    imageSrc: 'products/kn95valve.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: '3M 5N11 Filter pads',
    href: '#',
    imageSrc: 'products/filterpads.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 9,
    name: '3M Full face mask',
    href: '#',
    imageSrc: 'products/3mfullface.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 10,
    name: 'NP 305 Mask',
    href: '#',
    imageSrc: 'products/NPMASK.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 11,
    name: 'Mono Mask',
    href: '#',
    imageSrc: 'products/monomask.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: 'NP 306 Mask',
    href: '#',
    imageSrc: 'products/NP306mask.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Footwear () {
  return (
    <div className="bg-teal-800">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Footwear </h2>

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
              <h3 className="mt-4 text-sm text-white-1000">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
