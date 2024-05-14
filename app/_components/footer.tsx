import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" w-full bg-red-800 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 w-full  mr-40">
            <div className="w-full">
              <p className="my-5 text-lg text-white font-bold">
                CÔNG TY CỔ PHẦN SBAY VIỆT NAM
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col md:flex-row text-sm">
                <div className="flex flex-col my-2">
                  <p className="mb-3 text-white uppercase font-bold">Trụ sở chính (miền Trung)</p>
                  <div className=" col-span-1">
                    <div className=" flex flex-row my-2">
                      <Icon.MapPin className="w-4 h-4 mr-2 min-w-max text-white" />
                      <p className=" text-xs items-center text-white flex flex-row justify-start">
                        Địa chỉ: 03 Đinh Thị Hoà, Sơn Trà, Đà Nẵng
                      </p>
                    </div>
                    <div className=" flex flex-row my-2">
                      <Icon.PhoneCall className="w-4 h-4 mr-2 min-w-max text-white" />
                      <p className=" text-xs items-center text-white flex flex-row justify-start">
                        Hotline: 0967 041 900
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-col md:flex-row text-sm">
                <div className="flex flex-col my-2">
                  <p className="mb-3 text-white uppercase font-bold">Khu vực miền Bắc</p>
                  <div className=" col-span-1">
                    <div className=" flex flex-row my-2">
                      <Icon.MapPin className="w-4 h-4 mr-2 min-w-max text-white" />
                      <p className=" text-xs items-center text-white flex flex-row justify-start">
                        Địa chỉ: 30-12 Tứ Hiệp Plaza, Pháp Vân, Hà Nội
                      </p>
                    </div>
                    <div className=" flex flex-row my-2">
                      <Icon.PhoneCall className="w-4 h-4 mr-2 min-w-max text-white" />
                      <p className=" text-xs items-center text-white flex flex-row justify-start">
                        Hotline: 0988 928 121
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <p className=" text-white uppercase mt-10 font-bold">Khu vực miền Nam</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              <div>
                <p className="my-3 text-white">Phòng vé Trương Gia</p>
                <div className=" col-span-1">
                  <div className=" flex flex-row my-2">
                    <Icon.MapPin className="w-4 h-4 mr-2 min-w-max text-white" />
                    <p className=" text-xs items-center text-white flex flex-row justify-start">
                      Địa chỉ: 75/11 Đường Hiệp Thành 45, Phường Hiệp Thành, Quận 12, Thành phố Hồ Chí Minh
                    </p>
                  </div>
                  <div className=" flex flex-row my-2">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 min-w-max text-white" />
                    <p className=" text-xs items-center text-white flex flex-row justify-start">
                      Hotline: 0766 091 267
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="my-3 text-white">Phòng vé Bình Dương</p>
                <div className=" col-span-1">
                  <div className=" flex flex-row my-2">
                    <Icon.MapPin className="w-4 h-4 mr-2 min-w-max text-white" />
                    <p className=" text-xs items-center text-white flex flex-row justify-start">
                      Địa chỉ: số 86 khu dân cư Cửu Long, Bình Đức 3, Bình Hòa, Thuận An, Bình Dương
                    </p>
                  </div>
                  <div className=" flex flex-row my-2">
                    <Icon.PhoneCall className="w-4 h-4 mr-2 min-w-max text-white" />
                    <p className=" text-xs items-center text-white flex flex-row justify-start">
                      Hotline: 0983 236 294
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="md:w-1/3 w-full  flex flex-col">
            <div className="w-full">
              <p className="my-5 text-sm text-white font-bold">Liên kết</p>
            </div>
            <div className="my-5">

              <div className="grid grid-cols-2 gap-3 md:gap-5">
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
                  Chương trình hợp tác{" "}
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
            <div className="flex my-2 flex-col">
              <div className=" grid grid-cols-2 max-w-md z-1">
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
                    className=" rounded-sm"
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
                    className=" rounded-sm"
                  ></Image>
                </Link>
              </div>
            </div>
            <div className="flex">
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

      </div>

    </div>

  );
}
