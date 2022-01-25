import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/workshop/workshop-1.jpeg",
    thumbnail: "/workshop/workshop-1.jpeg",
  },
  {
    original: "/workshop/workshop-1.jpeg",
    thumbnail: "/workshop/workshop-1.jpeg",
  },
  {
    original: "/workshop/workshop-1.jpeg",
    thumbnail: "/workshop/workshop-1.jpeg",
  },
];

export default function Gallery() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-800  sm:text-4xl font-['Mochiy_Pop_P_One']">
            Our Workshop Gallery
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are transparent and would like to show you part of our processes.
          </p>
        </div>

        <div className="mt-10">
          <ImageGallery items={images} />;
        </div>
      </div>
    </div>
  );
}
