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
import Select from 'react-select'

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
  const handleScroll = (event: any) => {
    console.log('scroll....');
  };

  const options = [
    { value: 'Phù Cát', label: 'Phù Cát' },
    { value: 'Nội Bài', label: 'Nội Bài' },
    { value: 'Đà Nẵng', label: 'Đà Nẵng' }
  ]

  return (
    <>
      <div className="flex flex-col bg-cover" style={{ backgroundImage: "url('/img/bg-02.jpg')" }}>
        <h2 className=" mt-48 text-4xl text-white font-bold text-center"> Đặt nhanh, ưu đãi lớn</h2>
        <div className=" max-w-7xl mx-auto mt-10" >
          <div className="border-b border-gray-200 shadow-xl dark:border-red-700 rounded-md mb-5">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg dark:text-gray-400">
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <MdAirplanemodeActive className="mr-1 w-4 mt-0.5" />
                  Vé máy bay
                </a>
              </li>
              <li className="me-2">
                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
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
          <div className="flex flex-row space-x-5 mb-5 justify-between ...">
            <Select
              options={options}
              className="w-full " />
            <Select
              options={options}
              className="w-full" />
          </div>
          <div className="flex flex-row space-x-5 justify-between mb-5 ...">
            <input className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
            <input className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />

          </div>
          <div className="flex flex-row mb-5 ...">
            <button type="button" className="text-white bg-red-500 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Tìm kiếm</button>
          </div>

        </div>
        <div className=" max-w-7xl mx-auto" >
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
      <div className=" -mt-14 h-screen bg-white mx-auto rounded-3xl p-5">
        
      </div>
    </>
  );
}
