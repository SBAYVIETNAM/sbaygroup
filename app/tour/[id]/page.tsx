"use client";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AiFillStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import Datepicker from "react-tailwindcss-datepicker";
import { useRef, useState } from "react";
import RelateToTour from "../relate-to";
import "./tour.css";

const handleShowIndicator = (index: number | string) => {
  switch (index) {
    case 0:
      return (
        <Image
          src={"/img/detail-tour/1.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 1:
      return (
        <Image
          src={"/img/detail-tour/2.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 2:
      return (
        <Image
          src={"/img/detail-tour/3.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 3:
      return (
        <Image
          src={"/img/detail-tour/4.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 4:
      return (
        <Image
          src={"/img/detail-tour/5.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 5:
      return (
        <Image
          src={"/img/detail-tour/6.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 6:
      return (
        <Image
          src={"/img/detail-tour/7.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    case 7:
      return (
        <Image
          src={"/img/detail-tour/8.jpeg"}
          width={80}
          height={80}
          alt={"Sbay iso"}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      );
    default:
      return null;
  }
};

export default function Hotel({ params }: { params: { id: string } }) {
  const indicators = (index: any) => {
    return <div className="indicator">{handleShowIndicator(index)}</div>;
  };
  const [value, setValue] = useState<any>();

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const bookingRef = useRef<any>(null);
  const handleBooking = () => {
    bookingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="z-20">
      <div className="container mx-auto">
        <div className="my-6">
          <p className="text-3xl font-bold">
            DU LỊCH TẠI ĐÀ NẴNG - HỘI AN - BÀ NÀ - ĐỘNG THIÊN ĐƯỜNG - HUẾ
          </p>
          <div className="my-3 text-lg font-semibold items-center flex flex-row">
            ĐÀ NẴNG – HỘI AN - BÀ NÀ HILLS 3 NGÀY 2 ĐÊM.{"  "}
          </div>
          <p className=" font-normal text-base">
            Tour trọn gói đã bao gồm vé máy bay - Khởi hành hàng tuần. ALO ĐẶT
            VÉ : 19001868 - 0909886688
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[65%] w-[100%]">
            <Slide slidesToScroll={1} indicators={false} slidesToShow={1}>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/1.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/2.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/3.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/4.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/5.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/6.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/7.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/detail-tour/8.jpeg"}
                  width={500}
                  height={100}
                  alt={"Sbay iso"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></Image>
              </div>
            </Slide>
          </div>
          <div className="bg-[#e5e5e5] md:p-8 p-2 md:w-[35%] w-[100%] flex flex-col  items-start">
            <div className="flex flex-row w-full">
              <div className="w-[35%] flex flex-col">
                <p className=" text-base font-semibold">Thời gian:</p>
                <p className=" text-base font-semibold">Phương tiện:</p>
                <p className=" text-base font-semibold">Nơi khởi hành:</p>
              </div>
              <div className="w-[70%] flex flex-col">
                <p className=" text-base">3 ngày 2 đêm</p>
                <p className=" text-base">MÁY BAY</p>
                <p className=" text-base">Hồ Chí Minh</p>
              </div>
            </div>
            <div className="flex my-6 flex-row">
              <AiFillStar size={20} color="green" />
              <AiFillStar size={20} color="green" />
              <AiFillStar size={20} color="green" />
              <AiFillStar size={20} color="green" />
              <AiFillStar size={20} color="green" />
            </div>
            <p className="text-base text-red-600 font-semibold">
              Giá 3tr988 ưu đãi khách thứ 2 đi cùng | khách thứ nhất giá 4tr988
            </p>
            <p className="text-2xl text-red-600 font-bold my-6">3,988,000 đ</p>
            <button
              onClick={handleBooking}
              className="hover:bg-blue-600 bg-red-600 w-full flex flex-row  items-center py-2 px-3 text-white font-medium text-base"
            >
              <FaCartArrowDown color="white" size={20} className="mr-3" />
              ĐẶT TOUR
            </button>
          </div>
        </div>
        <div className="my-10 flex flex-col justify-between md:flex-row">
          <div className="md:w-[65%] p-4 bg-[#e5e5e5]  w-[100%]">
            <div className="w-full">
              <div className="flex flex-row w-full">
                <div className="w-[15%] flex flex-row">
                  <div className="w-[30%] bg-orange-500 flex justify-center items-center">
                    <BsCalendar3 color="white" />
                  </div>
                  <div className="w-[70%] text-white font-semibold text-sm bg-blue-500 flex justify-center items-center">
                    Ngày 1
                  </div>
                </div>
                <p className="ml-5 text-red-500 font-medium">
                  TP HCM – ĐÀ NẴNG – NGŨ HÀNH SƠN – RỪNG DỪA - HỘI AN (Ăn trưa /
                  tối tự túc)
                </p>
              </div>
              <div className="my-4">
                <p>
                  Qúy khách tập trung tại SÂN BAY TÂN SƠN NHẤT – ga Quốc Nội làm
                  thủ tục đáp chuyến bay đi ĐÀ NẴNG.
                </p>
                <p>
                  Đến sân bay Đà Nẵng, xe và HDV đưa đoàn tham quan NÚI NGŨ HÀNH
                  SƠN, CHÙA TAM THAI, ĐỘNG HUYỀN KHÔNG, ĐỘNG TÀNG CHƠN. (Không
                  bao gồm vé tham quan)
                </p>
                <p>
                  Buổi trưa : Đoàn dùng bữa trưa tại nhà hàng trong KDL RỪNG DỪA
                  7 MẪU, tự do trải nghiệm ngồi thuyền thúng len lỏi trong những
                  rặng dừa xanh ngắt và tận hưởng không khí trong lành (Không
                  bao gồm vé ngồi thuyền thúng)
                </p>
                <p>
                  Buổi chiều : Đến PHỐ CỔ HỘI AN - di sản văn hóa thế giới được
                  Unesco công nhận đoàn tham quan NHÀ CỔ PHÙNG HƯNG, CHÙA CẦU,
                  HỘI QUÁN PHÚC KIẾN, HỘI QUÁN QUẢNG ĐÔNG. Buổi tối : Đoàn tự do
                  trải nghiệm các hoạt động trong phố cổ như thả đèn hoa đăng, …
                  & tự túc thưởng thức đặc sản Hội An theo sở thích thay cho bữa
                  tối.
                </p>
                <p>
                  Đến giờ xe và HDV đưa đoàn về lại Đà Nẵng nhận phòng KHÁCH SẠN
                  3SAO nghỉ ngơi hoặc tự do khám phá thành phố Đà Nẵng về đêm
                  như ngắm CẦU RỒNG PHUN NƯỚC, PHUN LỬA hay ngồi thuyền trên
                  dòng sông Hàn ngắm cảnh thành phố (chi phí tự túc)
                </p>
              </div>
              <Image
                src={"/img/detail-tour/ngay1.jpeg"}
                width={500}
                height={100}
                alt={"Sbay iso"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              ></Image>
            </div>
            <div className="w-full mt-4">
              <div className="flex flex-row w-full">
                <div className="w-[15%] flex flex-row">
                  <div className="w-[30%] bg-orange-500 flex justify-center items-center">
                    <BsCalendar3 color="white" />
                  </div>
                  <div className="w-[70%] text-white font-semibold text-sm bg-blue-500 flex justify-center items-center">
                    Ngày 2
                  </div>
                </div>
                <p className="ml-5 text-red-500 font-medium">
                  KHÁM PHÁ BÀ NÀ HILLS (Ăn sáng/ trưa tự túc/ tối)
                </p>
              </div>
              <div className="my-4">
                <p>
                  Buổi sáng : Qúy khách ăn sáng tại khách sạn, tự do nghỉ ngơi
                  và tận hưởng các tiện ích của khách sạn.
                </p>
                <p>
                  Đến giờ hẹn, Xe và HDV đưa đoàn tham quan KHU DU LỊCH BÀ NÀ
                  HILLS
                </p>
                <p>
                  (chi phí tự túc, giá vé 1,350,000đ/khách bao gồm xe đưa đón
                  tham quan + HDV + buffet trưa).
                </p>
                <p>
                  KHU DU LỊCH BÀ NÀ HILLS. Du khách có mặt tại khu GA HỘI AN,
                  làm thủ tục lên cáp treo. Trên cáp du khách sẽ được ngắm cảnh
                  núi rừng Bà Nà đẹp như tranh từ trên cao. Sau 15 phút cáp sẽ
                  đưa du khách đến GA MARSEILLE.
                </p>
                <p>Checkin CẦU VÀNG (GOLDEN BRIDGE)</p>
                <p>Trải nghiệm TÀU HỎA LEO NÚI</p>
                <p>Thăm quan VƯỜN HOA LE JARDIN D’AMOUR</p>
                <p>Khu HẦM RƯỢU DEBAY thưởng thức các món rượu vang hảo hạng</p>
                <p>
                  Viếng thăm TƯỢNG PHẬT THÍCH CA, CHÙA LINH ỨNG cùng các điểm
                  tâm linh khác
                </p>
                <p>
                  CON ĐƯỜNG BÍCH HỌA (dài hơn 1 km bậc thang dẫn đến Vườn Thiêng
                  rực rỡ muôn sắc màu) Quý khách sẽ thỏa thích trải nghiệm tuyến
                  TÀU HỎA LEO NÚI SỐ 2 đi qua lâu đài mặt trăng.. Chuyến tàu này
                  có tổng chiều dài 430m sẽ đưa du khách vào chuyến du ngoạn
                  không gian kỳ vĩ và tráng lệ trên ĐỈNH NÚI CHÚA. Xuất phát từ
                  GA GIẾNG THẦN và dừng lại ở GA HANG RỒNG, mở ra một hành trình
                  khám phá xứ sở cổ tích diệu kỳ tại VƯƠNG QUỐC MẶT TRĂNG
                </p>
                <p>
                  Quý khách tập trung tại GA MARSEILLE, khởi hành lên GA LOUVRE.
                  Quý khách tham quan KHU LÀNG PHÁP – FRENCH VILLAGE tái hiện
                  một nước Pháp cổ điển và lãng mạn với tổ hợp công trình kiến
                  trúc độc đáo: quảng trường, nhà thờ, thị trấn, làng mạc, khách
                  sạn,… Đến với Làng Pháp, du khách như ngược dòng thời gian,
                  trải nghiệm không gian sống tinh tế và đậm chất thơ của một
                  trong những quốc gia lâu đời nhất thế giới
                </p>
                <p>
                  Buổi trưa: Quý khách sẽ dùng bữa trưa tại nhà hàng BUFFET VIỆT
                  tiêu chuẩn 4 sao trên đỉnh Bà Nà ở độ cao 1.489 m với thực đơn
                  buffet gần 100 món theo phong cách 3 miền.
                </p>
                <p>
                  Buổi chiều: HDV sẽ đưa đoàn vào công viên trong nhà với hơn
                  105 trò chơi hoàn toàn miễn phí:
                </p>
                <p>RỒNG RẮN LÊN MÂY</p>
                <p>VÒNG ĐUA TỬ THẦN 4D</p>
                <p>MIỀN TÂY HOANG DÃ 5D</p>
                <p>NGÔI NHÀ KINH DỊ</p>
                <p>CUỘC DU HÀNH VÀO LÒNG ĐẤT</p>
                <p>THÁP RƠI TỰ DO</p>
                <p>
                  Với các TRÒ CHƠI CẢM GIÁC MẠNH, RẠP PHIM 3D-5D, CÔNG VIÊN
                  KHỦNG LONG cùng nhiều trò chơi khác​…
                </p>
                <p>
                  Sau 1 ngày vui chơi thỏa thích tại Bà Nà Hills. Đoàn tập trung
                  tại tuyến CÁP TREO LOUVRE xuống lại chân núi Bà Nà lên xe khởi
                  hành về nhà hàng dùng bữa tối. Nghỉ đêm tại Đà Nẵng.
                </p>
              </div>
              <Image
                src={"/img/detail-tour/ngay2.jpeg"}
                width={500}
                height={100}
                alt={"Sbay iso"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              ></Image>
            </div>
            <div className="w-full mt-4">
              <div className="flex flex-row w-full">
                <div className="w-[15%] flex flex-row">
                  <div className="w-[30%] bg-orange-500 flex justify-center items-center">
                    <BsCalendar3 color="white" />
                  </div>
                  <div className="w-[70%] text-white font-semibold text-sm bg-blue-500 flex justify-center items-center">
                    Ngày 3
                  </div>
                </div>
                <p className="ml-5 text-red-500 font-medium">
                  CITY TOUR – MUA SẮM – NGŨ HÀNH SƠN - SÂN BAY – TP.HCM (Ăn
                  sáng/ trưa)
                </p>
              </div>
              <div className="my-4">
                <p>
                  Buổi sáng: Qúy khách ăn sáng tại khách sạn, tự do nghỉ ngơi
                  hoặc tắm BIỂN MỸ KHÊ.
                </p>
                <p>
                  Đến giờ trả phòng, Xe và HDV đón đoàn đi tham quan các điểm
                  không thể bỏ qua khi đến Đà Nẵng nơi được được mệnh danh
                  “Thành phố đáng sống” :
                </p>
                <p>
                  Dạo phố chụp hình tại CÔNG VIÊN CÁ CHÉP HÓA RỒNG CẠNH BỜ SÔNG
                  HÀN
                </p>
                <p>
                  Check in chụp hình CẦU TÌNH YÊU với khung cảnh trên cầu vô
                  cùng lãng mạn, với những cây cột đèn hình trái tim, những
                  chiếc khóa bên hai lan can cầu minh chứng cho tình yêu của rất
                  nhiều cặp đôi từ mọi miền đất nước.
                </p>
                <p>
                  CÔNG VIÊN APEC - CÔNG VIÊN 700 TỶ bên bờ sông Hàn, điểm nhấn
                  ấn tượng là công trình mái vòm hình cánh diều uốn lượn như
                  sóng biển màu trắng nằm chính giữa công viên.
                </p>
                <p>
                  BÁN ĐẢO SƠN TRÀ – VIẾNG CHÙA LINH ỨNG, TƯỢNG PHẬT NGỌC BÍCH,
                  TƯỢNG MẸ QUÁN THẾ ÂM
                </p>
                <p>
                  Buổi trưa : Đoàn dùng bữa trưa tại nhà hàng. mua sắm đặc sản
                  địa phương về làm quà.
                </p>
                <p>
                  Buổi chiều : Đến giờ xe và HDV đưa đoàn ra sân bay, làm thủ
                  tục đáp chuyến bay lúc về lại TP.HCM. Kết thúc hành trình tour
                  du lịch Đà Nẵng 3 ngày 2 đêm. Hướng dẫn viên công ty
                  Viettourist chia tay chúc sức khỏe, tạm biệt và hẹn ngày gặp
                  lại.
                </p>
                <p>
                  Chương trình Tour có thể thay đổi trật tự các điểm tham quan
                  do các yếu tố khách quan, Nhưng vẫn cam kết tham quan đầy đủ
                  chương trình.Trong trường hợp điểm tham quan bị đóng cửa do
                  nguyên nhân khách quan như thời tiết, dịch bệnh…Cty sẽ thay
                  thế bằng điểm tham quan khác phù hợp
                </p>
              </div>
              <Image
                src={"/img/detail-tour/ngay3.jpeg"}
                width={500}
                height={100}
                alt={"Sbay iso"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              ></Image>
            </div>
          </div>
          <div className="md:w-[33%] rounded-t-lg flex flex-col  w-[100%]">
            <div
              ref={bookingRef}
              className="flex w-full items-center font-medium bg-blue-500 text-white text-lg justify-center py-2"
            >
              Đặt Tour / Booking Tour
            </div>
            <div className=" shadow-md  flex flex-col items-center justify-center p-4 bg-orange-500">
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Nhập họ và tên"
                required
              />
              <input
                className="block p-2.5 my-4 w-full text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Nhập email"
                required
              />
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Số điện thoại"
                required
              />
              <div className="w-full">
                <p className="text-white my-2 font-normal text-base">
                  Ngày khởi hành
                </p>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="w-full">
                <p className="text-white my-2 font-normal text-base">
                  Ngày dự kiến
                </p>
                <div className="block w-full z-20 text-base text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                  <Datepicker
                    asSingle={true}
                    value={value}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-white my-2 font-normal text-base">
                  Số lượng khách dự kiến
                </p>
                <input
                  type="number"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Số lượng"
                  required
                />
              </div>
              <textarea
                className="block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Ghi chú"
                required
              />
              <div className="flex justify-end w-full mt-2">
                <button className="p-2 text-white text-base font-normal bg-blue-900 hover:bg-blue-700">
                  HOÀN TẤT
                </button>
              </div>
            </div>
            <RelateToTour />
          </div>
        </div>
      </div>
    </div>
  );
}
