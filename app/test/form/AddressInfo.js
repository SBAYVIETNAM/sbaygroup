"use client";

import React from "react";
import {useRef} from 'react';

function AddressInfo({ onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };
  const inputRef = useRef(null);
  function handleClick() {
    console.log('inputRef.current.value',inputRef.current.value);
  }
  return (
    <>
      {Array.from(Array(2), (e, i) => {
        return (
          <>
            <div className=" flex flex-col justify-start ...">
              <p className=" text-start px-3 text-md my-3 text-red-600 font-bold">Người lớn {i + 1}</p>
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
                  <input ref={inputRef} placeholder="Hoàng Văn Hải" type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
              {/* {typeOfTicket == 1 &&
                <div className=" flex flex-col px-3 py-5">
                  {<label htmlFor="baggage" className="block mb-2 text-sm font-medium text-start">Hành lý chiều đi</label>}
                  <select id="baggage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                    {departureBaggages.map((e: any, i: number) => {
                      return (
                        <option key={'departureBaggages' + i} value="20">Mua {e.Code} kg hành lý ({e.Price.toLocaleString()} VND)</option>
                      )
                    })}
                  </select>
                </div>
              } */}
            </div>
          </>
        )

      })}
      <button
        onClick={handleClick}
        type="button"
        className="text-white mt-5 bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Add</button>
      {/* <div>
        <h4>Address Info</h4>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          className="form-control" />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          className="form-control" />
      </div> */}
    </>

  );
}

export default AddressInfo;