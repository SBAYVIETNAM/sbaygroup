"use client";
import Image from "next/image";
import * as Icon from "react-feather";
import { BsTextarea } from "react-icons/bs";
import { BiBed, BiHotel } from "react-icons/bi";
import { PiArmchair, PiBathtubLight } from "react-icons/pi";
import { ReactNode } from "react";
import { AiFillCar } from "react-icons/ai";
import { SiCakephp } from "react-icons/si";
import { FaMotorcycle, FaBed } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdRoom } from "react-icons/md";
interface dataRoomProps {
  id: string;
  name: string;
  bed: string;
  bath: number;
  acreage: number;
  Image: ReactNode;
}

const dataRoomsDN: dataRoomProps[] = [
  {
    id: "96a8bb76-24a3-4f5b-ae80-10882a9daf31",
    name: "Standard Double",
    bed: '1 giường đôi',
    bath: 1,
    acreage: 22,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={300}
        src="/img/standard-douple.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    id: "beb28bb5-9ef3-49df-8cbe-f78230c7aec3",
    name: "Superior Double",
    bed: '1 giường đôi cỡ lớn',
    bath: 1,
    acreage: 30,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={300}
        src="/img/superior.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    id: "d0981a9b-7225-43e6-b328-e7e5cbc1250c",
    name: "Superior Twin",
    bed: '2 giường đơn',
    bath: 1,
    acreage: 30,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={300}
        src="/img/superior twin.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    id: "b8b5dab5-2e60-462d-8256-99228a85c4d1",
    name: "Superior Triple",
    bed: '2 giường đơn và 1 giường đôi',
    bath: 1,
    acreage: 30,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={250}
        src="/img/superior triple.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    id: "4e1149e0-ed70-4bb8-a663-4968d87ee89f",
    name: "Deluxe Douple",
    bed: '1 giường đơn và 1 giường đôi',
    bath: 1,
    acreage: 38,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={300}
        src="/img/deluxe douple.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    id: "4e1149e0-ed70-4bb8-a663-4968d87ee89f",
    name: "Deluxe Triple",
    bed: '1 Giường đơn. 1 Giường đôi cỡ lớn',
    bath: 1,
    acreage: 38,
    Image: (
      <Image
        className="scale-100 group-hover:scale-110 transition duration-500 rounded-xl"
        priority
        width={300}
        height={300}
        src="/img/deluxe triple.webp"
        alt="ve-may-bay"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
    ),
  },
];

export default function Hotel() {
  const router = useRouter();
  return (
    <div>
      <title>Khách sạn Đà Nẵng</title>
      <div className="container mx-auto md:mt-36">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-5 py-10 md:text-black">
            <div className="flex flex-row py-2">
              <Icon.Star />
              <Icon.Star className="mx-4" />
              <Icon.Star />
            </div>
            <p className=" text-2xl font-extralight py-4">
              KHÁCH SẠN SBAY HOTEL
            </p>
            <p className="text-5xl pb-4">
              Tận hưởng trải nghiệm sang trọng
            </p>
            <p className=" leading-7 pb-3">
              Tọa lạc tại Lô 23-24, Đường Đinh Thị Hòa, Q. Sơn Trà, TP. Đà Nẵng,
              Sbay Hotel Đà Nẵng là khách sạn 3 sao, được khai trương vào tháng
              06/2022 với hệ thống phòng được trang bị hiện đại với đầy đủ tiện
              nghi. Đặc biệt mỗi phòng đều có ban công riêng, tầm nhìn ra quang
              cảnh thành phố và biển.
            </p>
            <p className=" leading-7 pb-2">
              Sbay Hotel Đà Nẵng sẽ là một lựa chọn tuyệt vời và tiết kiệm cho
              những du khách đến Đà Nẵng tìm kiếm sự nghỉ ngơi và thư giãn cho
              ngày cuối tuần, dịp lễ tết, dịp đặc biệt của riêng mình và gia
              đình, hay những ngày đi công tác tại “Thành phố đáng sống” bên
              sông Hàn thơ mộng.
            </p>
            <div className="w-full flex justify-center items-center mt-5">
              <button className="shadow">
                <div
                  className=" rounded px-6 py-3 shadow overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <Link href={'https://booking.getbestbooking.com/?ht=5542&lang=vi-VN&curency=VND'} className="relative text-xl font-semibold">
                    ĐẶT PHÒNG NGAY
                  </Link>
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="w-full border-slate-200 h-full border-2 mt-5">
              <iframe
                id="player-w-52q7w7x9"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="Sbay hotel Đà Nẵng"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_3gUU-RROmQ?playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sbayhoteldanang.com&amp;widgetid=1"
              ></iframe>
            </div>

          </div>

        </div>
        <div className="md:mt-24 text-center">
          <p className="text-red-600 text-2xl font-extralight py-2">
            KHÁCH SẠN SBAY HOTEL
          </p>
          <p className="text-black text-4xl md:font-extralight pb-4">
            CÁC LOẠI PHÒNG
          </p>
        </div>
        <div className="rounded-lg w-full bg-white"></div>
        <div className="w-full py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {dataRoomsDN.map((item: dataRoomProps, index: number) => (
            <div className="mb-5 border drop-shadow-xl p-3 rounded-xl" key={index}>
              <div className="relative group overflow-hidden">
                <span className="absolute z-30 top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-stone-100 group-hover:h-full opacity-30"></span>

                <div className="z-40 top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
                  <a className="relative inline-block px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <Link href={'https://booking.getbestbooking.com/?ht=5542&lang=vi-VN&curency=VND'} className="relative text-black group-hover:text-white">
                      Đặt phòng
                    </Link>
                  </a>
                </div>
                {item.Image}
              </div>

              <p
                // onClick={() => router.push("/hotel/123")}
                className="text-black cursor-pointer text-3xl font-medium mt-2 pb-4"
              >
                {item.name || ""}
              </p>
              <div className=" grid grid-col-3 md:grid-cols-1">
                <div className=" col-span-1 flex flex-row">
                  <BsTextarea fontSize={25} color="black" />
                  <p className="text-base ml-2">{`${item.acreage}m2` || ""}</p>
                </div>
                <div className=" col-span-1 flex flex-row my-5">
                  <BiBed fontSize={25} color="black" />
                  <p className="text-base ml-2">{item.bed} giường đôi</p>
                </div>
                <div className=" col-span-1 flex flex-row">
                  <PiBathtubLight fontSize={25} color="black" />
                  <p className="text-base ml-2">{item.bath} phòng tắm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-red-600 text-2xl text-center font-extralight py-3">
            KHÁCH SẠN SBAY HOTEL
          </p>
          <p className="text-black text-4xl text-center md:font-extralight pb-4">
            Dịch vụ
          </p>
          <div className="w-full py-10 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
            <div className="flex flex-col items-center px-5 pb-5">
              <AiFillCar color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">Xe đưa đón</p>
              <p className="text-center">
                Dịch vụ xe đưa đón từ sân bay về khách sạn và ngược lại nếu du
                khách có nhu cầu.
              </p>
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
              <SiCakephp color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">Ăn uống</p>
              <p className="text-center">
                Dịch vụ ăn uống tiện lợi tại nhà hàng của khách sạn với đa dạng
                các món ăn theo thực đơn hoặc theo yêu cầu của khách hàng
              </p>
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
              <FaMotorcycle color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">
                Thuê xe máy
              </p>
              <p className="text-center">
                Dịch vụ thuê xe máy cho du khách có thể tự mình trải nghiệm
                những chuyến đi thú vị cho bản thân mình.
              </p>
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
              <FaBed color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">Nghỉ dưỡng</p>
              <p className="text-center">
                Với quy mô 56 phòng đầy đủ tiện nghi và nhiều loại phòng diện
                tích lớn nhỏ phù hợp với từng số lượng của khách hàng.
              </p>
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
              <BiFridge color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">Mini Bar</p>
              <p className="text-center">
                Hệ thống mini bar tiện lợi cung cấp các loại thực phẩm và nước
                uống cần thiết, ngoài ra còn phục vụ nhu cầu bảo quản thực phẩm
                cho khách hàng khi có nhu cầu.
              </p>
            </div>
            <div className="flex flex-col items-center px-5 pb-5">
              <PiArmchair color="red" style={{ fontSize: 40 }} />
              <p className="text-black font-normal my-2 text-2xl">Phòng hội nghị</p>
              <p className="text-center">
                Với quy mô sức chứa lên đến 100 người, với đầy đủ thiết bị loa, máy chiếu đáp ứng đa dạng nhu cầu sử dụng
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-10">
          <button className="shadow">
            <div
              className=" rounded px-6 py-3 shadow overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <Link href={'https://booking.getbestbooking.com/?ht=5542&lang=vi-VN&curency=VND'} className="relative text-xl font-semibold">
                ĐẶT PHÒNG NGAY
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
