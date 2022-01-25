/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

const solutions = [
  {
    name: "Respiratory Protection",
    description: "Protect against the inhalation of hazardous substances.",
    href: "#",
    icon: "medical-mask.png",
  },
  {
    name: "Hand Protection",
    description: "Protect one's hands from any sort of injury at work",
    href: "#",
    icon: "gloves.png",
  },
  {
    name: "Footwear",
    description: "PPE for feet to reduce the risk of workplace hazards.",
    href: "#",
    icon: "boots.png",
  },
  {
    name: "Eye Protection",
    description: "Face and eye protection to reduce the risk of injuries.",
    href: "#",
    icon: "eyewear.png",
  },
  {
    name: "Ear Protection",
    description: "Hearing protectors to prevent noise induced hearing loss",
    href: "#",
    icon: "ear-protection.png",
  },
  {
    name: "Accessories",
    description: "General PPE to reduce workplace harzards.",
    href: "#",
    icon: "accessories.png",
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-800 font-semibold tracking-wide uppercase">
            WHO ARE WE
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-['Mochiy_Pop_P_One']">
            A leading apparel provider in Africa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Safe apparels strives to be the leading apparel provider in Africa
            by providing the highest quality products in the industry.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are commited to raising of apparel standards & we provide{" "}
            <span className="underline decoration-teal-800 underline-offset-2 decoration-wavy font-semibold text-teal-800">
              PPE
            </span>{" "}
            products and services in the following categories:
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {solutions.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <Image
                      className="flex-shrink-0 h-6 w-"
                      src={`/categories/${feature.icon}`}
                      alt={feature.description}
                      height={32}
                      width={32}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
