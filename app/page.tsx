"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Popup from "./modal";
import Slider from "./_components/slider";
import { MdAirplanemodeActive } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { PiMegaphoneFill } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 500);
  // }, []);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col bg-cover" style={{ backgroundImage: "url('/img/bg-02.jpg')" }}>
        <h2 className=" mt-48 text-4xl text-white font-bold text-center"> Đặt nhanh, ưu đãi lớn</h2>
        <div className=" max-w-7xl mx-auto mt-10" >
          <div className="border-b border-gray-200 shadow-xl dark:border-red-700 rounded-md ">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg dark:text-gray-400">
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <MdAirplanemodeActive className="mr-1 w-4 mt-0.5" />
                  Vé máy bay
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <MdHotel className="mr-1 w-4 mt-0.5" />
                  Khách sạn
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <FaCar className="mr-1 w-4 mt-0.5" />
                  Đặt xe
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <ImLocation className="mr-1 w-4 mt-0.5" />
                  Vé Bà Nà
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <SiYourtraveldottv className="mr-1 w-4 mt-0.5" />
                  Tour du lịch
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto mt-10" >
          <div className=" flex flex-row space-x-5">
            <Image
              src={"/img/vietnam-airline.png"}
              width={512}
              height={288}
              alt={"Vietnam airline logo"}
              className=" w-36 rounded-full"
            />
             <Image
              src={"/img/vietjet.png"}
              width={512}
              height={288}
              alt={"Vietjet logo"}
              className=" w-32 rounded-full"
            />
             <Image
              src={"/img/Bamboo_Airways.png"}
              width={512}
              height={288}
              alt={"Bamboo logo"}
              className=" w-32 rounded-full"
            />
             <Image
              src={"/img/Pacific_Airlines.png"}
              width={512}
              height={288}
              alt={"Sbay group logo"}
              className=" w-32 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className=" -mt-24 h-screen bg-white mx-auto rounded-3xl p-5">
        <h2>Đặt nhanh</h2>
      </div>
    </>
  );
}
