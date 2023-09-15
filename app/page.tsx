import Image from 'next/image'
import React from 'react';
import * as Icon from 'react-feather';
import Footer from './_components/footer';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ | Sbay Việt Nam',
  description: 'Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam',
  authors: [{ name: 'Chung Le Ba', url: 'https://www.facebook.com/chung.leba' }, { name: 'Sang', url: 'https://www.facebook.com/vansang153' }],
  creator: 'Chung Le Ba',
  publisher: 'Chung Le Ba',
  alternates: {
    canonical: 'https://sbaygroup.com/',
  },
  openGraph: {
    title: 'Trang chủ | Sbay Việt Nam',
    description: 'Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam',
    url: 'https://sbaygroup.com',
    siteName: 'Sbay Việt Nam',
    images: [
      {
        url: 'https://sbaygroup.com/img/sbay-w-r.png',
        width: 800,
        height: 600,
      }/* ,
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      }, */
    ],
    locale: 'vi_VN',
    type: 'website',
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
          <Link href={`tel:02363616616`} className=' col-span-4 justify-end flex flex-row'>
            <Icon.PhoneCall className='w-4 h-4 mr-2 mt-1' /> Hotline
            <div className='text-sm text-end mt-1 hidden lg:block'><strong className='ml-2'>0967 041 900</strong></div>
          </Link>
        </div>
      </div>
      <div className="hero h-full bg-cyan-50 -mt-10">
        <div className="hero-content text-center flex flex-col">
          <div className="video-docker absolute top-0 left-0 w-full h-screen overflow-hidden z-0">

            <video className="min-w-full min-h-full absolute object-cover" src="/img/bg-video.mp4" autoPlay muted loop></video>
          </div>
          <div className="max-w-md z-10">
            <h1 className="text-5xl font-bold text-cyan-50 mb-0">Sbay Việt Nam</h1>
            <p className="py-3 text-cyan-50">Kiến tạo sự nghiệp.</p>
          </div>
          <div className='grid grid-cols-2 gap-6 z-10'>

            <Link href={'https://flight.sbaygroup.com'} target="_blank">
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
            <Link href={'https://www.sbayhoteldanang.com/'} target="_blank">
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

            <Link href={'https://datxe.sbayvietnam.com/'} target="_blank">
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
            <Link href={'https://datve.sbayvietnam.com/'} target="_blank">
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

            {/* <div className='flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2'>
              <div>
                <div className="avatar">
                  <div className="w-16 mask mask-squircle">
                    <Image width={256} height={256} alt='tour du lịch' src="/img/du-lich.png" />
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
            </div> */}
          </div>
          <div className="max-w-md z-10">
            {/*           <p className="py-3 text-cyan-50 mt-5">Sbay Việt Nam hiện đang sở hữu hệ thống chuỗi hơn 500 văn phòng trực thuộc đồng bộ thương hiệu, hơn 8.000 đại lý, phòng vé liên kết phủ khắp 64 tỉnh thành tại Việt Nam</p>
 */}          <p className="text-cyan-50 mt-5">Ứng dụng Sbay hiện có sẵn trên cửa hàng ứng dụng, hãy cài đặt để trải ngiệm</p>
          </div>
          <div className=" grid grid-cols-2 max-w-md z-10">

            <Link href={'https://apps.apple.com/vn/app/sbaygroup/id64462563480?l=vi'}>
              <Image src={'/img/ios.png'} width={120} height={30} alt={'Sbay iso'} className=' rounded-sm mr-2'></Image>
            </Link>
            <Link href={'https://play.google.com/store/apps/details?id=com.sbgroup.booking_android&hl=vi-VN'}>
              <Image src={'/img/gg-play.png'} width={120} height={30} alt={'Sbay iso'} className=' rounded-sm ml-2'></Image>
            </Link>

          </div>

          <div className='grid grid-cols-2 gap-5 z-10'>
            <Link href={'https://sbay.com.vn/gioi-thieu'} target="_blank" className='text-white text-sm flex flex-row justify-end'>
              Giới thiệu về Sbay<Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://sbay.com.vn/tin-tuc/chinh-sach-hop-tac-dai-ly-doi-tac/chuong-trinh-hop-tac-dai-ly-ve-may-bay-sbay-viet-nam-n4136'} target="_blank" className='text-white text-sm flex flex-row justify-start'>
              Chương trinh hợp tác <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://flight.sbaygroup.com/?dang-nhap=1'} target="_blank" className='text-white text-sm flex flex-row justify-end'>
              Trang Thành viên <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://work.sbayvietnam.com'} target="_blank" className='text-white text-sm flex flex-row justify-start'>
              Trang WorkPlace <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://meet.google.com/coo-epfp-fnz'} target="_blank" className='text-white text-sm flex flex-row justify-end'>
              Meet hàng ngày <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
            <Link href={'https://docs.google.com/forms/d/1tOdLDHozf8vuLNTWHJV5cNVt1vXHFFtunl_Uy7FGFOA'} target="_blank" className='text-white text-sm flex flex-row justify-start'>
              Hội thảo thứ 7 <Icon.ExternalLink className='w-4 h-4 ml-2' />
            </Link>
          </div>
          <div className='z-10'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className=" link text-white text-sm">Hơn nữa</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box bg-sky-800 opacity-90">
                <h2 className='text-xl mb-10 text-white font-black'>Link khác</h2>
                <div className='grid grid-cols-2 gap-5 z-10'>
                  <Link href={'https://drive.google.com/drive/folders/1iqikemTZTth-Lrg1C4yq-7ujmjqwTyUT'} target="_blank" className='text-white text-sm flex flex-row justify-center'>
                    Kho video <Icon.ExternalLink className='w-4 h-4 ml-2' />
                  </Link>
                  <Link href={'https://drive.google.com/drive/folders/1f54vXS92z13Hjjg9BGHwU1Rnp0rYjTdb'} target="_blank" className='text-white text-sm flex flex-row justify-center'>
                    Kho hình ảnh <Icon.ExternalLink className='w-4 h-4 ml-2' />
                  </Link>
                  {/* <Link href={'https://docs.google.com/forms/d/1tOdLDHozf8vuLNTWHJV5cNVt1vXHFFtunl_Uy7FGFOA'} className='text-white text-sm flex flex-row justify-center'>
                    Đăng kí hội thảo <br /> kết nối kinh doanh Sbay<Icon.ExternalLink className='w-4 h-4 ml-2' />
                  </Link> */}
                </div>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn bg-blue-300">Đóng</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>

  )
}
