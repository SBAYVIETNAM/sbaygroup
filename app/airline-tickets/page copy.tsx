"use client";
import { useState } from "react";
import { BsAirplaneEngines } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import {
  AiOutlineCloseCircle,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from "dayjs";
export default function AirLineTicket() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowModalArr, setIsShowModalArr] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<string>("");
  const [adults, setAdults] = useState<number>(1);
  const [childrens, setChildrens] = useState<number>(0);
  const [babys, setBabys] = useState<number>(0);
  const [type, setType] = useState<string>("one-way");
  const [startDate, setStartDate] = useState<any>({
    startDate: dayjs().format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  });
  const [endDate, setEndDate] = useState<any>({
    startDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
    endDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setStartDate(newValue);
  };

  const handleRadioChange = (e: any) => {
    setType(e.target.value);
  };
  const handOpenModal = (type: string) => {
    setIsShowModal(true);
    setTypeModal("");
  };

  const Modal = () => {
    return (
      <>
        <div className="flex p-2 bg-white flex-row justify-between items-center">
          <p className=" text-sky-500 text-lg">CHỌN ĐIỂM ĐI</p>
          <AiOutlineCloseCircle
            size={20}
            onClick={() => {
              setIsShowModal(false);
              setIsShowModalArr(false);
            }}
            color="red"
          />
        </div>
        <div>
          <div className="p-2 bg-white">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập thành phố/ mã sân bay"
                required
              />
            </div>
            <div className="flex md:flex-row flex-col my-3">
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  MIỀN BẮC
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Hà Nội
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Hải Phòng
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Điện Biên Phủ
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Vân Đồn
                </p>
              </div>
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  MIỀN NAM
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Hồ Chí Minh
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Phú Quốc
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Cà Mau
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Cần Thơ
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Côn Đảo
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Kiên giang
                </p>
              </div>
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  MIỀN TRUNG
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Đà Nẵng
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Nha Trang
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Đà Lạt
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Huế
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Ban Mê Thuột
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Chu Lai
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Phú Yên
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  PleiKu
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Thanh Hóa
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Qui Nhơn
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Quảng Bình
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Vinh
                </p>
              </div>
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  CHÂU Á
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Hồng Kông
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Kuala Lumpur
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Seoul, Incheon
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Thượng Hải
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Singapore
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Tokyo
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Campuchia
                </p>
              </div>
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  CHÂU ÂU
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Amsterdam
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Cô-pen-ha-gen
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Frankfurt
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  London
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Paris
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Praha
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Stockholm
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Zurich
                </p>
              </div>
              <div className="mr-10">
                <p className=" text-sky-500 text-base mb-2 font-semibold">
                  CHÂU ÚC & MỸ
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Dallas
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Houston
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Los Angeles
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Men-bơn
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  New York
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  San Francisco
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Sydney
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Toronto
                </p>
                <p className="mb-1 md:font-semibold hover:bg-sky-500 cursor-pointer">
                  Vancouver
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className=" bg-sky-500 p-10">
        <div className="container md:mx-auto bg-white p-4">
          <div className="flex flex-row max-w-max py-2 items-center border-b-sky-500 border-b-2">
            <BsAirplaneEngines
              color="#2596be"
              size={30}
              className="rotate-90"
            />
            <p className="ml-3 text-sky-500">Vé máy bay</p>
          </div>
          <div className="flex md:flex-row flex-col my-2 justify-between items-start  md:items-center">
            <div className="flex flex-row">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="one-way"
                  name="default-radio"
                  defaultChecked={type === "one-way"}
                  checked={type === "one-way"}
                  onChange={handleRadioChange}
                  className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Một chiều
                </label>
              </div>
              <div className="flex items-center ps-3">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="round-trip"
                  name="default-radio"
                  checked={type === "round-trip"}
                  onChange={handleRadioChange}
                  className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Khứ hồi
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                VÉ RẺ THEO THÁNG
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:mt-2 mt-5 md:grid-cols-3 gap-4">
            <div>
              <div>
                <p className=" text-stone-500 text-base">Điểm đi</p>
                <div
                  onClick={() => setIsShowModal(true)}
                  className="px-1 flex flex-row items-center  justify-between w-full md:w-[90%] border-b-sky-500 border-b py-3"
                >
                  Nhập thành phố/ mã sân bay
                  <FiChevronDown size={20} className="ml-3" />
                </div>
                {/* modal */}
                <div
                  className={`${
                    isShowModal ? "block" : "hidden"
                  } top-0 left-0 w-full border md:top-auto md:left-auto md:w-auto absolute z-50`}
                >
                  <Modal />
                </div>
                {/* endModal */}
              </div>
              <div className="mt-5">
                <p className=" text-stone-500 text-base">Điểm đến</p>
                <div
                  onClick={() => setIsShowModalArr(true)}
                  className="px-1 flex flex-row items-center  justify-between w-full md:w-[90%] border-b-sky-500 border-b py-3"
                >
                  Nhập thành phố/ mã sân bay
                  <FiChevronDown size={20} className="ml-3" />
                </div>
                {/* modal */}
                <div
                  className={`${
                    isShowModalArr ? "block" : "hidden"
                  } top-0 left-0 w-full border md:top-auto md:left-auto md:w-auto absolute z-50`}
                >
                  <Modal />
                </div>
                {/* endModal */}
              </div>
            </div>
            <div>
              <div>
                <p className=" text-stone-500 text-base">Ngày đi</p>

                <div className="block  py-1 w-full z-30 text-base text-gray-900 bg-white  border-b-sky-500 border-b ">
                  <Datepicker
                    asSingle={true}
                    value={startDate}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className=" text-stone-500 text-base">Ngày về</p>

                <div className="block  py-1 w-full z-30 text-base text-gray-900 bg-white  border-b-sky-500 border-b ">
                  <Datepicker
                    asSingle={true}
                    disabled={type === "one-way"}
                    value={endDate}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex-row flex">
                <div className="w-1/3  flex justify-center flex-col items-center">
                  <p>Người lớn</p>
                  <div className="flex border-2 w-full px-1 py-2.5 flex-row justify-between items-center">
                    <button
                      onClick={() => setAdults((pre) => pre - 1)}
                      disabled={adults === 1}
                    >
                      <AiOutlineMinusSquare color="#2596be" size={22} />
                    </button>
                    <p>{adults}</p>
                    <button onClick={() => setAdults((pre) => pre + 1)}>
                      <AiOutlinePlusSquare color="#2596be" size={22} />
                    </button>
                  </div>
                </div>
                <div className="w-1/3 mx-2 flex justify-center flex-col items-center">
                  <p>Trẻ em</p>
                  <div className="flex border-2 w-full px-1 py-2.5 flex-row justify-between items-center">
                    <button
                      onClick={() => setChildrens((pre) => pre - 1)}
                      disabled={childrens === 0}
                    >
                      <AiOutlineMinusSquare
                        color={childrens !== 0 ? "#2596be" : "#cccccc"}
                        size={22}
                      />
                    </button>
                    <p>{childrens}</p>
                    <button onClick={() => setChildrens((pre) => pre + 1)}>
                      <AiOutlinePlusSquare color="#2596be" size={22} />
                    </button>
                  </div>
                </div>
                <div className="w-1/3  flex justify-center flex-col items-center">
                  <p>Em bé</p>
                  <div className="flex border-2 w-full px-1 py-2.5 flex-row justify-between items-center">
                    <button
                      onClick={() => setBabys((pre) => pre - 1)}
                      disabled={babys === 0}
                    >
                      <AiOutlineMinusSquare
                        color={babys !== 0 ? "#2596be" : "#cccccc"}
                        size={22}
                      />
                    </button>
                    <p>{babys}</p>
                    <button onClick={() => setBabys((pre) => pre + 1)}>
                      <AiOutlinePlusSquare color="#2596be" size={22} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="mt-12 w-full rounder rounded-md px-1 py-3 bg-sky-500  "
                >
                  TÌM KIẾM CHUYẾN BAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
