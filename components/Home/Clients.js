import Image from "next/image";

const clients = [
  {
    name: "Kenya Airways",
    logo: "KQ.png",
  },
  {
    name: "PWC",
    logo: "pwc.png",
  },
  {
    name: "Uganda Revenue Authority",
    logo: "ura.png",
  },
  {
    name: "Fine Bridge",
    logo: "finebridge.png",
  },
  {
    name: "ACDI",
    logo: "acdi.png",
  },
  {
    name: "Frontline",
    logo: "frontline.png",
  },
  {
    name: "Norbrook",
    logo: "norbrook.png",
  },
  {
    name: "ICM",
    logo: "icm.png",
  },
  {
    name: "Grey Stone",
    logo: "grey-stone.png",
  },
  {
    name: "Sanivation",
    logo: "sanivation.png",
  },
  {
    name: "Prima",
    logo: "prima.png",
  },
  {
    name: "EPK",
    logo: "epk.png",
  },
];

export default function Clients() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
              Suppliers to a{" "}
              <span className="underline decoration-teal-600 underline-offset-2 decoration-wavy font-normal text-teal-600 font-['Mochiy_Pop_P_One']">
                {" "}
                wide range{" "}
              </span>
              of well known organizations
            </h2>
            <section className="mt-3 max-w-3xl text-lg text-gray-500">
              We have worked to supply PPE and branding to clients from across
              all industries from:
              <ul className="list-disc list-inside	">
                <li>Multinationals</li>
                <li>Government</li>
                <li>NGOs</li>
                <li>Banks</li>
                <li>Health Institutions</li>
                <li>Telco Companies</li>
                <li>Insurance Companies</li>
                <li>Manufacturers and Retailers</li>
              </ul>
            </section>

            <div className="mt-8 sm:flex"></div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                key={client.name}
              >
                <div
                  className="max-h-16"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    className="max-h-16"
                    alt={client.name}
                    src={`/clients/${client.logo}`}
                    height="80%"
                    width="100%"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
