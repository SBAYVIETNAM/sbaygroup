import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";
export default function Footer() {
  return (
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
                    ota.sbayvietnam@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex mt-10 flex-col md:ml-20">
                <div className=" grid grid-cols-2 max-w-md z-1 mx-auto">
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
              <p className="my-5 text-xl text-amber-300 font-lg">GIỚI THIỆU</p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-5 ml-2 md:ml-0">
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
                  Trang WorkPlace <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={"https://meet.google.com/coo-epfp-fnz"}
                  target="_blank"
                  className="text-white text-sm flex flex-row justify-start "
                >
                  Meet hàng ngày <Icon.ExternalLink className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href={
                    "https://docs.google.com/forms/d/1tOdLDHozf8vuLNTWHJV5cNVt1vXHFFtunl_Uy7FGFOA"
                  }
                  target="_blank"
                  className="text-white text-sm flex flex-row justify-start"
                >
                  Hội thảo thứ 7 <Icon.ExternalLink className="w-4 h-4 ml-2" />
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
  );
}
