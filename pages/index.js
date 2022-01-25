import Divider from "../components/Divider";
import Clients from "../components/Home/Clients";
import Expertise from "../components/Home/Expertise";
import Gallery from "../components/Home/Gallery";
import Landing from "../components/Home/Landing";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <Landing />
      <Services />
      <Divider content={"OUR CLIENTS"} />
      <Clients />
      <Expertise />
      <Gallery />
    </div>
  );
}
