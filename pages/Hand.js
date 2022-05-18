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
    name: 'Cotton knitted Gloves',
    href: '#',
    imageSrc: 'products/cottonknitted.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Cut resistant',
    href: '#',
    imageSrc: 'products/cutresistant.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Diamond Grip',
    href: '#',
    imageSrc: 'products/diamondgrip.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Disposable Gloves',
    href: '#',
    imageSrc: 'products/disposablegloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Driver Gloves',
    href: '#',
    imageSrc: 'products/driversgloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Heat Gloves',
    href: '#',
    imageSrc: 'products/heat.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Leather Gloves',
    href: '#',
    imageSrc: 'products/leathergloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Nitrile Gloves',
    href: '#',
    imageSrc: 'products/nitrilegloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 9,
    name: 'PVC Gloves',
    href: '#',
    imageSrc: 'products/pvcgloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 10,
    name: 'Tuff rigger Gloves',
    href: '#',
    imageSrc: 'products/NPMASK.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 11,
    name: 'Rubber Gloves',
    href: '#',
    imageSrc: 'products/rubbergloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: 'Thermal Gloves',
    href: '#',
    imageSrc: 'products/thermolgloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Hand () {
  return (
    <div className="bg-teal-800">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Hand</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
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
