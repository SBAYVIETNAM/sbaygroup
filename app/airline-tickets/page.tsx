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
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";

export default function AirLineTicket() {
  const airportOptions = [
    { value: 'HAN', label: 'Hà Nội', type: 'Miền Bắc' },
    { value: 'HPH', label: 'Hải Phòng', type: 'Miền Bắc' },
    { value: 'DIN', label: 'Điện Biên Phủ', type: 'Miền Bắc' },
    { value: 'VDO', label: 'Vân Đồn', type: 'Miền Bắc' },
    { value: 'SGN', label: 'Hồ Chí Minh', type: 'Miền Nam' },
    { value: 'PQC', label: 'Phú Quốc', type: 'Miền Nam' },
    { value: 'VCA', label: 'Cần Thơ', type: 'Miền Nam' },
    { value: 'VCS', label: 'Côn Đảo', type: 'Miền Nam' },
    { value: 'VKG', label: 'Kiên Giang', type: 'Miền Nam' },
    { value: 'DAD', label: 'Đà Nẵng', type: 'Miền Trung' },
    { value: 'CXR', label: 'Nha Trang', type: 'Miền Trung' },
    { value: 'DLI', label: 'Đà Lạt', type: 'Miền Trung' },
    { value: 'HUI', label: 'Huế', type: 'Miền Trung' },
    { value: 'BMV', label: 'Ban Mê Thuột', type: 'Miền Trung' },
    { value: 'PXU', label: 'PleiKu', type: 'Miền Trung' },
    { value: 'TBB', label: 'Phú Yên', type: 'Miền Trung' },
    { value: 'THD', label: 'Thanh Hóa', type: 'Miền Trung' },
    { value: 'UIH', label: 'Qui Nhơn', type: 'Miền Trung' },
    { value: 'VCL', label: 'Chu Lai', type: 'Miền Trung' },
    { value: 'VDH', label: 'Quảng Bình', type: 'Miền Trung' },
    { value: 'VII', label: 'Vinh', type: 'Miền Trung' },
    { value: 'BKK', label: 'Băng Cốc', type: 'Châu Á' },
    { value: 'CAN', label: 'Quảng Châu', type: 'Châu Á' },
    { value: 'HKG', label: 'Hồng Kông', type: 'Châu Á' },
    { value: 'KUL', label: 'Kuala Lumpur', type: 'Châu Á' },
    { value: 'ICN', label: 'Seoul, Incheon', type: 'Châu Á' },
    { value: 'SHA', label: 'Thượng Hải', type: 'Châu Á' },
    { value: 'SIN', label: 'Singapore', type: 'Châu Á' },
    { value: 'TPE', label: 'Đài Bắc', type: 'Châu Á' },
    { value: 'TYO', label: 'Tokyo', type: 'Châu Á' },
    { value: 'KOS', label: 'Campuchia', type: 'Châu Á' },
    { value: 'AMS', label: 'Amsterdam', type: 'Châu Âu' },
    { value: 'CPH', label: 'Cô-pen-ha-gen', type: 'Châu Âu' },
    { value: 'FRA', label: 'Frankfurt', type: 'Châu Âu' },
    { value: 'LON', label: 'London', type: 'Châu Âu' },
    { value: 'PAR', label: 'Paris', type: 'Châu Âu' },
    { value: 'PRG', label: 'Praha', type: 'Châu Âu' },
    { value: 'STO', label: 'Stockholm', type: 'Châu Âu' },
    { value: 'ZRH', label: 'Zurich', type: 'Châu Âu' },
    { value: 'DFW', label: 'Dallas', type: 'Châu Úc' },
    { value: 'HOU', label: 'Houston', type: 'Châu Úc' },
    { value: 'LAX', label: 'Los Angeles', type: 'Châu Úc' },
    { value: 'MEL', label: 'Men-bơn', type: 'Châu Úc' },
    { value: 'NYC', label: 'New York', type: 'Châu Úc' },
    { value: 'SFO', label: 'San Francisco', type: 'Châu Úc' },
    { value: 'SYD', label: 'Sydney', type: 'Châu Úc' },
    { value: 'YTO', label: 'Toronto', type: 'Châu Úc' },
    { value: 'YVR', label: 'Vancouver', type: 'Châu Úc' },
  ]
  const [today, setToday] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [minDate, setMinDate] = useState(format(addDays(new Date(), 0), 'yyyy-MM-dd'))
  const [maxDate, setMaxDate] = useState(format(addDays(new Date(), 365), 'yyyy-MM-dd'))
  const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className=" mt-32 bg-white mx-auto rounded-3xl p-5">
      <div className="flex bg-amber-500 rounded-xl min-h-max flex-col max-w-7xl mx-auto justify-between">
        <div className=" flex flex-row space-x-2 p-3">
          <div className="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-white">Một chiều</label>
          </div>
          <div className="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-white">Khứ hồi</label>
          </div>
        </div>
        <div className=" grid grid-cols-12 my-auto">
          <div className=" col-span-12 xl:col-span-4 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 mb-5 justify-between ...">
            <div className=" flex flex-col space-y-1 w-full">
              <div className=' flex flex-row'>
                <FaPlaneDeparture className="mr-1 w-3 mt-0.5 text-white" />
                <label htmlFor="from" className="block text-sm font-medium text-white dark:text-white">Từ</label>
              </div>
              <Select
                id="from"
                placeholder="Nơi đi"
                options={airportOptions}
                formatOptionLabel={(airportOptions: any) => {
                  return (
                    <>
                      <div className='flex flex-col'>
                        <p className='font-bold text-sm'>{airportOptions.label + ' (' + airportOptions.value + ')'}</p>
                        <span className=' text-xs'>{airportOptions.type}</span>
                      </div>
                    </>
                  )
                }}
                className="w-full " />
            </div>
            <div className=" flex flex-col space-y-1 w-full">
              <div className=' flex flex-row'>
                <FaPlaneArrival className="mr-1 w-3 mt-0.5 text-white" />
                <label htmlFor="to" className="block text-sm font-medium text-white dark:text-white">Đến</label>
              </div>
              <Select
                id="to"
                placeholder="Nơi đến"
                options={airportOptions}
                formatOptionLabel={(airportOptions: any) => {
                  return (
                    <>
                      <div className='flex flex-col'>
                        <p className='font-bold text-sm'>{airportOptions.label + ' (' + airportOptions.value + ')'}</p>
                        <span className=' text-xs'>{airportOptions.type}</span>
                      </div>
                    </>
                  )
                }}
                className="w-full" />
            </div>
          </div>

          <div className=" col-span-12 xl:col-span-4 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 justify-between ...">
            <div className=" flex flex-col space-y-1 w-full">
              <div className=' flex flex-row'>
                <FaRegCalendar className="mr-1 w-3 mt-0.5 text-white" />
                <label htmlFor="fromDate" className="block text-sm font-medium text-white dark:text-white">Ngày đi</label>
              </div>
              <input id="fromDate" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" value={today} min={minDate} max={maxDate} />
            </div>
            <div className=" flex flex-col space-y-1 w-full">
              <div className=' flex flex-row'>
                <FaRegCalendarCheck className="mr-1 w-3 mt-0.5 text-white" />
                <label htmlFor="toDate" className="block text-sm font-medium text-white dark:text-white">Ngày đến</label>
              </div>
              <input id="toDate" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" value={today} min={minDate} max={maxDate} />

            </div>
          </div>

          <div className='relative col-span-6 xl:col-span-2 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between ...'>

            <div className=' col-span-4'>
              <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-white">Số lượng khách</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="1 người lớn" required />
            </div>
            <div className="absolute col-span-4 top-20 bg-amber-500 rounded-xl p-5 shadow-lg ...">
              <form className="max-w-xs mb-3">
                <label htmlFor="quantity-input" className="block text-sm font-medium">Người lớn (từ 12 tuổi):</label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={1} placeholder="1" required />
                  <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </form>
              <form className="max-w-xs mb-3">
                <label htmlFor="quantity-input" className="block text-sm font-medium">Trẻ em (từ 2-12 tuổi):</label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                  <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </form>
              <form className="max-w-xs">
                <label htmlFor="quantity-input" className="block text-sm font-medium">Em bé (dưới 2 tuổi):</label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                  <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

          </div>
          <div className=" col-span-6 xl:col-span-2 px-3 flex flex-col justify-between ...">
            <label className="block text-sm font-medium text-white invisible">Tìm</label>
            <button type="button" className="text-white mb-5 bg-blue-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10">Tìm kiếm</button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto py-2">
        <div className="xl:grid hidden xl:visible xl:col-span-3 shadow-xl ... rounded-xl">
          <div className="flex flex-col space-y-5 p-5">
            <div className="flex flex-col space-y-5 p-5 border-b-2">
              <h3>Hiển thị giá</h3>
              <div className="flex items-center mb-4">
                <input checked id="priceRadio1" type="radio" value="" name="priceRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="priceRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá bao gồm thuế phí</label>
              </div>
              <div className="flex items-center">
                <input id="priceRadio2" type="radio" value="" name="priceRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="priceRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá chưa gồm thuế phí</label>
              </div>
            </div>
            <div className="flex flex-col space-y-5 p-5 border-b-2">
              <h3>Sắp xếp</h3>
              <div className="flex items-center mb-4">
                <input checked id="priceLowRadio" type="radio" value="" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="sortRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá (Thấp tới Cao)</label>
              </div>
              <div className="flex items-center">
                <input id="timeStartRadio" type="radio" value="" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="sortRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thời gian khởi hành</label>
              </div>
              <div className="flex items-center mb-4">
                <input id="byAir" type="radio" value="" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="sortRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hãng hàng không</label>
              </div>
            </div>
            <div className="flex flex-col space-y-5 p-5 border-b-2">
              <h3>Hãng hàng không</h3>
              <div className="flex items-center mb-4">
                <input checked id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bamboo Airways</label>
              </div>
              <div className="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietjet Air</label>
              </div>

              <div className="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietnam Airlines</label>
              </div>

              <div className="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietravel Airlines</label>
              </div>
              <div className="flex flex-col space-y-3">
                <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Copy text</button>
                <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Chụp ảnh</button>
                <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Xóa bộ lọc</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-12 xl:col-span-9">
          <div className=" text-sm max-h-36 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <div className=" text-start pt-2 bg-red-100">
              <h1 className="text-black mx-3 text-xl font-bold">Hà Nội, Việt Nam (HAN)- Hồ Chí Minh, Việt Nam (SGN)</h1>
              <p className=" mx-3">01 Khách - 01/01</p>
            </div>
            <ul className="flex flex-row justify-between ...">
              <li className="mx-auto border-b-2 border-red-600">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
              <li className="mx-auto">
                <a href="#" className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thứ 6 <br /> 29/12</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5 mt-5">
            {m.map((e, i) => {
              return (
                <>
                  <div className=" grid grid-cols-12 h-20 shadow-md ... rounded-xl hover:bg-stone-100">
                    <div className="grid col-span-8 xl:col-span-2 border-r-2 px-3">
                      <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                        <div className="font-medium dark:text-white">
                          <div>Vietjet Air</div>
                          <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                            <p>VJ197</p>
                            <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                          </div>
                          <p className=" block xl:hidden text-xs">Từ: 08:05, đến: 10:15</p>

                        </div>
                      </div>
                    </div>
                    <div className=" hidden xl:grid grid-cols-6 col-span-4 xl:col-span-7 border-r-2 p-3">
                      <div className=" col-span-6 xl:col-span-1 px-3">
                        <p className="text-center">05:00</p>
                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HAN</p>
                      </div>
                      <div className="col-span-6 xl:col-span-4">
                        <div className="flex flex-row space-x-3">
                          <FaPlaneDeparture className="w-4 my-auto" />
                          <div className="flex flex-col w-full space-y-2">
                            <p className="text-center text-xs">02h 10m</p>
                            <div className="border-dashed border-b-2 ..."></div>
                            <p className="text-center text-xs">Bay thẳng</p>
                          </div>
                          <FaPlaneArrival className="w-4 my-auto" />
                        </div>
                      </div>
                      <div className=" col-span-6 xl:col-span-1 px-3">
                        <p className="text-center">07:00</p>
                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">SGN</p>
                      </div>

                    </div>
                    <div className="grid col-span-4 xl:col-span-3">
                      <div className="flex flex-col px-5 space-y-1">
                        <h4 className="text-red-600 text-lg font-bold text-center">1,584,800</h4>
                        <button type="button" className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
