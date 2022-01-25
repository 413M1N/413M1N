/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Slider() {
  return (
    <Carousel showThumbs={false} autoPlay={true}>
      <div className="flex flex-col justify-center h-full">
        <div
          className="max-h-full"
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
          }}
        >
          <Image
            src="/banners/slider-3.jpg"
            alt="PPE banner images"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <div
          className="max-h-full"
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
          }}
        >
          <Image
            src="/banners/slider-2.jpg"
            alt="PPE banner images"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <div
          className="max-h-full"
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
          }}
        >
          <Image
            src="/banners/slider-1.jpg"
            alt="PPE banner images"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </Carousel>
  );
}
