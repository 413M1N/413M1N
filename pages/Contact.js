/* This example requires Tailwind CSS v2.0+ */
import { ExclamationCircleIcon, LocationMarkerIcon, MailIcon, NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

const supportLinks = [
  {
    name: 'Call us',
    href: '#',
    description:
      '0796 081 493 .',
    icon: PhoneIcon,
  },
  {
    name: 'Location',
    href: '#',
    description:
      'MPL PLACE, KIRICHWA ROAD.',
    icon: LocationMarkerIcon,
  },
  {
    name: 'EMAIL',
    href: '#',
    description:
      'info@safeapparels.com',
    icon:MailIcon,
  },
]

export default function Contact () {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">

          <image
            className="w-full h-full object-cover"
            src="./contant/cont.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className=" text-gray-300 sm:text-5xl font-['Mochiy_Pop_P_One']">CONTACT US</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Don&apos;t hesitate to give us a call or send us an email.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-5xl mx-auto relative z-5 pb-32 px-4 sm:px-2 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-black-300">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}