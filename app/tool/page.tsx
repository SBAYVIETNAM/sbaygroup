'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import Footer from '../_components/footer';
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


      <div className=' flex flex-col'>
        <title>Công cụ Marketing</title>
        <div className=" w-full text-center flex flex-col mb-10 max-w-7xl mx-auto">
          <div className=' grid grid-cols-1 lg:grid-cols-2'>
            <div className='md:mt-24 '>
              <Image src={'/img/marketing-img.png'} width={500} height={500} alt={'Sbay tool marketing'} className=' rounded-full'></Image>
            </div>
            <div className='px-10'>
              <h1 className=' text-4xl font-bold mt-28 text-red-600'>Tool Marketing</h1>
              <p>Tiếp cận hàng triệu người với tool Marketing phát triển bởi Sbay</p>
              <div className=' grid grid-cols-3 p-5'>
                <Link href={'https://www.facebook.com/?auto-sbay=1'} className=' hover:bg-slate-400 p-5 rounded-xl' title='Click để chạy facebook marketing'>
                  <Image src={'/img/facebook.png'} width={300} height={500} alt={'Sbay facebook marketing'} className=' w-10 rounded-full mx-auto'></Image>
                  <p className=' text-sm mt-3 whitespace-nowrap'>Facebook Extension</p>
                </Link>
                <Link href={'https://chat.zalo.me/?auto-zalo=1'} className=' hover:bg-slate-400 p-5 rounded-xl' title='Click để chạy zalo marketing'>
                  <Image src={'/img/zalo.png'} width={300} height={500} alt={'Sbay zalo marketing'} className=' w-10 rounded-full mx-auto'></Image>
                  <p className=' text-sm mt-3 whitespace-nowrap'>Zalo Extension</p>
                </Link>
                <Link href={'https://tiktok.com/?autotiktok=1'} className=' hover:bg-slate-400 p-5 rounded-xl' title='Click để chạy tiktok marketing'>
                  <Image src={'/img/tiktok.png'} width={300} height={500} alt={'Sbay tiktok marketing'} className=' w-10 rounded-full mx-auto'></Image>
                  <p className=' text-sm mt-3 whitespace-nowrap'>Tiktok Extension</p>
                </Link>


              </div>
              <div className='px-10'>
                <a href='/files/auto-login.sbay.com.vn-files.zip' className="btn rounded-full flex flex-row  bg-red-600 text-white mx-auto mt-5"> <p className='flex flex-row mx-auto'><Icon.Download className='w-4 h-4 mt-1' />Tải về</p></a>
                <p className=' text-sm opacity-75 mx-auto'>Tải về, thêm Extension và nhấn chạy <a href='https://www.youtube.com/watch?v=D5BJr0jCkJY&embeds_referring_euri=https%3A%2F%2Fsbaygroup.net%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=SbayVi%E1%BB%87tNam' className=' text-red-600'>Xem video hướng dẫn</a></p>
              </div>
            </div>

          </div>
        </div>
        <div className=" w-full text-center flex flex-col mx-autopb-10">
          <h1 className=' text-2xl font-bold mt-5'>Một số Extension hỗ trợ khác</h1>
          <p className=' text-sm mb-5'>Tải về, thêm extension vào chrome và chạy</p>
          <div className=' grid grid-cols-2 max-w-7xl mx-auto'>

            <Link href={'/files/auto-zaloGroup-v1.6.rar'} className=' hover:bg-slate-400 p-5 rounded-xl'>
              <Image src={'/img/zalo.png'} width={300} height={500} alt={'Sbay zalo marketing'} className=' w-10 rounded-full mx-auto'></Image>
              <p className=' font-bold mt-3 whi'>ZaloGroup Extension</p>
              <p className=' text-sm'>Gửi tin nhắn cho người dùng cùng nhóm</p>

            </Link>
            <Link href={'/files/auto-zaloPhone-v1.2.rar'} className=' hover:bg-slate-400 p-5 rounded-xl'>
              <Image src={'/img/zalo.png'} width={300} height={500} alt={'Sbay zalo marketing'} className=' w-10 rounded-full mx-auto'></Image>
              <p className=' font-bold mt-3'>ZaloPhone Extension</p>
              <p className=' text-sm'>Gửi tin nhắn qua danh sách số điện thoại</p>

            </Link>
          </div>
        </div>
        <div className=" w-full text-center flex flex-col mx-auto bg-white pb-10">
          <h1 className=' text-2xl font-bold mt-5'>Chạy marketing tùy chỉnh</h1>
          <div className=' grid max-w-7xl mx-auto py-5'>

            <Link href={'/tool/run-facebook-group'} className='flex flex-row space-x-2 bg-blue-600 p-2 text-white rounded-xl'>
              <Icon.Facebook className='w-4 h-4 mt-1 mr-2' />
              Facebook Group Marketing
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}