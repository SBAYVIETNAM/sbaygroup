"use-client";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function SliderTour() {
  return (
    <Slide slidesToScroll={1} slidesToShow={3} indicators={false}>
      <div className="relative flex items-center mr-5 justify-center">
        <Image
          src={"/img/ba-na-hills.jpeg"}
          width={500}
          height={300}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: 450,
          }}
        ></Image>
        <h1 className="absolute bottom-5 text-2xl font-light text-end text-white shadow-black right-3">
          Bà Nà Hills
          <p className="text-end text-lg font-light">
            Làng Pháp Ba Na Hills - Châu
          </p>
          <p className="text-end text-lg font-light">Âu thu nhỏ</p>
        </h1>
      </div>
      <div className="relative flex items-center mr-5 justify-center">
        <Image
          src={"/img/deo-hai-van.jpeg"}
          width={500}
          height={300}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: 450,
          }}
        ></Image>
        <h1 className="absolute bottom-5 text-2xl font-light text-end text-white shadow-black right-3">
          Đèo Hải Vân
          <p className="text-end text-lg font-light">
            Giáp ranh giữa TP Đà Nẵng và
          </p>
          <p className="text-end text-lg font-light">tỉnh Thừa Thiên Huế</p>
        </h1>
      </div>
      <div className="relative flex items-center mr-5 justify-center">
        <Image
          src={"/img/pho-co-hoi-an.jpeg"}
          width={500}
          height={300}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: 450,
          }}
        ></Image>
        <h1 className="absolute bottom-5 text-2xl font-light text-end text-white shadow-black right-3">
          Phố cổ Hội An
          <p className="text-end text-lg font-light">Toạ lạc ở hạ lưu</p>
          <p className="text-end text-lg font-light">sông Thu Bồn</p>
        </h1>
      </div>
      <div className="relative flex items-center mr-5 justify-center">
        <Image
          src={"/img/cu-lao-cham.jpeg"}
          width={500}
          height={300}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: 450,
          }}
        ></Image>
        <h1 className="absolute bottom-5 text-2xl font-light text-end text-white shadow-black right-3">
          Cù Lao Chàm
          <p className="text-end text-lg font-light">
            Cù Lao Chàm là một cụm đảo ,
          </p>
          <p className="text-end text-lg font-light">
            trực thuộc thành phố Hội An
          </p>
        </h1>
      </div>
      <div className="relative flex items-center mr-5 justify-center">
        <Image
          src={"/img/rung-dua.jpeg"}
          width={500}
          height={300}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: 450,
          }}
        ></Image>
        <h1 className="absolute bottom-5 text-2xl font-light text-end text-white shadow-black right-3">
          Rừng Dừa Bảy Mẫu
          <p className="text-end text-lg font-light">
            Rừng dừa Bảy Mẫu khu du lịch
          </p>
          <p className="text-end text-lg font-light">
            sinh thái nổi tiếng ở Hội An
          </p>
        </h1>
      </div>
    </Slide>
  );
}
