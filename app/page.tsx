import Image from "next/image";
import React from "react";
import Link from "next/link";
import Search from "./_components/search";
import { Metadata } from "next";

/* Seo */
export const metadata: Metadata = {
  title: "SbayGroup - Vé máy bay giá rẻ hàng đầu Việt Nam",
  description: "Sbay Việt Nam cung cấp vé máy bay giá rẻ toàn quốc, khách sạn đà nẵng và nhiều dịch vụ tiện ích khác",
  metadataBase: new URL('https://sbaygroup.com'),
  openGraph: {
    title: 'SbayGroup - Vé máy bay giá rẻ hàng đầu Việt Nam',
    description: 'Sbay Việt Nam cung cấp vé máy bay giá rẻ toàn quốc, khách sạn đà nẵng và nhiều dịch vụ tiện ích khác',
    url: 'https://sbaygroup.com',
    siteName: 'Quản lý công việc',
    images: [
      {
        url: 'https://sbaygroup.com/img/sbay-w-r.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Thiết kế kiến trúc & Xây dựng',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/img/sbay-w-r.png' },
      new URL('/img/sbay-w-r.png', 'https://sbaygroup.com'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-adesign.png'],
    apple: [
      { url: '/favicon/apple-touch-adesign.png' },
      { url: '/favicon/apple-touch-adesign.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: 'https://sbaygroup.com/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'SbayGroup - Vé máy bay giá rẻ hàng đầu Việt Nam',
    description: 'Sbay Việt Nam cung cấp vé máy bay giá rẻ toàn quốc, khách sạn đà nẵng và nhiều dịch vụ tiện ích khác',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://sbaygroup.com/img/sbay-w-r.png'], // Must be an absolute URL
  },
  bookmarks: ['https://sbaygroup.com'],
  category: 'technology',
};

export default function Home() {




  const popularPack = [
    {
      img: 'm-3.jpg',
      name: "Gói M3"
    },
    {
      img: 'm-12.jpg',
      name: "Gói M12"
    },
    {
      img: 'm-36.jpg',
      name: "Gói M36"
    },
    {
      img: 'm-doc-quyen.jpg',
      name: "Gói độc quyền"
    }]
  const popularRoom = [{
    tilte: "Standard Double",
    description: "1 Giường đôi",
    price: "600.000",
    img: "/img/phong-1.jpg"
  },
  {
    tilte: "Superior Double",
    description: "1 Giường đôi cỡ lớn.",
    price: "800,000",
    img: "/img/phong-2.jpg"

  },
  {
    tilte: "Superior Twin",
    description: "2 Giường đơn.",
    price: "1,000,000",
    img: "/img/phong-3.jpg"

  },
  {
    tilte: "Superior Triple",
    description: "2 Giường đơn. 1 Giường đôi.",
    price: "1,100,000",
    img: "/img/phong-4.jpg"

  }]

  const popularCar = [{
    tilte: "Xe 5 chỗ",
    description: "Phù hợp bạn bè, gia đình nhỏ",
    price: "12,000",
    img: "/img/xe-5-cho.png"
  },
  {
    tilte: "Xe 7 chỗ",
    description: "Phù hợp nhóm bạn bè, gia đình nhiều thế hệ",
    price: "15,000",
    img: "/img/xe-7-cho.png"

  },
  {
    tilte: "Xe 16 chỗ",
    description: "Phù hợp hội nhóm, công ty",
    price: "20,000",
    img: "/img/xe-16-cho.png"

  },
  ]
  const popularBana = [{
    tilte: "Cáp treo người lớn",
    description: "Cao hơn 1.4m",
    price: "900,000",
    img: "/img/ve-ba-na-1.jpg"

  },
  {
    tilte: "Cáp treo trẻ em",
    description: "Cao từ 1.0m - 1.4m",
    price: "750,000",
    img: "/img/ve-ba-na-2.jpg"

  },
  {
    tilte: "Combo cáp treo và buffet người lớn",
    description: "Cao hơn 1.4m",
    price: "1,250,000",
    img: "/img/ve-ba-na-3.jpg"

  },
  {
    tilte: "Combo cáp treo và buffet trẻ em",
    description: "Cao hơn 1.4m",
    price: "960,000",
    img: "/img/ve-ba-na-4.jpg"

  },]
  const popularTool = [
    {
      tilte: "Facebook tool",
      description: "Tiếp cận tự động người dùng facebook",
      img: "/img/facebook.png"

    },
    {
      tilte: "Zalo tool",
      description: "Tiếp cận tự động người dùng zalo",
      img: "/img/zalo.png"

    },
    {
      tilte: "Tiktok",
      description: "Tiếp cận tự động người dùng tiktok",
      img: "/img/tiktok.png"

    },]


  return (
    <>
      <section className="bg-white dark:bg-gray-900" style={{ backgroundImage: "url('/img/bg-02.jpg')" }}>
        <div className=" lg:my-20 max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 lg:gap-4 mx-auto p-5 lg:py-24">
          <Search></Search>
          <div className="my-auto mx-auto invisible lg:visible">
            <Image
              src={"/img/air-plan.png"}
              alt={"Vietnam airline logo"}
              width={500}
              height={500}
            />
          </div>

        </div>
      </section>
      <div className=" -mt-16 bg-white mx-auto rounded-3xl p-5">
        <div className="flex flex-col max-w-7xl mx-auto  justify-between py-2">
          <h2 className=" text-sm font-bold text-center"> Đối tác tin cậy</h2>
          <div className="  max-w-7xl grid grid-cols-2 lg:grid-cols-4 mx-auto">
            <Image
              src={"/img/vietnam-airline.png"}
              width={512}
              height={288}
              alt={"Vietnam airline logo"}
              className=" w-36 rounded-full"
            />
            <Image
              src={"/img/vietjet.png"}
              width={512}
              height={288}
              alt={"Vietjet logo"}
              className=" w-32 rounded-full"
            />
            <Image
              src={"/img/Bamboo_Airways.png"}
              width={512}
              height={288}
              alt={"Bamboo logo"}
              className=" w-32 rounded-full"
            />
            <Image
              src={"/img/Pacific_Airlines.png"}
              width={512}
              height={288}
              alt={"Sbay group logo"}
              className=" w-32 rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto  justify-between py-2">
          <h2 className=" text-xl font-bold text-center mt-14"> Hợp tác đại lý</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4  justify-center ...">
            {popularPack.map((e, i) => {
              return (
                <div key={i} className="  hover:bg-red-100 rounded-lg p-5 drop-shadow-md ...">
                  <Image
                    src={"/img/" + e.img}
                    width={512}
                    height={288}
                    alt={"Vietnam airline logo"}
                    className=" w-32 h-32 m-5 rounded-md mx-auto"
                  />
                  <h3 className="text-center font-bold">{e.name}</h3>
                  <p className="text-center text-sm">Cung cấp hệ thống đặt vé của 5 hãng hàng không Nội địa</p>
                  <a href="tel:0968141400"  type="button" className=" text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full max-w-sm my-5">Liên hệ tư vấn</a>
                </div>
              )
            })}


          </div>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto  justify-between py-2">
          <h2 className=" text-xl font-bold text-center my-10"> Phòng khách sạn</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4  justify-center ...">
            {popularRoom.map((e, i) => {
              return (
                <div key={i} className="  hover:bg-yellow-100 rounded-lg p-5 drop-shadow-md ...">
                  <Image
                    src={e.img}
                    width={512}
                    height={288}
                    alt={"Vietnam airline logo"}
                    className=" w-full rounded-lg mx-auto"
                  />
                  <p className=" text-xs text-end">Từ </p>
                  <p className=" font-light text-xl text-red-500 text-end">{e.price+" "} VND*</p>
                  <h3 className="text-start font-bold">{e.tilte}</h3>
                  <p className="text-start text-sm">{e.description}</p>
                  <Link href={"https://booking.getbestbooking.com/?ht=5542&lang=vi-VN&curency=VND"} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full max-w-sm my-5 text-center">Đặt phòng ngay</Link>
                </div>
              )
            })}


          </div>
        </div>

        <div className="flex flex-col max-w-7xl mx-auto  justify-between py-2">
          <h2 className=" text-xl font-bold text-center my-10"> Dịch vụ xe</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3  justify-center ...">
            {popularCar.map((e, i) => {
              return (
                <div key={i} className="  hover:bg-yellow-100 rounded-lg p-5 drop-shadow-md ...">
                  <Image
                    src={e.img}
                    width={512}
                    height={288}
                    alt={"Vietnam airline logo"}
                    className=" w-full rounded-lg mx-auto"
                  />
                  <p className=" text-xs text-end">Từ </p>
                  <p className=" font-light text-xl text-red-500 text-end">{e.price + " "}vnd</p>
                  <p className=" text-sm text-end">km</p>
                  <h3 className="text-start font-bold">{e.tilte} </h3>
                  <p className="text-start text-sm">{e.description}</p>
                  <a href="tel:0968141400" type="button" className=" text-center mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full max-w-sm my-5">Đặt xe ngay</a>
                </div>
              )
            })}


          </div>
        </div>

        <div className="flex flex-col max-w-7xl mx-auto justify-between py-2">
          <h2 className=" text-xl font-bold text-center my-10"> Dịch vụ vé Bà Nà</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 justify-center ...">
            {popularBana.map((e, i) => {
              return (
                <div key={i} className=" hover:bg-blue-100 rounded-lg p-5 drop-shadow-md ...">
                  <Image
                    src={e.img}
                    width={512}
                    height={288}
                    alt={"Vietnam airline logo"}
                    className="m-5 w-32 h-32 rounded-full mx-auto"
                  />
                  <p className=" text-xs text-end">Từ </p>
                  <p className=" font-light text-xl text-red-500 text-end">{e.price + " "} VND*</p>
                  <p className=" text-sm text-end">Vé</p>
                  <h3 className="text-start font-bold">{e.tilte} </h3>
                  <p className="text-start text-sm">{e.description} </p>
                  <a href="tel:0967041900"  type="button" className=" text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full max-w-sm my-5">Đặt vé ngay</a>
                </div>
              )
            })}


          </div>
        </div>

        <div className="flex flex-col max-w-7xl mx-auto  justify-between py-2">
          <h2 className=" text-xl font-bold text-center my-10"> Tool marketing</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3  justify-center ...">
            {popularTool.map((e, i) => {
              return (
                <div key={i} className="  hover:bg-blue-100 rounded-lg p-5 drop-shadow-md ...">
                  <Image
                    src={e.img}
                    width={512}
                    height={288}
                    alt={"Vietnam airline logo"}
                    className="m-10 w-36 h-36 rounded-full mx-auto"
                  />
                  {/* <p className=" text-xs text-end">Từ </p>
                  <p className=" font-light text-xl text-green-500 text-end">550.000VND*</p>
                  <p className=" text-sm text-end">Vé</p> */}
                  <h3 className="text-center font-bold">{e.tilte}</h3>
                  <p className="text-center text-sm">{e.description}</p>
                  <Link href={"/tool"}  type="button" className=" text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full max-w-sm my-5">Dùng thử ngay</Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>


    </>
  );
}
