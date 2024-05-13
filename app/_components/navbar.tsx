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
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className=" hidden md:block fixed w-full shadow-sm top-0 z-50 bg-white font-medium backdrop-blur-sm divide-y">
        <div className=" hidden md:block w-screen px-5">
          <div className="flex flex-row max-w-7xl mx-auto  justify-between py-2">
            <Link href={'/'}>
              <Image
                src={"/img/sbay-w-r.png"}
                width={512}
                height={288}
                alt={"Sbay group logo"}
                className=" w-14 rounded-full"
              ></Image>
            </Link>
            <div className=" flex flex-row space-x-5 text-sm text-red-700 my-auto">
              <Link href={"/"} className=" hover:text-gray-200 flex flex-row p-2">
                <IoMdHome className="mr-1 w-4 mt-0.5" />
                Trang chủ
              </Link>
              <Link href={"https://flight.sbaygroup.com/?dang-nhap=1"} className=" hover:text-gray-200 flex flex-row p-2">
                <FaUsers className="mr-1 w-4 mt-0.5" />
                Đại lý
              </Link>
              <Link href={"https://cskh.sbayvietnam.com/auth/SignIn"} className=" hover:text-gray-200 flex flex-row p-2">
                <FaUserTie className="mr-1 w-3 mt-0.5" />
                CSKH
              </Link>
              <Link href={"https://work.sbayvietnam.com"} className=" hover:text-gray-200 flex flex-row border-2 rounded-full p-2">
                <IoLogInSharp className="mr-1 w-4 mt-0.5" />
                Nhân viên
              </Link>
            </div>

          </div>
        </div>
        <div className=" hidden md:block w-screen px-5 bg-red-600 text-white">
          <div className="flex flex-row max-w-7xl mx-auto justify-between py-2">
            <div className=" flex flex-row space-x-5 text-sm my-auto">
              {/* <Link
                href={"/agents-airfare"}
                className=" hover:text-gray-200 flex flex-row"
              >
                <FaHandsHelping className="mr-1 w-4 mt-0.5" />
                Hợp tác đại lý
              </Link> */}
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
              <Link href={"https://datxe.sbayvietnam.com"} className=" hover:text-gray-200 flex flex-row">
                <FaCar className="mr-1 w-4 mt-0.5" />
                Đặt xe
              </Link>
              <Link href={"https://www.datve.sbayvietnam.com"} className=" hover:text-gray-200 flex flex-row">
                <ImLocation className="mr-1 w-4 mt-0.5" />
                Vé Bà Nà
              </Link>
              {/* <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row">
                <SiYourtraveldottv className="mr-1 w-4 mt-0.5" />
                Tour du lịch
              </Link> */}
              <Link href={"/tool"} className=" hidden hover:text-gray-200 lg:flex flex-row">
                <PiMegaphoneFill className="mr-1 w-4 mt-0.5" />
                Tool marketing
              </Link>
            </div>

          </div>
        </div>

      </nav>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-xl sticky top-0 z-50">
        <div className=" md:hidden max-w-screen-xl flex flex-row items-center justify-between mx-auto p-2">
          <Link href={'/'}>
            <Image
              src={"/img/sbay-w-r.png"}
              width={512}
              height={288}
              alt={"Sbay group logo"}
              className=" w-14 rounded-full"
            ></Image>
          </Link>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
        </div>
        {isOpen == true &&
          <div className=" sticky top-0 left-0 w-full block md:hidden md:w-auto">
            <ul className="font-medium px-5 flex flex-col space-y-3 p-2 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {/* <Link
                  href={"/agents-airfare"}
                  className=" hover:text-gray-200 flex flex-row "
                >
                  <FaHandsHelping className="mr-2 w-4 mt-1" />
                  Hợp tác đại lý
                </Link> */}
              </li>
              <li>
                <Link
                  href={"/airline-tickets"}
                  className=" hover:text-gray-200 flex flex-row"
                >
                  <MdAirplanemodeActive className="mr-2 w-4 mt-1" />
                  Vé máy bay
                </Link>
              </li>
              <li>
                <Link href={"/hotel"} className=" hover:text-gray-200 flex flex-row">
                  <MdHotel className="mr-2 w-4 mt-1" />
                  Khách sạn
                </Link>
              </li>
              <li>
                <Link href={"https://datxe.sbayvietnam.com"} className=" hover:text-gray-200 flex flex-row">
                  <FaCar className="mr-2 w-4 mt-1" />
                  Đặt xe
                </Link>
              </li>
              <li>
                <Link href={"https://www.datve.sbayvietnam.com"} className=" hover:text-gray-200 flex flex-row">
                  <ImLocation className="mr-2 w-4 mt-1" />
                  Vé Bà Nà
                </Link>
              </li>
              {/* <li>
                <Link href={"/tour"} className=" hover:text-gray-200 flex flex-row">
                  <SiYourtraveldottv className="mr-2 w-4 mt-1" />
                  Tour du lịch
                </Link>
              </li> */}
              <li>
                <Link href={"/tool"} className=" hidden hover:text-gray-200 lg:flex flex-row">
                  <PiMegaphoneFill className="mr-2 w-4 mt-1" />
                  Tool marketing
                </Link>
              </li>

            </ul>
          </div>
        }

      </nav>

    </>
  );
}
