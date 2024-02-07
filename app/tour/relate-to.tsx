"use client";

import Image from "next/image";
import { AiFillClockCircle } from "react-icons/ai";
import { BsAirplaneFill } from "react-icons/bs";

const RelateToTour = () => {
  return (
    <div className="w-full mt-10">
      <div className="rounded-t-lg p-2 items-center flex justify-center bg-green-400 text-white text-lg">
        Tour liên quan
      </div>
      {[1, 2, 3, 4, 5, 6].map((item: number, i: number) => (
        <div key={i} className="mt-5 shadow-md flex flex-row md:flex-col">
          <div className="w-[50%] md:w-[100%]">
            <Image
              src={"/img/detail-tour/ngay2.jpeg"}
              width={500}
              height={80}
              alt={"Sbay iso"}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            ></Image>
          </div>
          <div className="w-[50%] p-1 md:w-[100%]">
            <div className="my-2 font-medium text-base cursor-pointer">
              Tour du lịch Đà Nẵng - Hội An - 2 ĐÊM RESORT 5SAO VINPEARL tặng vé
              Vinwonder & Safari - BÀ NÀ HILLS
            </div>
            <p className="font-medium text-lg text-red-500">4,388,000 đ</p>
            <div className="flex flex-row">
              <AiFillClockCircle color="black" />
              <p className="text-base ml-3">3 ngày 2 đêm</p>
            </div>
            <div className="flex flex-row">
              <BsAirplaneFill color="black" />
              <p className="text-base ml-3">Máy Bay</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelateToTour;
