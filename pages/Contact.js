/* This example requires Tailwind CSS v2.0+ */
export default function Contact () {
  return (
    <div className="bg-turqoise">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">CONTACT INFORMATION</h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
          Don&apos;t hesitate to give us a call or send us an email.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900"></h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">LOCATION</span>
              <span className="block">MPL PLACE KIRICHWA ROAD, Nairobi.</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">PHONE NUMBER</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">0796 081 493</span>
              <span className="block">0735 932 202</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">EMAIL ADDRESS </h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">info@safeapparels.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}