import { AiFillStar, AiOutlineStar, AiOutlineWifi } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
import { LiaHotelSolid } from "react-icons/lia";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsSnow2 } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";
import { GrBusinessService } from "react-icons/gr";
import Image from "next/image";
export default function Hotel({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className=" bg-[#f8fafc] ">
        <div className="container mx-auto">
          <div className="flex w-full py-4 flex-row justify-between">
            <div className="w-[50%]">
              <p className=" text-blue-800 font-semibold my-5 text-3xl">
                KHÁCH SẠN SBAY ĐÀ NẴNG
              </p>
              <p className="flex flex-row">
                <AiFillStar color="#fec014" size={35} />
                <AiFillStar color="#fec014" size={35} />
                <AiFillStar color="#fec014" size={35} />
              </p>
              <p className=" text-blue-800 font-semibold my-5 text-2xl">
                Liên hệ
              </p>
              <div>
                <button className="py-2 px-3 font-medium bg-[#fcb900] hover:bg-[#f9d77a] text-2xl rounded-[100px] text-blue-800">
                  Đặt phòng ngay
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="mt-5 flex flex-row items-center">
                <CiLocationArrow1 color="#fec014" size={35} />
                <p className=" text-blue-800 ml-3 font-semibold text-lg">
                  03 Đinh Thị Hoà, Sơn Trà, TP Đà Nẵng
                </p>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <LiaHotelSolid size={35} color="#fec014" />
                <p className=" text-blue-800 ml-3 font-semibold text-lg">
                  Bungalow Double Room Twin Room
                </p>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <AiOutlineStar color="#fec014" size={35} />
                <p className=" text-blue-800 ml-3 font-semibold text-lg">
                  Tiêu chuẩn 3 sao
                </p>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <BsSnow2 size={35} color="#fec014" />
                <p className=" text-blue-800 ml-3 font-semibold text-lg">
                  Dịch vụ phục vụ đầy đủ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 bg-[#f8fafc] p-4 container mx-auto">
          <p className="text-4xl font-semibold text-center">
            Phòng Deluxe King
          </p>
          <div className="my-5">
            <p>
              Deluxe King là phong có view thành phố dưới nền sông Hoài rất lãng
              mạn, mộng mơ. “Chiếc view” non nước hữu tình không quên sự duyên
              dáng của phố cổ Hội An được rất nhiều các cặp đôi lựa chọn cho
              chuyến nghỉ dưỡng để hâm nóng tình cảm của mình.
            </p>
            <div className="px-10 py-4">
              <Image
                className="scale-100 group-hover:scale-110 transition duration-500"
                priority
                width={700}
                height={700}
                src="/img/deluxe douple.webp"
                alt="ve-may-bay"
                style={{
                  width: "100%",
                  height: 500,
                  objectFit: "contain",
                }}
              />
            </div>
            <p>
              Phòng được thiết kế hiện đại với tone màu trắng ngà sang trọng,
              nội thất trong thiết bị đáp ứng đầy đủ các nhu cầu của khách từ
              chăn giường sạch sẽ, tivi, mini bar, bàn trang điểm, ghế sofa,… Du
              khách đến sẽ cảm nhận được hết sự tiện nghi ở đây.
            </p>
          </div>
          <div className="mt-16">
            <p className="font-semibold text-xl">CÁC TIỆN NGHI CỦA PHÒNG</p>
            <div className="my-8 grid md:grid-cols-5 grid-cols-2">
              <div>
                <div className="flex flex-row items-center">
                  <AiOutlineWifi size={20} />
                  <p className=" text-lg font-semibold ml-3">Internet</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Wifi miễn phí</p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row items-center">
                  <RiFunctionLine size={20} />
                  <p className=" text-lg font-semibold ml-3">Tính năng</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">
                    Phòng tắm đứng
                  </p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Máy sấy tóc</p>
                </div>
              </div>
              <div className="md:mt-0 mt-8">
                <div className="flex flex-row items-center">
                  <MdFamilyRestroom size={20} />
                  <p className=" text-lg font-semibold ml-3">
                    Dịch vụ giải trí và gia đình
                  </p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">
                    Truyền hình cáp
                  </p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Tủ lạnh</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Tivi</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Két an toàn</p>
                </div>
              </div>
              <div className="md:mt-0 mt-8">
                <div className="flex flex-row items-center">
                  <GrBusinessService size={20} />
                  <p className=" text-lg font-semibold ml-3">Dịch vụ</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">
                    Nước đóng chai miễn phí
                  </p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">Điện thoại</p>
                </div>
                <div className="flex mt-3 flex-row items-center">
                  <IoIosDoneAll color="green" size={20} />
                  <p className=" text-base md:font-light ml-3">
                    Điều hoà nhiệt độ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
