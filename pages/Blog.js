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
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Blog () {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img className="h-30 w-full object-cover lg:absolute lg:h-50%"
            src="/blog/safetyy.jpg"
            alt="construction site safety ppe" />

        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Safe Apparels Blog</h2>
            <span className="block text-gray-900 sm:text-2xl font-['Mochiy_Pop_P_One']">BLOG POST</span>
            <p className="mt-8 text-lg text-gray-500">
              <section className="mt-3 max-w-3xl text-lg text-black-900">
              <strong>Development</strong>
              <ul className="list-disc list-inside	">
                <li> <strong>Employers</strong> across all industries ought to identify hazards in the workplace,</li>
                <li><strong>Develop</strong> workplace health and safety rules and procedures on the basis of their findings,</li>
                <li><strong>Maintain</strong> proper records on the state of health and safety in the organization.</li>
                <li>The <strong>development</strong> of workplace safety rules and procedures assists employers to mitigate
                    employee exposure to harmful conditions.</li>
                <li>It also <strong>limits</strong> their <strong>liability</strong> in the event of workplace injuries and fatalities because employers
                 who have established safety rules and procedures cannot be held to have been negligent in the protection
                  of their workers.</li>

              </ul>
            </section>
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
             <strong>Communication Industrial safety rules</strong> and procedures date back to the 19th century when the
                United States enacted its first legislation to regulate the conditions of work in factories.
                Currently, the Department of Labour regulates industrial safety.There are four distinct aspects of
                 workplace safety rules and procedures
              </p>
              <p>
                <section className="mt-3 max-w-3xl text-lg text-black-1000">
              <ul className="list-disc list-inside	">
                <li>Development</li>
                <li>Communication</li>
                <li>Enforcement</li>
                <li>Benefits</li>
                <li>In keeping with best practice, employers across all industries ought to communicate
                     workplace safety rules and procedures to employees in a clear and formal manner, and also train them
                      on how they can meet the stated requirements.</li>

                <li>The development of safety rules and procedures is ineffective if there is no corresponding employee
                     awareness and understanding.</li>
                <li>Under workplace health and safety acts, it is a legal requirement for employers to inform employees about
                     existing workplace hazards, train them on how to avoid such hazards/risks, and,</li>
                <li>Also orient them on how they can report violations or represent any grievances that may arise in
                    the course of their work.</li>
              </ul>
            </section>
              </p>
              <p>
                <section className="mt-3 max-w-3xl text-lg text-gray-500 lg:mt-0">
              <strong>Enforcement</strong>
              <ul className="list-disc list-inside	">
                <li>The Department of Labour, through the Directorate of Occupational Safety and Health Services
                     (DOSHS), work to ensure the safety of workers across all industries.</li>
                <li>As a result, employers have a general duty to keep their workplaces free of recognized hazards.</li>
                <li>They also have an obligation to comply with the acts/standards that the Department of Labour
                     establishes and any other relevant regulations that relate to their industry.</li>
              </ul>
            </section>
              </p>
              <p>
                <section className="mt-3 max-w-3xl text-lg text-gray-500">
             <strong>Benefits</strong>
              <ul className="list-disc list-inside	">
                <li>Numerous benefits exist to maintaining a safe and healthy work environment and adhering to
                     workplace safety rules and procedures.</li>
                <li>The main advantage is that it safeguards human resources as the greatest organizational assets.</li>
                <li>Workplace safety rules make workplaces a safe place to work, which in turn contributes to the
                     attractiveness, growth and success of industries across the country.</li>
                <li>The safety rules help to minimize organizational costs because in the absence of proper safety rules,
                    there would be higher rates of workplace injuries and fatalities, necessitating compensation, as was
                    the case before the development of workplace safety laws.</li>

              </ul>
            </section>
              </p>
              <p>
                <strong>By Yvonne Kwamboka,
                    Safety Officer and enthusiast</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}