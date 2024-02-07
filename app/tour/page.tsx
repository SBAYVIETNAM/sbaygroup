"use client";
import Image from "next/image";
import Link from "next/link";
import SliderTour from "./moretour";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
export default function Tour() {
  const [value, setValue] = useState<any>(null);

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="w-full">
      <div className="w-full py-5 bg-[#e5e5e5]">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center">
          <div className="relative md:w-[30%] w-full md:px-0 px-2">
            <div className="absolute inset-y-0 ml-2 md:ml-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border rounded-sm bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tìm tour..."
              required
            />
          </div>
          <div className="md:w-[30%]  w-full md:px-0 mt-2 md:mt-0 px-2 md:ml-10">
            <Datepicker
              placeholder="Chọn ngày bắt đầu và ngày kết thúc"
              separator={"to"}
              inputClassName={"w-full p-3 bg-white text-sm border rounded-sm"}
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <div className="flex md:w-[40%] w-full md:justify-end justify-start md:px-0 px-2 mt-2 md:mt-0">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-lg px-5 py-2.5 text-center"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full py-10">
          {[1, 2, 3, 4].map((item: number, i: number) => (
            <div
              key={i}
              className="shadow-md mb-5 flex md:flex-row flex-col p-2 w-full"
            >
              <div className="relative md:w-2/6 w-full overflow-hidden">
                <Image
                  className="scale-100 hover:scale-110 duration-500 transition"
                  priority
                  width={200}
                  height={400}
                  src="/img/thien-duong.jpeg"
                  alt="ve-may-bay"
                  style={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex md:flex-row flex-col">
                <div className="py-4 px-6">
                  <Link
                    href={"/tour/123"}
                    className="text-lg cursor-pointer my-2 md:font-medium text-sky-700"
                  >
                    DU LỊCH TẠI ĐÀ NẴNG - HỘI AN - BÀ NÀ - ĐỘNG THIÊN ĐƯỜNG -
                    HUẾ
                  </Link>
                  <p className="text-base cursor-pointer my-4 md:font-medium text-zinc-600">
                    TP. HỒ CHÍ MINH - HUẾ | HỘI AN | ĐÀ NẴNG
                  </p>
                  <p>Thời gian : 5 ngày 4 đêm</p>
                  <p>Phương tiện : Hàng không Vietnam Airlines</p>
                  <p>
                    - Khởi hành thứ 4 (bao gồm VMB): 01, 15, 22, 29/11; 06, 13,
                    20/12/2023..
                  </p>
                </div>
                <div className=" p-4 flex justify-center">
                  <button className="text-white bg-gradient-to-r h-10 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-2 py-2.5 text-center flex flex-row items-center mr-2 mb-2">
                    Giá từ
                    <p className="text-white ml-2 font-medium text-base">
                      7.479.000
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-red-600 text-center text-2xl font-extralight py-2">
            KHÁCH SẠN SBAY HOTEL
          </p>
          <p className="text-black text-center text-4xl md:font-extralight pb-4">
            ĐỊA ĐIỂM DU LỊCH
          </p>
          <div className="my-5">
            <SliderTour />
          </div>
        </div>
      </div>
    </div>
  );
}
