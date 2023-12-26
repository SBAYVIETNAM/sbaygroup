import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" w-full bg-red-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 w-full  mr-40">
            <div className="w-full border-b-2">
              <p className="my-5 text-lg font-black text-white">
                CÔNG TY CỔ PHẦN SBAY VIỆT NAM
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-sm">
              <div className="flex flex-col my-2">
                <p className="mb-5 font-bold text-white uppercase">Khu vực miền Trung - Trụ sở chính</p>
                <div className="grid grid-cols-1 gap-2 ">
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.MapPin className="w-4 h-4 mr-2" /> Địa chỉ: 03
                    Đinh Thị Hoà, Sơn Trà, Đà Nẵng
                  </p>
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 " /> Hotline:
                    0967 041 900
                  </p>
                  <p className=" text-sm  items-center text-white flex flex-row justify-start">
                    <Icon.Mail className="w-4 h-4 mr-2" /> Email:
                    ota.sbayvietnam@gmail.com
                  </p>
                </div>
              </div>

            </div>
            <div className="flex flex-col md:flex-row text-sm">
              <div className="flex flex-col my-2">
                <p className="mb-5 font-bold text-white uppercase">Khu vực miền Bắc</p>
                <div className="grid grid-cols-1 gap-2 ">
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.MapPin className="w-4 h-4 mr-2" /> Địa chỉ: 30-12 Tứ Hiệp Plaza, Pháp Vân, Hà Nội
                  </p>
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 " /> Hotline: 0988 928 121
                  </p>
                </div>
              </div>

            </div>
            <div className="flex flex-col md:flex-row text-sm">
              <div className="flex flex-col my-2">
                <p className="font-bold text-white uppercase">Khu vực miền Nam</p>
                <p className="my-5 font-bold text-white">Phòng vé Trương Gia - Vé may bay - Tour du lịch - Chi Nhánh Quận 12</p>
                <div className="grid grid-cols-1 gap-2 ">
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.MapPin className="w-4 h-4 mr-2" /> Địa chỉ: 75/11 Đường Hiệp Thành 45, Phường Hiệp Thành, Quận 12, Thành phố Hồ Chí Minh 
                  </p>
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 " /> Hotline: 0766 091 267
                  </p>
                </div>
                <p className="my-5 font-bold text-white">Phòng vé Bình Dương</p>
                <div className="grid grid-cols-1 gap-2 ">
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.MapPin className="w-4 h-4 mr-2" /> Địa chỉ: số 86 khu dân cư Cửu Long, Bình Đức 3, Bình Hòa, Thuận An, Bình Dương 
                  </p>
                  <p className=" text-sm items-center text-white flex flex-row justify-start">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 " /> Hotline: 0983 236 294
                  </p>
                </div>
              </div>

            </div>

          </div>
          <div className="md:w-1/3 w-full  flex flex-col">
            <div className="w-full border-b-2">
              <p className="my-5 text-xl text-white font-bold">Liên kết</p>
            </div>
            <div className="my-5">

              <div className="grid grid-cols-2 gap-5 ml-2 md:ml-0">
                <Link
                  href={"https://sbay.com.vn/gioi-thieu"}
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white"
                >
                  Giới thiệu về Sbay
                  <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={
                    "https://sbay.com.vn/tin-tuc/chinh-sach-hop-tac-dai-ly-doi-tac/chuong-trinh-hop-tac-dai-ly-ve-may-bay-sbay-viet-nam-n4136"
                  }
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white"
                >
                  Chương trinh hợp tác{" "}
                  <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={"https://flight.sbaygroup.com/?dang-nhap=1"}
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white"
                >
                  Trang Thành viên{" "}
                  <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={"https://work.sbayvietnam.com"}
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white"
                >
                  Trang WorkPlace <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={"https://meet.google.com/coo-epfp-fnz"}
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white "
                >
                  Meet hàng ngày <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={
                    "https://docs.google.com/forms/d/1tOdLDHozf8vuLNTWHJV5cNVt1vXHFFtunl_Uy7FGFOA"
                  }
                  target="_blank"
                  className=" text-sm flex flex-row justify-start text-white"
                >
                  Hội thảo thứ 7 <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>{/* 
            <div className="my-5">
              Hotline
            </div>
            <div className="my-5">
              Chăm sóc khách hàng
            </div> */}
          </div>
        </div>
        <div className="flex my-2 flex-col">
          <div className=" grid grid-cols-2 max-w-md z-1 mx-auto">
            <Link
              href={
                "#"
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
                "#"
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
        <div className="flex justify-center items-center">
          <Image
            className="my-10"
            width={300}
            height={256}
            src="/img/paypal.png"
            alt="ve-may-bay"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

    </div>

  );
}
