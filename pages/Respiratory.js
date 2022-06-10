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
    name: 'Taiwan Dust Mask',
    description:'Real protection against,non-toxic coarse dust,Metal nose clip for a perfect fit,',
    href: '#',
    imageSrc: 'products/taiwanmask.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: '3M half face mask',
    description:' Dual airline systems against a variety of gases, vapors, and particulate hazards,Soft, lightweight half-mask respirator with easy-to-adjust heads strapsfor a customized fit',
    href: '#',
    imageSrc: 'products/halfface.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: '3M 8511',
    href: '#',
    description:'Adjustable nose clip, Cushioning nose foam,Welded strap attachment.',
    imageSrc: 'products/3m8511.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: '3M 8210',
    href: '#',
    description:'Adjustable nose clip,Cushioning nose foam,Welded strap attachment',
    imageSrc: 'products/3m8210.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  /*
  {
    id: 5,
    name: 'Disposable Mask',
    href: '#',
    description:'',
    imageSrc: 'products/disposable.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  */
  {
    id: 6,
    name: '3M 9211',
    href: '#',
    description:'Comfortable braided headbands help keep respirator securely in place and minimizes pulling of hair,N95 Approved filtering facepiece particulate respirator',
    imageSrc: 'products/3m9211.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'KN95 with valve',
    href: '#',
    description:'Equipped with a breathable valve, High filtering ability and extremely Iow resistance,comfortable and durable,',
    imageSrc: 'products/kn95valve.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: '3M 5N11 Filter pads',
    href: '#',
    description:'NIOSH approved for environments containing certain non-oil-based particles,',
    imageSrc: 'products/filterpads.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 9,
    name: '3M Full face mask',
    description:'reusable full face mask offers lightweight comfort and ease of use,helps reduce debris from depositing in the valve,Large lens for wide field of view and excellent visibility.',
    imageSrc: 'products/3mfullface.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 10,
    name: 'NP 305 Mask',
    description:'Chemical Respirator,Spray painting and organic vapours of low toxicity,Acid gases of low toxicity',
    href: '#',
    imageSrc: 'products/NPMASK.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function respiratory () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            RESPIRATORY PPE
          </p>
          </h1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-lg  xl:aspect-w-15 xl:aspect-h-15">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                />
              </div>
              <h3 className="mt-4 text-sm text-teal-900 font-['Mochiy_Pop_P_One']">{product.name}</h3>
              <p className="mt-1 text-sm  text-white-900">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}