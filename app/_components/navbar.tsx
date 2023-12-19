"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Icon from "react-feather";
import { MdAirplanemodeActive } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { PiMegaphoneFill } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className=" fixed w-full shadow-sm top-0 z-50 bg-white font-medium py-2 backdrop-blur-sm divide-y">
        <div className=" w-screen">
          <div className="flex flex-row max-w-7xl mx-auto  justify-between py-2">
            <div>
              <Image
                src={"/img/sbay-w-r.png"}
                width={512}
                height={288}
                alt={"Sbay group logo"}
                className=" w-14 rounded-full"
              ></Image>
              <Link
                href={`tel:02363616616`}
                className="col-span-4 ml-5 flex justify-end items-center md:hidden flex-row"
              >
                {" "}
                <Icon.PhoneCall className="w-5 h-5 mr-2 md:block mt-1" />
              </Link>
            </div>
            <div className=" flex flex-row space-x-5 text-sm my-auto">
              <Link href={"/"} className=" hover:text-gray-200 flex flex-row p-2">
                <IoMdHome className="mr-1 w-4 mt-0.5" />
                Trang chủ
              </Link>
              <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row p-2">
                <FaUsers className="mr-1 w-4 mt-0.5" />
                Đại lý
              </Link>
              <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row p-2">
                <FaUserTie className="mr-1 w-3 mt-0.5" />
                Khách hàng
              </Link>
              <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row border-2 rounded-full p-2">
                <IoLogInSharp className="mr-1 w-4 mt-0.5" />
                Nhân viên
              </Link>
            </div>

          </div>
        </div>
        <div className=" w-screen">
          <div className="flex flex-row max-w-7xl mx-auto justify-between py-2">

          <div className=" flex flex-row space-x-5 text-sm my-auto mt-1">

            <Link
              href={"/agents-airfare"}
              className=" hover:text-gray-200 flex flex-row"
            >
              <FaHandsHelping className="mr-1 w-4 mt-0.5" />
              Hợp tác đại lý
            </Link>
            <Link
              href={"/airline-tickets"}
              className=" hover:text-gray-200 flex flex-row"
            >
              <MdAirplanemodeActive className="mr-1 w-4 mt-0.5" />
              Vé máy bay
            </Link>
            <Link href={"/hotel"} className=" hover:text-gray-200 flex flex-row">
              <MdHotel className="mr-1 w-4 mt-0.5" />
              Khách sạn
            </Link>
            <Link href={"/car"} className=" hover:text-gray-200 flex flex-row">
              <FaCar className="mr-1 w-4 mt-0.5" />
              Đặt xe
            </Link>
            <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row">
              <ImLocation className="mr-1 w-4 mt-0.5" />
              Vé Bà Nà
            </Link>
            <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row">
              <SiYourtraveldottv className="mr-1 w-4 mt-0.5" />
              Tour du lịch
            </Link>
            <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row">
            <PiMegaphoneFill className="mr-1 w-4 mt-0.5" />
              Tool marketing
            </Link>
          </div>

        </div>
        </div>
        
      </nav>
    </>
  );
}
