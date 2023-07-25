import Image from 'next/image'
import React from 'react';
import * as Icon from 'react-feather';
import Footer from './components/footer';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ | Sbay Việt Nam',
  description: 'Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam',
  authors: [{ name: 'Chung Le Ba', url: 'https://www.facebook.com/chung.leba' },{ name: 'Sang', url: 'https://www.facebook.com/vansang153' }],
  creator: 'Chung Le Ba',
  publisher: 'Chung Le Ba',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: 'img/sbay-w-r.png',
  },
}
export default function Home() {
  return (
    <>
      <div className='sticky shadow-sm top-0 z-10 text-white px-5 py-3'>
        <div className=' grid grid-cols-12'>
          <div className=' col-span-8'>
            <Image src={'/img/sbay-w-r.png'} width={50} height={30} alt={'Sbay group logo'} className=' rounded-full'></Image>
          </div>
          <a href={`tel:02363616616`} className=' col-span-4 justify-end flex flex-row'>
            <Icon.PhoneCall className='w-4 h-4 mr-2 mt-1' /> Hotline 
            <div className='text-sm text-end mt-1 hidden lg:block'><strong className='ml-2'>0967 041 900</strong></div>
          </a>
        </div>
      </div>
      <div className="hero h-screen bg-cyan-50 -mt-10">
        <div className="hero-content text-center flex flex-col">
          <div className="video-docker absolute top-0 left-0 w-full h-screen overflow-hidden z-0">

            <video className="min-w-full min-h-full absolute object-cover" src="/img/bg-video.mp4" autoPlay muted loop></video>
          </div>
          <div className="max-w-md z-10">
            <h1 className="text-5xl font-bold text-cyan-50 mb-0">Sbay Việt Nam</h1>
            <p className="py-3 text-cyan-50">Kiến tạo sự nghiệp.</p>
          </div>
          <div className='grid grid-cols-3 gap-6 z-10'>

            <Link href={'https://sbaygroup.com/flight'}>
              <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
                <div>
                  <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                      <Image width={256} height={256} src="/img/air.png" alt='ve-may-bay' style={{ 'objectFit': 'contain' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='  font-bold text-cyan-50'>Vé máy bay</h2>
                </div>
              </div>
            </Link>
            <Link href={'https://www.sbayhoteldanang.com/'}>
              <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
                <div>
                  <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                      <Image width={256} height={256} alt='Phòng khách sạn Đà Nẵng' src="/img/hotel.png" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='  font-bold text-cyan-50'>Khách sạn</h2>
                </div>
              </div>
            </Link>

            <Link href={'https://datxe.sbayvietnam.com/'}>
              <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
                <div>
                  <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                      <Image width={256} height={256} alt='xe cho thuê' src="/img/thue-xe.png" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='  font-bold text-cyan-50'>Xe cho thuê</h2>

                </div>
              </div>
            </Link>
            <Link href={'https://datve.sbayvietnam.com/'}>
              <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
                <div>
                  <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                      <Image width={256} height={256} alt='vé Bà Nà' src="/img/ticket.png" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='  font-bold text-cyan-50'>Vé Bà Nà</h2>

                </div>
              </div>
            </Link>

            <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
              <div>
                <div className="avatar">
                  <div className="w-16 mask mask-squircle">
                    <Image width={256} height={256} alt='tuor du lịch' src="/img/du-lich.png" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className='  font-bold text-cyan-50'>Tour Du lịch</h2>

              </div>
            </div>
            <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
              <div>
                <div className="avatar">
                  <div className="w-16 mask mask-squircle">
                    <Image width={256} height={256} alt='vé xe khách' src="/img/xe-khach.png" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className='  font-bold text-cyan-50'>Xe khách</h2>

              </div>
            </div>
          </div>
          <div className="max-w-md z-10">
            <p className="py-3 text-cyan-50 mt-5">Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam</p>
          </div>
          <div className=" grid grid-cols-2 max-w-md z-10 mb-5">

            <Link href={'https://apps.apple.com/vn/app/sbaygroup/id64462563480?l=vi'}>
              <Image src={'/img/ios.png'} width={120} height={30} alt={'Sbay iso'} className=' rounded-sm mr-2'></Image>
            </Link>
            <Link href={'https://play.google.com/store/apps/details?id=com.sbgroup.booking_android&hl=vi-VN'}>
              <Image src={'/img/gg-play.png'} width={120} height={30} alt={'Sbay iso'} className=' rounded-sm ml-2'></Image>
            </Link>

          </div>
          <div className='grid grid-cols-2 gap-10 z-10'>
            <Link href={'https://sbaygroup.com/?dang-nhap=1'} className='text-white text-sm flex flex-row'>
              Đăng nhập Đại lý <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://work.sbayvietnam.com'} className='text-white text-sm flex flex-row'>
              Đăng nhập WorkPlace <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>

  )
}
