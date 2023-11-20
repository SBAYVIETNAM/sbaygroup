"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Icon from "react-feather";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky shadow-sm bg-white top-0 z-50 text-white px-5 py-5">
        <div className="flex flex-row container mx-auto  justify-between">
          <div className="flex flex-row">
            <Image
              src={"/img/sbay-w-r.png"}
              width={50}
              height={30}
              alt={"Sbay group logo"}
              className=" rounded-full"
            ></Image>
            <Link
              href={`tel:02363616616`}
              className="col-span-4 ml-5 flex justify-end items-center md:hidden text text-slate-900 flex-row"
            >
              {" "}
              <Icon.PhoneCall className="w-5 h-5 mr-2 md:block mt-1" />
            </Link>
          </div>
          <div className="hidden w-[50%] md:flex md:flex-row md:justify-between md:mr-40">
            <Link href={"/"} className="text-black hover:text-red-600">
              Trang chủ
            </Link>
            <Link href={"/hotel"} className="text-black hover:text-red-600">
              Khách sạn Đà Nẵng
            </Link>
            <Link
              href={"/airline-tickets"}
              className="text-black hover:text-red-600 "
            >
              Vé máy bay
            </Link>
            <Link href={"/car"} className="text-black hover:text-red-600 ">
              Đặt xe
            </Link>
            <Link href={"/tour"} className="text-black hover:text-red-600 ">
              Tour du lịch
            </Link>
          </div>
          <button
            onClick={(e) => {
              setIsOpen(!isOpen);
              e.preventDefault();
            }}
            type="button"
            className="col-span-4 flex justify-end items-center md:hidden text text-slate-900 flex-row"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="fixed z-50"
      >
        {(ref) => (
          <div
            className="md:hidden bg-white fixed w-screen z-50"
            id="mobile-menu"
            style={{
              zIndex: 1000,
            }}
          >
            <div ref={ref} className="">
              <a
                href="/"
                className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Trang chủ
              </a>

              <a
                href="/hotel"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Khách sạn Đà Nẵng
              </a>
              <a
                href="/"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Vé máy bay
              </a>
              <a
                href="/car"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Đặt xe
              </a>
              <a
                href="/tour"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Tour du lịch
              </a>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
