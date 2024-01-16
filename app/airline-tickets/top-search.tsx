"use client";

import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck, FaBullseye } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';

const airportOptions = [
    { value: 'HAN', label: 'Hà Nội', type: 'Miền Bắc' },
    { value: 'HPH', label: 'Hải Phòng', type: 'Miền Bắc' },
    { value: 'DIN', label: 'Điện Biên Phủ', type: 'Miền Bắc' },
    { value: 'VDO', label: 'Vân Đồn', type: 'Miền Bắc' },
    { value: 'SGN', label: 'Hồ Chí Minh', type: 'Miền Nam' },
    { value: 'PQC', label: 'Phú Quốc', type: 'Miền Nam' },
    { value: 'VCA', label: 'Cần Thơ', type: 'Miền Nam' },
    { value: 'VCS', label: 'Côn Đảo', type: 'Miền Nam' },
    { value: 'VKG', label: 'Kiên Giang', type: 'Miền Nam' },
    { value: 'DAD', label: 'Đà Nẵng', type: 'Miền Trung' },
    { value: 'CXR', label: 'Nha Trang', type: 'Miền Trung' },
    { value: 'DLI', label: 'Đà Lạt', type: 'Miền Trung' },
    { value: 'HUI', label: 'Huế', type: 'Miền Trung' },
    { value: 'BMV', label: 'Ban Mê Thuột', type: 'Miền Trung' },
    { value: 'PXU', label: 'PleiKu', type: 'Miền Trung' },
    { value: 'TBB', label: 'Phú Yên', type: 'Miền Trung' },
    { value: 'THD', label: 'Thanh Hóa', type: 'Miền Trung' },
    { value: 'UIH', label: 'Qui Nhơn', type: 'Miền Trung' },
    { value: 'VCL', label: 'Chu Lai', type: 'Miền Trung' },
    { value: 'VDH', label: 'Quảng Bình', type: 'Miền Trung' },
    { value: 'VII', label: 'Vinh', type: 'Miền Trung' },
    { value: 'BKK', label: 'Băng Cốc', type: 'Châu Á' },
    { value: 'CAN', label: 'Quảng Châu', type: 'Châu Á' },
    { value: 'HKG', label: 'Hồng Kông', type: 'Châu Á' },
    { value: 'KUL', label: 'Kuala Lumpur', type: 'Châu Á' },
    { value: 'ICN', label: 'Seoul, Incheon', type: 'Châu Á' },
    { value: 'SHA', label: 'Thượng Hải', type: 'Châu Á' },
    { value: 'SIN', label: 'Singapore', type: 'Châu Á' },
    { value: 'TPE', label: 'Đài Bắc', type: 'Châu Á' },
    { value: 'TYO', label: 'Tokyo', type: 'Châu Á' },
    { value: 'KOS', label: 'Campuchia', type: 'Châu Á' },
    { value: 'AMS', label: 'Amsterdam', type: 'Châu Âu' },
    { value: 'CPH', label: 'Cô-pen-ha-gen', type: 'Châu Âu' },
    { value: 'FRA', label: 'Frankfurt', type: 'Châu Âu' },
    { value: 'LON', label: 'London', type: 'Châu Âu' },
    { value: 'PAR', label: 'Paris', type: 'Châu Âu' },
    { value: 'PRG', label: 'Praha', type: 'Châu Âu' },
    { value: 'STO', label: 'Stockholm', type: 'Châu Âu' },
    { value: 'ZRH', label: 'Zurich', type: 'Châu Âu' },
    { value: 'DFW', label: 'Dallas', type: 'Châu Úc' },
    { value: 'HOU', label: 'Houston', type: 'Châu Úc' },
    { value: 'LAX', label: 'Los Angeles', type: 'Châu Úc' },
    { value: 'MEL', label: 'Men-bơn', type: 'Châu Úc' },
    { value: 'NYC', label: 'New York', type: 'Châu Úc' },
    { value: 'SFO', label: 'San Francisco', type: 'Châu Úc' },
    { value: 'SYD', label: 'Sydney', type: 'Châu Úc' },
    { value: 'YTO', label: 'Toronto', type: 'Châu Úc' },
    { value: 'YVR', label: 'Vancouver', type: 'Châu Úc' },
]
export default function TopSearch(props: any) {
    /* Data from Url*/
    const action = props.action
    const ItineraryType = props.ItineraryType
    const StartPoint = props.StartPoint
    const EndPoint = props.EndPoint
    const DepartureDate = props.DepartureDate
    console.log('DepartureDate', DepartureDate);
    // const Adult = props.Adult
    // const Children = props.Children
    // const Infant = props.Infant

    const [typeOfTicket, setTypeOfTicket] = useState<number>(parseInt(ItineraryType))
    /* Select depart */
    const [selectedDepartAirport, setSelectedDepartAirport] = useState(/* defaultDepart.value */);
    const onChangeDepart = (e: any) => {
        // console.log('e', e);
        setSelectedDepartAirport(e.value)
    }
    /* Select return */
    const [selectedReturnAirport, setSelectedReturnAirport] = useState(/* defaultReturn.value */);
    const onChangeReturn = (e: any) => {
        // console.log('e', e);
        setSelectedReturnAirport(e.value)
    }
    /* Passengers choose */
    const [Adult, setAdult] = useState(parseInt(props.Adult))
    const [Children, setChildren] = useState(parseInt(props.Children))
    const [Infant, setInfant] = useState(parseInt(props.Infant))
    const [show, setShow] = useState(false)
    const [minDate, setMinDate] = useState(format(addDays(new Date(), 0), 'yyyy-MM-dd', { locale: vi }))
    const [maxDate, setMaxDate] = useState(format(addDays(new Date(), 365), 'yyyy-MM-dd', { locale: vi }))
    const [departTime, setDepartTime] = useState(format(new Date(DepartureDate), 'yyyy-MM-dd', { locale: vi }))

    return (
        <div className=" mt-32 flex bg-amber-500 rounded-xl min-h-max flex-col max-w-7xl mx-auto justify-between">
            <div className=" flex flex-row space-x-2 p-3">
                <div className="flex items-center">
                    <input
                        id="typeOfTicket-radio-1"
                        onChange={() => { setTypeOfTicket(1) }}
                        type="radio" checked={typeOfTicket == 1}
                        name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="typeOfTicket-radio-1" className="ms-2 text-sm font-medium text-white">Một chiều</label>
                </div>
                <div className="flex items-center">
                    <input
                        id="typeOfTicket-radio-2"
                        onChange={() => { setTypeOfTicket(2) }}
                        type="radio" checked={typeOfTicket == 2}
                        name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="typeOfTicket-radio-2" className="ms-2 text-sm font-medium text-white">Khứ hồi</label>
                </div>
            </div>
            <div className=" grid grid-cols-12 my-auto">
                <div className=" col-span-12 xl:col-span-8 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 mb-5 justify-between ...">
                    <div className=" flex flex-col space-y-1 w-full">
                        <div className=' flex flex-row'>
                            <FaPlaneDeparture className="mr-1 w-3 mt-0.5 text-white" />
                            <label htmlFor="from" className="block text-sm font-medium text-white dark:text-white">Từ</label>
                        </div>
                        <Select
                            id="from"
                            placeholder="Nơi đi"
                            options={airportOptions}
                            // defaultValue={defaultDepart}
                            formatOptionLabel={(airportOptions: any) => {
                                return (
                                    <>
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-sm'>{airportOptions.label + ' (' + airportOptions.value + ')'}</p>
                                            <span className=' text-xs'>{airportOptions.type}</span>
                                        </div>
                                    </>
                                )
                            }}
                            onChange={onChangeDepart}
                            className="w-full whitespace-nowrap" />
                    </div>
                    <div className=" flex flex-col space-y-1 w-full">
                        <div className=' flex flex-row'>
                            <FaPlaneArrival className="mr-1 w-3 mt-0.5 text-white" />
                            <label htmlFor="to" className="block text-sm font-medium text-white dark:text-white">Đến</label>
                        </div>
                        <Select
                            id="to"
                            placeholder="Nơi đến"
                            options={airportOptions}
                            //   defaultValue={defaultReturn}
                            formatOptionLabel={(airportOptions: any) => {
                                return (
                                    <>
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-sm'>{airportOptions.label + ' (' + airportOptions.value + ')'}</p>
                                            <span className=' text-xs'>{airportOptions.type}</span>
                                        </div>
                                    </>
                                )
                            }}
                            onChange={onChangeReturn}
                            className="w-full whitespace-nowrap" />
                    </div>
                    <div className=" col-span-12 xl:col-span-4 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 justify-between ...">
                        <div className=" flex flex-col space-y-1 w-full">
                            <div className=' flex flex-row'>
                                <FaRegCalendar className="mr-1 w-3 mt-0.5 opacity-70 text-white" />
                                <label htmlFor="fromDate" className="block text-sm font-medium text-white">Ngày đi</label>
                            </div>
                            <input
                                onChange={(e: any) => { setDepartTime(e.currentTarget.value) }}
                                id="fromDate"
                                className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date"
                                name="trip-start"
                                value={departTime}
                                min={minDate}
                                max={maxDate} />
                        </div>
                        {ItineraryType == 2 &&
                            <div className=" flex flex-col space-y-1 w-full">
                                <div className=' flex flex-row'>
                                    <FaRegCalendarCheck className="mr-1 w-3 mt-0.5 opacity-70 text-white" />
                                    <label htmlFor="toDate" className="block text-sm font-medium text-white">Ngày đến</label>
                                </div>
                                <input
                                    // onChange={(e: any) => { setReturnTime(e.currentTarget.value) }}
                                    id="toDate"
                                    className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"
                                    type="date"
                                    name="trip-start"
                                    // value={returnTime}
                                    min={minDate}
                                    max={maxDate} />
                            </div>
                        }
                    </div>
                </div>
                <div className='relative col-span-6 xl:col-span-2 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between ...'>

                    <div className='w-full'>
                        <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-white">Số lượng khách</label>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={Adult + ' n.lớn, ' + Children + ' trẻ em, ' + Infant + ' em bé'}
                            onClick={() => setShow(true)}

                            required />
                    </div>
                    {show == true &&
                        <div onMouseLeave={() => setShow(false)} className="absolute col-span-4 top-20 bg-amber-500 rounded-xl p-5 shadow-lg ...">
                            <form className="max-w-xs mb-3">
                                <label htmlFor="aldult-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Người lớn (từ 12 tuổi):</label>
                                <div className="relative flex items-center max-w-[10rem]">
                                    <button onClick={() => { Adult > 1 && setAdult(Adult - 1) }} type="button" id="decrement-button" data-input-counter-decrement="aldult-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        id="aldult-input"
                                        data-input-counter aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={Adult}
                                        placeholder="1"
                                        required />
                                    <button onClick={() => { Adult > 0 && setAdult(Adult + 1) }} type="button" id="increment-button" data-input-counter-increment="aldult-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <form className="max-w-xs mb-3">
                                <label htmlFor="child-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trẻ em (từ 2-12 tuổi):</label>
                                <div className="relative flex items-center max-w-[10rem]">
                                    <button onClick={() => { Children >= 1 && setChildren(Children - 1) }} type="button" id="decrement-button" data-input-counter-decrement="child-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        id="child-input"
                                        data-input-counter aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={Children}
                                        placeholder="0" required />
                                    <button onClick={() => { Children >= 0 && setChildren(Children + 1) }} type="button" id="increment-button" data-input-counter-increment="child-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <form className="max-w-xs">
                                <label htmlFor="baby-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Em bé (dưới 2 tuổi):</label>
                                <div className="relative flex items-center max-w-[10rem]">
                                    <button onClick={() => { Infant >= 1 && setInfant(Infant - 1) }} type="button" id="decrement-button" data-input-counter-decrement="baby-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text" id="baby-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={Infant}
                                        placeholder="0" required />
                                    <button onClick={() => { Infant >= 0 && setInfant(Infant + 1) }} type="button" id="increment-button" data-input-counter-increment="baby-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    }


                </div>
                <div className=" col-span-6 xl:col-span-2 px-3 flex flex-col justify-between ...">
                    <label className="block text-sm font-medium text-white invisible">Tìm</label>
                    <button
                        // onClick={searchfn}
                        type="button"
                        className="text-white mb-5 bg-blue-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10">Tìm kiếm</button>
                </div>
            </div>
        </div>
    )

}