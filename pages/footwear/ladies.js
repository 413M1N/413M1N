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
    name: "Ladies Sporty Safety Shoe",
    description:
      "Padded safety shoe, Padded insole,Microfiber leather,Steel mid-plate,Energy absorbing heels,Oil resistant,Steel toe,Breathable,Has no laces",
    imageSrc: "products/sportie.jpg",
    imageAlt: ".",
  },
  {
    id: 2,
    name: "Ladies Safety Shoe slip-in",
    description:
      "Padded safety shoe,Padded insole,Microfiber leather,Steel mid-plate,Energy absorbing heel,Oil resistant,Steel toe,Has no laces",
    imageSrc: "products/lace.jpg",
    imageAlt:
      "Padded safety shoe,Padded insole,Microfiber leather,Steel mid-plate,Energy absorbing heel,Oil resistant,Steel toe,Has no laces.",
  },
  {
    id: 3,
    name: "Ladies/Men Safety Shoe",
    description:
      "Breathable genuine leather,Steel toe,Steel plate,Oil & acid resistant,Energy absorbing heels,Padded insole with mesh lining",
    imageSrc: "products/executiv.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

export default function ladies () {
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
                <img src={product.imageSrc} alt={product.imageAlt} />
              </div>
              <h3 className="mt-4 text-sm text-white-100 font-['Mochiy_Pop_P_One']">
                {product.name}
              </h3>
              <p className="mt-1 text-sm  text-white-900">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
