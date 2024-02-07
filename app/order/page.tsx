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

  return (
    <div className=" mt-28 bg-white mx-auto rounded-3xl p-5">
      <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto py-2">
        <div className="grid col-span-12 xl:col-span-8">
          <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <div className=" text-start bg-red-500 py-3">
              <h1 className="text-white mx-3 text-xl font-bold">Thông tin khách hàng</h1>
            </div>
            <div className=" flex flex-col justify-start ...">
              <p className=" text-start px-3 text-md my-3 text-black">1. Người lớn</p>
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className="col-span-2">
                  <label htmlFor="adults" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                  <select id="adults" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div className=' col-span-4'>
                  <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                  <input placeholder="Hoàng Văn Hải" type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
              <div className=" flex flex-col px-3 py-5">
                {/* <label htmlFor="baggage" className="block mb-2 text-sm font-medium text-start">Hành lý</label> */}
                <select id="baggage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                  <option value="20">Mua 20 kg hành lý (195,000 VND)</option>
                  <option value="30">Mua 30 kg hành lý (292,000 VND)</option>
                  <option value="40">Mua 40 kg hành lý (389,000 VND)</option>
                  <option value="50">Mua 50 kg hành lý (486,000 VND)</option>
                  <option value="60">Mua 60 kg hành lý (584,000 VND)</option>
                  <option value="70">Mua 70 kg hành lý (681,000 VND)</option>
                  <option value="20+">Mua 20 kg HLQK hành lý (411,000 VND)</option>
                  <option value="30+">Mua 30 kg HLQK hành lý (508,000 VND)</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col justify-start ...">
              <p className=" text-start px-3 text-md my-3 text-black">2.Trẻ em</p>
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className="col-span-2">
                  <label htmlFor="child" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                  <select id="child" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div className=' col-span-2'>
                  <label htmlFor="childFullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                  <input placeholder="Hoàng Văn Hải" pattern="Hoàng Văn Nam" type="text" id="childFullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-2'>
                  <div className=' flex flex-row'>
                    <label htmlFor="childBirthDay" className="block text-sm font-medium mb-2">Ngày sinh</label>
                  </div>
                  <input id="childBirthDay" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" />
                </div>
              </div>
              <div className=" flex flex-col px-3 py-5">
                {/* <label htmlFor="baggage" className="block mb-2 text-sm font-medium text-start">Hành lý</label> */}
                <select id="baggage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                  <option value="20">Mua 20 kg hành lý (195,000 VND)</option>
                  <option value="30">Mua 30 kg hành lý (292,000 VND)</option>
                  <option value="40">Mua 40 kg hành lý (389,000 VND)</option>
                  <option value="50">Mua 50 kg hành lý (486,000 VND)</option>
                  <option value="60">Mua 60 kg hành lý (584,000 VND)</option>
                  <option value="70">Mua 70 kg hành lý (681,000 VND)</option>
                  <option value="20+">Mua 20 kg HLQK hành lý (411,000 VND)</option>
                  <option value="30+">Mua 30 kg HLQK hành lý (508,000 VND)</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col justify-start ...">
              <p className=" text-start px-3 text-md my-3 text-black">3.Em bé</p>
              <div className=" grid grid-cols-6 gap-4 px-3 mb-5">
                <div className="col-span-2">
                  <label htmlFor="baby" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                  <select id="baby" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div className=' col-span-2'>
                  <label htmlFor="babyFullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                  <input placeholder="Hoàng Thị Hân" type="text" id="babyFullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-2'>
                  <div className=' flex flex-row'>
                    <label htmlFor="babyBithDay" className="block text-sm font-medium mb-2">Ngày sinh</label>
                  </div>
                  <input id="babyBithDay" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="grid col-span-12 xl:col-span-8">
          <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <div className=" text-start bg-red-100 py-3">
              <h1 className="text-black mx-3 text-xl font-bold">Thông tin liên hệ, hóa đơn</h1>
            </div>
            <div className=" flex flex-col justify-start ...">
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className="col-span-2">
                  <label htmlFor="contactGender" className="block my-2 text-sm font-medium text-start">Giới tính</label>
                  <select id="contactGender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div className=' col-span-4'>
                  <label htmlFor="contactName" className="block my-2 text-sm font-medium text-start">Họ và tên</label>
                  <input placeholder="Hoàng Văn Hải" type="text" id="contactNamefirst_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className=' col-span-3'>
                  <label htmlFor="contactPhone" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                  <input placeholder="0912123123" type="text" id="contactPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-3'>
                  <label htmlFor="contactEmail" className="block my-2 text-sm font-medium text-start">Email</label>
                  <input placeholder="vanhai@gmail.com" type="text" id="contactEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
            </div>
            <div className="flex items-center p-3">
              <input checked id="checkedVAT" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checkedVAT" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Xuất hóa đơn</label>
            </div>
            <div className=" flex flex-col justify-start ...">
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className=' col-span-3'>
                  <label htmlFor="companyName" className="block my-2 text-sm font-medium text-start">Tên công ty</label>
                  <input placeholder="Công ty TNHH MTV Hoàng Hải" type="text" id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-3'>
                  <label htmlFor="companyTAX" className="block my-2 text-sm font-medium text-start">Mã số thuế</label>
                  <input placeholder="8858191965" type="text" id="companyTAX" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
              <div className=" grid grid-cols-6 gap-4 px-3">
                <div className=' col-span-6'>
                  <label htmlFor="companyAddress" className="block my-2 text-sm font-medium text-start">Địa chỉ</label>
                  <input placeholder="44 Lê Thái Tổ, phường Hàng Trống, Hoàn Kiếm, Hà Nội" type="text" id="companyAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

              </div>
              <div className=" grid grid-cols-6 gap-4 px-3 mb-5">
                <div className=' col-span-2'>
                  <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Người nhận hóa đơn</label>
                  <input placeholder="Hoàng Văn Hải" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-2'>
                  <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                  <input placeholder="09123123123" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className=' col-span-2'>
                  <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Email nhận hóa đơn</label>
                  <input placeholder="hoanghai@gmail.com" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=" fixed top-24 right-5 bg-white grid col-span-12 xl:col-span-4 shadow-xl ... rounded-xl">
        <div className=" flex flex-col space-y-5 p-5">
          <div className="flex flex-col space-y-3">
            <h3>Thông tin đặt chỗ</h3>
            <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
              <p className=" text-xs text-end mb-2">Chiều đi</p>
              <div className="px-3">
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
              <div className=" grid grid-cols-6 py-5">
                <div className=" col-span-1">
                  <p className="text-center">05:00</p>
                  <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HAN</p>
                </div>
                <div className="col-span-4">
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
                <div className=" col-span-1">
                  <p className="text-center">07:00</p>
                  <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">SGN</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
              <p className=" text-xs text-end mb-2">Chiều về</p>
              <div className="px-3">
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
              <div className=" grid grid-cols-6 py-5">
                <div className=" col-span-1">
                  <p className="text-center">05:00</p>
                  <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HAN</p>
                </div>
                <div className="col-span-4">
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
                <div className=" col-span-1">
                  <p className="text-center">07:00</p>
                  <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">SGN</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <p className=" text-xs text-end">Thông tin thanh toán</p>
              <div className=" flex flex-row justify-between ...">
                <p>
                  Người lớn (1,476,800 x 01)
                </p>
                <p className=" font-bold">
                  1,476,800 VNĐ
                </p>
              </div>
              <div className=" flex flex-row justify-between ...">
                <p>
                  Người lớn (1,476,800 x 01)
                </p>
                <p className=" font-bold">
                  1,476,800 VNĐ
                </p>
              </div>
              <div className=" flex flex-row justify-between ...">
                <p>
                  Người lớn (1,476,800 x 01)
                </p>
                <p className=" font-bold">
                  1,476,800 VNĐ
                </p>
              </div>
              <div className=" flex flex-row justify-between ...">
                <p>
                  Hành lí bổ sung
                </p>
                <p className=" font-bold">
                  0 VNĐ
                </p>
              </div>
              <div className=" flex flex-row justify-between ...">
                <p>
                  Tổng cộng
                </p>
                <p className=" font-bold">
                  3,001,600 VNĐ
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Đặt vé</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
