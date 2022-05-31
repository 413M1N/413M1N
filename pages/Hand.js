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
    description:'seamless pattern increase comfort,Knit construction allows breathability with less hand fatigue',
    href: '#',
    imageSrc: 'products/cottonknitted.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Cut resistant',
    description:'Thickened fingertips,Wear resistant and durable, Anti-stab & anti-stab,Breathable & soft',
    href: '#',
    imageSrc: 'products/cutresistant.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Diamond Grip',
    href: '#',
    description:'Cut and Abrasion Resistant,Latex coated crinkle grip on palm and fingures,Washable, resistant to chemicals, water, and ultraviolet light',
    imageSrc: 'products/diamondgripp.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Latex examination Gloves',
    description:'Natural High-Grade Rubber, Powdered latex',
    href: '#',
    imageSrc: 'products/disposablegloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Driver Gloves',
    description:'Leather palm construction in these gloves helps to provide comfort, durability, dexterity, and abrasion resistance.',
    href: '#',
    imageSrc: 'products/driversgloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Heat Gloves',
    description:'Asbestos-free heat-resistant gloves with wool liner provide strength and heat protection up to 500 °F. Made',
    href: '#',
    imageSrc: 'products/heat.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  /*
  {
    id: 7,
    name: 'Leather Gloves',
    description:'',
    href: '#',
    imageSrc: 'products/leathergloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  */
  {
    id: 8,
    name: 'Nitrile Gloves',
    description:'Nitrile synthetic fiber for high chemical resistance,Cotton flock liner to absorb sweating',
    href: '#',
    imageSrc: 'products/nitrilegloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 9,
    name: 'PVC Gloves',
    description:'Single Dipped red PVC coated on a polyester jersey support,Interlock lined for easy on & off,Oil & grease resistant,Chemical resistant',
    href: '#',
    imageSrc: 'products/pvcgloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 10,
    name: 'Tuff rigger Gloves',
    description:'Leather on palm, thumb,first finger, and knuckles,Reinforced elastic cuff',
    href: '#',
    imageSrc: 'products/tuffrigger.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  /*
   {
    id: 11,
    name: 'Rubber Gloves',
    href: '#',
    imageSrc: 'products/rubbergloves.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },*/
   {
    id: 12,
    name: 'Nitrile Foam Gloves',
    description:'Cut resistance level 5,Good grip in wet and dry conditions,Nitrile coated,Used in Mining,construction, metal & glass handling, oil & gas industry',
    href: '#',
    imageSrc: 'products/foam.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: ' Welding Leather Glove',
    description:'Made with soft and durable split leather,Extra soft & comfortable inner liner,Resistant against heat,spark,lag & cut,Wing thumb',
    href: '#',
    imageSrc: 'products/welding.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: 'Chemical Gloves',
    href: '#',
    imageSrc: 'products/chemicalglove.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 12,
    name: 'Steal mesh glove',
    description:'Textile strap,Elastic grip,Elastic grip,Extreme cut & puncture resistant,improve comfort and fit',
    href: '#',
    imageSrc: 'products/meshglove.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
export default function Hand () {
  return (
     <div className="bg-white-300">
     <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-centre">
          <h1 className="text-3xl tracking-tight mb-4 font-medium sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">

         <p className="mt-2 text-centre text-3xl leading-8  tracking-tight text-teal-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            HANDS PPE
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
              <h3 className="mt-4 text-sm text-teal-900 font-['Mochiy_Pop_P_One']">{product.name}</h3>
              <p className="mt-1 text-lg  text-white-900">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}