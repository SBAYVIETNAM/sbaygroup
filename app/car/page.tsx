export default function BookingCar() {
  return (
    <div className="w-full h-full ">
      <div className="hero bg-[url('/img/bg-travel.jpg')] w-full h-full flex items-center justify-center p-6 flex-col">
        <div className="text-xl font-semibold text-white">
          CÔNG TY CỔ PHẦN SBAY VIỆT NAM
        </div>
        <p className="font-semibold text-xl my-2 text-white">Đặt xe</p>
        <p className="text-sm text-white">
          Xin vui lòng điền đầy đủ thông tin dưới đây
        </p>
        <div className="mt-2 md:w-[35%] bg-white p-6 border rounded-md">
          <p>Nơi đi</p>
          <input
            type="text"
            id="departure"
            className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Khách sạn Sbay, 03 Đinh Thị Hoà, Q. Sơn Trà, Tp Đà Nẵng"
            required
          ></input>
          <p className="mt-4">Nơi đến</p>
          <input
            type="text"
            id="destination"
            className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bà Nà Hills, Thôn An Sơn, Xã Hoà Ninh, Huyện Hoà Vang, Tp Đà Nẵng"
            required
          ></input>
          <div className="flex flex-row w-full mt-4 items-center justify-between">
            <div className="w-[48%]">
              <p className="">Chọn loại xe</p>
              <select
                id="typeCar"
                className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="CA">Xe 4 chỗ</option>
                <option value="FR">Xe 7 chỗ</option>
                <option value="DE">Xe 16 chỗ</option>
              </select>
            </div>
            <div className="w-[48%]">
              <p className="">Số km dự kiến</p>
              <input
                type="number"
                id="estimated"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="37"
                required
              ></input>
            </div>
          </div>
          <div className="flex flex-row w-full mt-4 items-center justify-between">
            <div className="w-[48%]">
              <p className="">Tên người đặt</p>
              <input
                type="text"
                id="name"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lê Hải Hà"
                required
              ></input>
            </div>
            <div className="w-[48%]">
              <p className="">Số điện thoại người đặt</p>
              <input
                type="text"
                id="phoneNumber"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0912345678"
                required
              ></input>
            </div>
          </div>
          <div className="flex flex-row w-full mt-4 items-center justify-between">
            <div className="w-[48%]">
              <p className="">Giờ đi</p>
              <input
                type="time"
                id="hour"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <div className="w-[48%]">
              <p className="">Ngày đi</p>
              <input
                type="date"
                id="date"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0912345678"
                required
              ></input>
            </div>
          </div>
          <div className="flex flex-row w-full mt-4 items-center justify-between">
            <div className="w-[48%]">
              <p className="">Mã đại lý</p>
              <input
                type="text"
                id="code"
                placeholder="0912345678"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <div className="w-[48%]">
              <p className="">Giá báo khách</p>
              <input
                type="text"
                id="price"
                className="block w-full mt-2 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="20,000"
                required
              ></input>
            </div>
          </div>
          <div className="text-sm mt-4 text-end">
            Mã đại lý là số điện thoại đăng ký đối tác với Sbay.
          </div>
          <div className="flex flex-row items-end justify-end">
            <p>HotLine:</p>
            <p className="text-red-500 font-bold ml-2 mt-2">0968 14 1400</p>
          </div>
          <a
            href="#_"
            className="px-5 mt-4 py-2.5 w-full relative rounded-lg group text-center text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-lg opacity-50 filter blur-sm bg-gradient-to-br from-red-600 to-red-700"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-lg opacity-50 from-red-600 to-red-700"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-lg shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-600 to-red-700"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-lg bg-gradient-to-br to-red-600 from-red-700"></span>
            <span className="relative text-center">Đặt xe</span>
          </a>
        </div>
      </div>
    </div>
  );
}
