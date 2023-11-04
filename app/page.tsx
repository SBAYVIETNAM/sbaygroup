"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

import Footer from "./_components/footer";
import Link from "next/link";
import Popup from "./modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Popup handleClose={handleClose} />}
      <div className="sticky shadow-sm bg-white  top-0 z-10 text-white px-5 py-3">
        <div className=" grid grid-cols-12">
          <div className=" col-span-8">
            <Image
              src={"/img/sbay-w-r.png"}
              width={50}
              height={30}
              alt={"Sbay group logo"}
              className=" rounded-full"
            ></Image>
          </div>
          <Link
            href={`tel:02363616616`}
            className=" col-span-4 justify-end items-center flex text text-slate-900 flex-row"
          >
            <Icon.PhoneCall className="w-4 h-4 mr-2 mt-1" /> Hotline
            <div className="text-sm text-end mt-1 hidden lg:block">
              <strong className="ml-2">0967 041 900</strong>
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col">
        <div className="hero max-h-screen bg-[url('/img/maybay.jpeg')] bg-cyan-50">
          <div className="hero-content text-center flex flex-col">
            <div className="video-docker absolute top-0 left-0 w-full h-screen overflow-hidden z-0"></div>
            <div className="z-10 ">
              <div className="grid grid-cols-2 border rounded-lg gap-2 p-8 m-20 bg-slate-50/20 w-80 mx-auto">
                <Link href={"https://flight.sbaygroup.com"} target="_blank">
                  <div className="flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2">
                    <div>
                      <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                          <Image
                            width={256}
                            height={256}
                            src="/img/air.png"
                            alt="ve-may-bay"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="  font-bold text-white">Vé máy bay</h2>
                    </div>
                  </div>
                </Link>
                <Link href={"https://www.sbayhoteldanang.com/"} target="_blank">
                  <div className="flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2">
                    <div>
                      <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                          <Image
                            width={256}
                            height={256}
                            alt="Phòng khách sạn Đà Nẵng"
                            src="/img/hotel.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="  font-bold text-white">Khách sạn</h2>
                    </div>
                  </div>
                </Link>

                <Link href={"https://datxe.sbayvietnam.com/"} target="_blank">
                  <div className="flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2">
                    <div>
                      <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                          <Image
                            width={256}
                            height={256}
                            alt="xe cho thuê"
                            src="/img/thue-xe.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="  font-bold text-white">Xe cho thuê</h2>
                    </div>
                  </div>
                </Link>
                <Link href={"https://datve.sbayvietnam.com/"} target="_blank">
                  <div className="flex flex-col hover:animate-pulse hover:outline outline-1 rounded-xl outline-indigo-200 p-2">
                    <div>
                      <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                          <Image
                            width={256}
                            height={256}
                            alt="vé Bà Nà"
                            src="/img/ticket.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="  font-bold text-white">Vé Bà Nà</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <a
            href="https://cskh.sbayvietnam.com"
            className=" fixed bottom-5 z-50 right-5 btn rounded-full bg-red-500 text-white mx-auto my-5"
          >
            <Icon.MessageCircle className="w-4 h-4 animate-bounce" />
            CSKH
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full border-b-2 border-amber-300 ">
          <p className="my-5 text-2xl font-semibold text-center">
            CẬP NHẬT VÉ KHUYẾN MÃI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 p-4 ">
          <div className="flex relative flex-col p-2 items-end justify-end">
            <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg">
              <Image
                priority
                width={200}
                height={300}
                src="/img/hanoi.jpeg"
                alt="ve-may-bay"
                style={{
                  objectFit: "cover",
                  width: 150,
                  height: 120,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            </div>
            <p className="h-1/5 text-md md:text-lg">Hà Nội - Hồ Chí Minh</p>
            <div className="mt-2 h-4/5 w-10/12">
              <div className="bg-yellow-100 rounded-lg p-2 flex flex-col items-end">
                <p className="text-md">Giá 1 chiều</p>
                <p className="mt-5 text-sm">{"(Đầy đủ thuế và phí)"}</p>
                <p className="text-xl font-extrabold my-3">VND 1.xxx.000</p>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col p-2 items-end justify-end">
            <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg">
              <Image
                priority
                width={200}
                height={300}
                src="/img/danang.jpeg"
                alt="ve-may-bay"
                style={{
                  objectFit: "cover",
                  width: 150,
                  height: 120,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            </div>
            <p className="h-1/5 text-md md:text-lg">Hà Nội - Đà Nẵng</p>
            <div className="mt-2 h-4/5 w-10/12">
              <div className="bg-yellow-100 rounded-lg p-2 flex flex-col items-end">
                <p className="text-md">Giá 1 chiều</p>
                <p className="mt-5 text-sm">{"(Đầy đủ thuế và phí)"}</p>
                <p className="text-xl font-extrabold my-3">VND 1.xxx.000</p>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col p-2 items-end justify-end">
            <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg">
              <Image
                priority
                width={200}
                height={300}
                src="/img/phuquoc.jpeg"
                alt="ve-may-bay"
                style={{
                  objectFit: "cover",
                  width: 150,
                  height: 120,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            </div>
            <p className="h-1/5 text-md md:text-lg">Hà Nội - Phú Quốc</p>
            <div className="mt-2 h-4/5 w-10/12">
              <div className="bg-yellow-100 rounded-lg p-2 flex flex-col items-end">
                <p className="text-md">Giá 1 chiều</p>
                <p className="mt-5 text-sm">{"(Đầy đủ thuế và phí)"}</p>
                <p className="text-xl font-extrabold my-3">VND 1.xxx.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className="my-3 text-2xl font-semibold text-center">
            ĐIỂM ĐẾN NỔI BẬT
          </p>
          <p className="my-2 text-md font-semibold text-center">
            Top điểm đến tốt nhất trên thế giới
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 p-4 ">
          <div className="w-full">
            <Image
              priority
              width={300}
              height={300}
              src="/img/LONDON.jpeg"
              alt="ve-may-bay"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="">
            <Image
              priority
              width={300}
              height={300}
              src="/img/Paris.jpeg"
              alt="ve-may-bay"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="">
            <Image
              priority
              width={300}
              height={300}
              src="/img/korea.jpeg"
              alt="ve-may-bay"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="">
            <Image
              priority
              width={300}
              height={300}
              src="/img/tokio.jpeg"
              alt="ve-may-bay"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
      <div className="bg-[url('/img/footer.jpeg')] hero py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 w-full  mr-40">
              <div className="w-full border-b-2 border-amber-300">
                <p className="my-5 text-xl text-amber-300 font-lg">
                  CÔNG TY CỔ PHẦN SBAY VIỆT NAM
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mt-10">
                  <div className="grid grid-cols-1 gap-5 ">
                    <p className="text-white text-sm items-center flex flex-row justify-start">
                      <Icon.ChevronRight className="w-4 h-4 mr-2" /> Địa chỉ: 03
                      Đinh Thị Hoà, Sơn Trà, Đà Nẵng
                    </p>
                    <p className="text-white text-sm items-center flex flex-row justify-start">
                      <Icon.ChevronRight className="w-4 h-4 mr-2 " /> Hotline:
                      0967 041 900
                    </p>
                    <p className="text-white text-sm  items-center flex flex-row justify-start">
                      <Icon.ChevronRight className="w-4 h-4 mr-2" /> Email:
                      Sbay@gmail.com.vn
                    </p>
                  </div>
                </div>
                <div className="flex mt-10 flex-col md:ml-20">
                  <div className=" grid grid-cols-2 max-w-md z-10 mx-auto">
                    <Link
                      href={
                        "https://apps.apple.com/vn/app/sbaygroup/id64462563480?l=vi"
                      }
                    >
                      <Image
                        src={"/img/ios.png"}
                        width={120}
                        height={30}
                        alt={"Sbay iso"}
                        className=" rounded-sm mr-2 mx-auto"
                      ></Image>
                    </Link>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.sbgroup.booking_android&hl=vi-VN"
                      }
                    >
                      <Image
                        src={"/img/gg-play.png"}
                        width={120}
                        height={30}
                        alt={"Sbay iso"}
                        className=" rounded-sm ml-2 mx-auto"
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full  flex flex-col">
              <div className="w-full border-b-2 border-amber-300">
                <p className="my-5 text-xl text-amber-300 font-lg">
                  GIỚI THIỆU
                </p>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-2 gap-5 ">
                  <Link
                    href={"https://sbay.com.vn/gioi-thieu"}
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start"
                  >
                    Giới thiệu về Sbay
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={
                      "https://sbay.com.vn/tin-tuc/chinh-sach-hop-tac-dai-ly-doi-tac/chuong-trinh-hop-tac-dai-ly-ve-may-bay-sbay-viet-nam-n4136"
                    }
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start"
                  >
                    Chương trinh hợp tác{" "}
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={"https://flight.sbaygroup.com/?dang-nhap=1"}
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start"
                  >
                    Trang Thành viên{" "}
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={"https://work.sbayvietnam.com"}
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start"
                  >
                    Trang WorkPlace{" "}
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={"https://meet.google.com/coo-epfp-fnz"}
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start "
                  >
                    Meet hàng ngày{" "}
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={
                      "https://docs.google.com/forms/d/1tOdLDHozf8vuLNTWHJV5cNVt1vXHFFtunl_Uy7FGFOA"
                    }
                    target="_blank"
                    className="text-white text-sm flex flex-row justify-start"
                  >
                    Hội thảo thứ 7{" "}
                    <Icon.ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 md:mt-28 flex justify-center items-center">
            <Image
              width={300}
              height={256}
              src="/img/paypal.png"
              alt="ve-may-bay"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
