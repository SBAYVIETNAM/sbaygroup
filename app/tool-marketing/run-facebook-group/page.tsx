'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import Footer from '../../_components/footer';
import Link from 'next/link';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  }, [])

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <>

      <div className='sticky shadow-sm top-0 z-10 bg-red-600 px-5 py-3'>
        <div className=' grid grid-cols-12'>
          <Link href={'/'} className=' col-span-8'>
            <Image src={'/img/sbay-w-r.png'} width={50} height={30} alt={'Sbay group logo'} className=' rounded-full'></Image>
          </Link>
          <Link href={`tel:02363616616`} className=' col-span-4 justify-end flex flex-row'>
            <Icon.PhoneCall className='w-4 h-4 mr-2 mt-1 text-white' />
            <div className='text-sm text-end mt-1 hidden lg:block'>
              <strong className='ml-2 text-white'>0967 041 900</strong>
            </div>
          </Link>
        </div>
      </div>
      <div className=' flex flex-col'>
        <div className=" w-full flex flex-col mb-10 max-w-7xl mx-auto">
          <h1 className=' text-4xl font-bold text-center mt-10 text-red-600'>Facebook Group Marketing</h1>
          <p className=' text-center'>Dành cho nhân viên</p>
          <div className=' grid grid-cols-1 lg:grid-cols-2'>

            <div className=' py-20 px-5'>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại của bạn</label>
                <input type="text" id="success" className="bg-green-50 border text-gray-900 border-gray-300 rounded-lg cursor-pointer w-full dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="0989123123" />
              </div>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nội dung bài viết</label>
              <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Kính gửi quý anh chị [u]. Chúc quý anh chị một ngày tốt lành !">

              </textarea>


              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Hình ảnh gửi kèm</label>
              <input multiple className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


            </div>
            <div className=' py-20 px-5'>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh sách UID nhóm bạn cần gửi (phân tách các UID bằng phím Enter)</label>
              <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="730360583657466">

              </textarea>
              <div className='p-10'>
                <div className="flex flex-row btn rounded-full bg-red-500 text-white mx-auto mt-5"><Icon.Play className='w-4 h-4' />Chạy</div>
              </div>
            </div>

          </div>
        </div>

        {/* <Footer></Footer> */}
      </div>
    </>

  )
}
