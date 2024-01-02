"use client";

import Image from 'next/image'
import * as Icon from 'react-feather';
import Link from 'next/link';
import { MdAirplanemodeActive } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { PiMegaphoneFill } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Select from 'react-select'
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import { format, addDays } from "date-fns";
import { useState, useEffect } from 'react';
import { da, vi } from 'date-fns/locale';
import { useRouter } from 'next/navigation'

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

const defaultDepart = { value: 'HAN', label: 'Hà Nội', type: 'Miền Bắc' }
const defaultReturn = { value: 'SGN', label: 'Hồ Chí Minh', type: 'Miền Nam' }

export interface AirportOption {
    readonly value: string;
    readonly label: string;
    readonly type: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export default function Search() {
    const router = useRouter()

    const [defaultDepartTime, setDefaultDepartTime] = useState(format(new Date(), 'yyyy-MM-dd', { locale: vi }))
    const [defaultReturnTime, setDefaultReturnTime] = useState(format(addDays(new Date(), 2), 'yyyy-MM-dd', { locale: vi }))
    const [minDate, setMinDate] = useState(format(addDays(new Date(), 0), 'yyyy-MM-dd', { locale: vi }))
    const [maxDate, setMaxDate] = useState(format(addDays(new Date(), 365), 'yyyy-MM-dd', { locale: vi }))



    const [airPort, setAirPort] = useState([])
    //arrUser
    useEffect(() => {
        var listAirPort: any = []
        if (airportOptions.length > 0) {
            airportOptions.map((e: any) => {
                let AirportOption: { value: string, label: string, type: string, color: string } = {
                    value: e.value,
                    label: e.label,
                    type: e.type,
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
                listAirPort.push(AirportOption)
            })

        }
        // console.log('listAirPort', listAirPort);
        setAirPort(listAirPort)
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    /* Time choose */
    const [typeOfTicket, setTypeOfTicket] = useState(2)
    /* Select depart */
    const [selectedDepartAirport, setSelectedDepartAirport] = useState(defaultDepart.value);
    const onChangeDepart = (e: any) => {
        console.log('e', e);
        setSelectedDepartAirport(e.value)
    }
    /* Select return */
    const [selectedReturnAirport, setSelectedReturnAirport] = useState(defaultReturn.value);
    const onChangeReturn = (e: any) => {
        console.log('e', e);
        setSelectedReturnAirport(e.value)
    }
    /* Time choose */
    const [departTime, setDepartTime] = useState(defaultDepartTime)
    const [returnTime, setReturnTime] = useState(defaultReturnTime)
    /* Passengers choose */
    const [Adult, setAdult] = useState(1)
    const [Children, setChildren] = useState(0)
    const [Infant, setInfant] = useState(0)


    const searchfn = async () => {
        console.log(selectedDepartAirport, selectedReturnAirport);
        const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";
        const data = {
            action: 'DOMSearchFlights',
            ItineraryType: typeOfTicket,
            StartPoint: selectedDepartAirport,
            EndPoint: selectedReturnAirport,
            DepartureDate: format(new Date(departTime), "dd/MM/yyyy", { locale: vi }),
            ReturnDate: format(new Date(returnTime), "dd/MM/yyyy", { locale: vi }),
            Adult: Adult,
            Children: Children,
            Infant: Infant
        };
        var rawData = `{\r\n    \"action\": \"` + data.action + `\",\r\n    \"ItineraryType\": ` + data.ItineraryType + `,\r\n    \"StartPoint\": \"` + data.StartPoint + `\",\r\n    \"EndPoint\": \"` + data.EndPoint + `\",\r\n    \"DepartureDate\": \"` + data.DepartureDate + `\",\r\n    \"ReturnDate\": \"` + data.ReturnDate + `\",\r\n    \"Adult\": ` + data.Adult + `,\r\n    \"Children\": ` + data.Children + `,\r\n    \"Infant\": ` + data.Infant + `\r\n}`
        console.log('data', data);

        const res = await fetch(url, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "text/plain",
            },
            body: rawData,
        });
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
        } else {
            const data = await res.json();
            console.log("flight", data);
        }
    }
    

    const openLink = async () => {
        const data = {
            action: 'DOMSearchFlights',
            ItineraryType: typeOfTicket,
            StartPoint: selectedDepartAirport,
            EndPoint: selectedReturnAirport,
            DepartureDate: format(new Date(departTime), "dd/MM/yyyy", { locale: vi }),
            ReturnDate: format(new Date(returnTime), "dd/MM/yyyy", { locale: vi }),
            Adult: Adult,
            Children: Children,
            Infant: Infant
        };
        router.push('/airline-tickets?a='+data.action+'&t='+data.ItineraryType+'&sp='+data.StartPoint+'&ep='+data.EndPoint+'&dp='+data.DepartureDate+'&rd='+data.ReturnDate+'&ad='+data.Adult+'&ch='+data.Children+'&ba='+data.Infant)
    }
    return (
        <>
            <div>
                <div className="mx-auto bg-white p-5 rounded-lg drop-shadow-xl" >
                    <div className="border-b border-gray-200 shadow-xl dark:border-red-700 rounded-md mb-5">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg dark:text-gray-400">
                            <li>
                                <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                    <MdAirplanemodeActive className="mr-1 w-3 mt-0.5" />
                                    Vé máy bay
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <MdHotel className="mr-1 w-3 mt-0.5" />
                                    Khách sạn
                                </a>
                            </li>
                            <li>
                                <a href="https://datxe.sbayvietnam.com" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <FaCar className="mr-1 w-3 mt-0.5" />
                                    Đặt xe
                                </a>
                            </li>
                            <li>
                                <a href="https://datve.sbayvietnam.com" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <ImLocation className="mr-1 w-3 mt-0.5" />
                                    Vé Bà Nà
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <SiYourtraveldottv className="mr-1 w-3 mt-0.5" />
                                    Tour du lịch
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className=" flex flex-col lg:flex-row justify-between mb-5 ...">
                        <p>Tìm kiếm chuyến bay</p>
                        <div className=" flex flex-row space-x-2">
                            <div className="flex items-center">
                                <input id="typeOfTicket-radio-1" onChange={() => { setTypeOfTicket(1) }} type="radio" defaultChecked={typeOfTicket === 1} name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="typeOfTicket-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Một chiều</label>
                            </div>
                            <div className="flex items-center">
                                <input id="typeOfTicket-radio-2" onChange={() => { setTypeOfTicket(2) }} type="radio" defaultChecked={typeOfTicket === 2} name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="typeOfTicket-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Khứ hồi</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 mb-5 justify-between ...">
                        <div className=" flex flex-col space-y-1 w-full">
                            <div className=' flex flex-row'>
                                <FaPlaneDeparture className="mr-1 w-3 mt-0.5 opacity-70" />
                                <label htmlFor="from" className="block text-sm font-medium text-gray-900 dark:text-white">Từ</label>
                            </div>
                            <Select
                                id="from"
                                placeholder="Nơi đi"
                                options={airPort}
                                defaultValue={defaultDepart}
                                formatOptionLabel={(airPort: any) => {
                                    return (
                                        <>
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-sm'>{airPort.label + ' (' + airPort.value + ')'}</p>
                                                <span className=' text-xs'>{airPort.type}</span>
                                            </div>
                                        </>
                                    )
                                }}
                                onChange={onChangeDepart}
                                className="w-full " />
                        </div>
                        <div className=" flex flex-col space-y-1 w-full">
                            <div className=' flex flex-row'>
                                <FaPlaneArrival className="mr-1 w-3 mt-0.5 opacity-70" />
                                <label htmlFor="to" className="block text-sm font-medium text-gray-900 dark:text-white">Đến</label>
                            </div>
                            <Select
                                id="to"
                                placeholder="Nơi đến"
                                options={airPort}
                                defaultValue={defaultReturn}
                                formatOptionLabel={(airPort: any) => {
                                    return (
                                        <>
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-sm'>{airPort.label + ' (' + airPort.value + ')'}</p>
                                                <span className=' text-xs'>{airPort.type}</span>
                                            </div>
                                        </>
                                    )
                                }}
                                onChange={onChangeReturn}
                                className="w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 justify-between ...">
                        <div className=" flex flex-col space-y-1 w-full">
                            <div className=' flex flex-row'>
                                <FaRegCalendar className="mr-1 w-3 mt-0.5 opacity-70" />
                                <label htmlFor="fromDate" className="block text-sm font-medium text-gray-900 dark:text-white">Ngày đi</label>
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
                        <div className=" flex flex-col space-y-1 w-full">
                            <div className=' flex flex-row'>
                                <FaRegCalendarCheck className="mr-1 w-3 mt-0.5 opacity-70" />
                                <label htmlFor="toDate" className="block text-sm font-medium text-gray-900 dark:text-white">Ngày đến</label>
                            </div>
                            <input
                                onChange={(e: any) => { setReturnTime(e.currentTarget.value) }}
                                id="toDate"
                                className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"
                                type="date"
                                name="trip-start"
                                value={returnTime}
                                min={minDate}
                                max={maxDate} />
                        </div>
                    </div>

                    <div className=' flex flex-col space-y-2 lg:space-y-0 lg:flex-row my-5 justify-between ...'>
                        <form className="max-w-xs\">
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
                        <form className="max-w-xs">
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


                    <div className="flex flex-row ...">
                        <button onClick={openLink} className=' w-full'>
                            <button type="button" className="text-white bg-red-500 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Tìm kiếm</button>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}