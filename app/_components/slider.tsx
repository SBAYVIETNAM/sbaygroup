import Image from "next/image";
import * as Icon from "react-feather";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Slider() {
  return (
    <div className="p-2">
      <Slide
        prevArrow={<></>}
        nextArrow={<></>}
        slidesToScroll={2}
        slidesToShow={3}
        indicators={false}
      >
        <div className="flex items-center justify-center">
          <Image
            src={"/img/tigerair.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/vietjet.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/airfrance.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/airasia.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/Pacific_Airlines.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/Bamboo_Airways.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/vietnam-airline.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/img/jetstar.png"}
            width={200}
            height={40}
            alt={"Sbay iso"}
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
      </Slide>
    </div>
  );
}
