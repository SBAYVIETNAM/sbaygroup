"use client";

import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck, FaBullseye } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import airportOptions from '../_helper/airport-options'
import { useRouter, redirect } from "next/navigation";

export default function TopSearch(
    props:any

) {
    /* Data from Url*/
    // const action = props.action
    // const ItineraryType = props.ItineraryType
    // const StartPoint = props.StartPoint
    // const EndPoint = props.EndPoint

    const findFrom: any = airportOptions.find(({ value }) => value === props.StartPoint)
    const findTo: any = airportOptions.find(({ value }) => value === props.EndPoint)

    // const DepartureDate = props.DepartureDate
    let returnDate
    if (props.ReturnDate == "") {
        returnDate = format(addDays(new Date(), 2), 'yyyy-MM-dd', { locale: vi })
    } else {
        returnDate = format(new Date(props.ReturnDate), 'yyyy-MM-dd', { locale: vi })
    }
    

    const [typeOfTicket, setTypeOfTicket] = useState<number>(parseInt(props.ItineraryType))
    /* Select depart */
    const [selectedDepartAirport, setSelectedDepartAirport] = useState(findFrom);
    const onChangeDepart = (e: any) => {
        console.log('e', e);
        setSelectedDepartAirport(e)
    }
    /* Select return */
    const [selectedReturnAirport, setSelectedReturnAirport] = useState(findTo);
    const onChangeReturn = (e: any) => {
        console.log('e', e);
        setSelectedReturnAirport(e)
    }
    /* Passengers choose */
    const [Adult, setAdult] = useState(props.adult)
    const [Children, setChildren] = useState(props.treEm)
    const [Infant, setInfant] = useState(props.infant)
    const [show, setShow] = useState(false)
    const [minDate, setMinDate] = useState(format(addDays(new Date(), 0), 'yyyy-MM-dd', { locale: vi }))
    const [maxDate, setMaxDate] = useState(format(addDays(new Date(), 365), 'yyyy-MM-dd', { locale: vi }))
    const [departTime, setDepartTime] = useState(format(new Date(props.DepartureDate), 'yyyy-MM-dd', { locale: vi }))
    const [returnTime, setReturnTime] = useState(format(new Date(returnDate), 'yyyy-MM-dd', { locale: vi }))

    /*  */
    const router = useRouter()

    const search = async () => {
        if (typeOfTicket == 1) {
            const data = {
                action: props.action,
                ItineraryType: typeOfTicket,
                StartPoint: selectedDepartAirport.value,
                EndPoint: selectedReturnAirport.value,
                DepartureDate: format(new Date(departTime), "MM/dd/yyyy", { locale: vi }),
                ReturnDate: "",
                Adult: Adult,
                Children: Children,
                Infant: Infant
            };
            console.log('data', data);
            router.push('/airline-tickets?a=DOMSearchFlights&t=' + data.ItineraryType + '&sp=' + data.StartPoint + '&ep=' + data.EndPoint + '&dp=' + data.DepartureDate + '&rd=' + data.ReturnDate + '&ad=' + data.Adult + '&ch=' + data.Children + '&ba=' + data.Infant)
        } else {

            const data = {
                action: props.action,
                ItineraryType: typeOfTicket,
                StartPoint: selectedDepartAirport.value,
                EndPoint: selectedReturnAirport.value,
                DepartureDate: format(new Date(departTime), "MM/dd/yyyy", { locale: vi }),
                ReturnDate: format(new Date(returnTime), "MM/dd/yyyy", { locale: vi }),
                Adult: Adult,
                Children: Children,
                Infant: Infant
            };
            console.log('data', data);
            router.push('/airline-tickets?a=DOMSearchFlights&t=' + data.ItineraryType + '&sp=' + data.StartPoint + '&ep=' + data.EndPoint + '&dp=' + data.DepartureDate + '&rd=' + data.ReturnDate + '&ad=' + data.Adult + '&ch=' + data.Children + '&ba=' + data.Infant)

        }
    }
    console.log('typeOfTicket', typeOfTicket, typeof (typeOfTicket));
    return (
        <div className=" md:mt-24 flex bg-amber-500 rounded-xl min-h-max flex-col max-w-7xl mx-auto justify-between">
            <div className=" flex flex-row space-x-2 p-3">
                <div className="flex items-center">
                    <input
                        id="typeOfTicketRadio1"
                        onChange={() => { setTypeOfTicket(1) }}
                        type="radio"
                        checked={typeOfTicket == 1}
                        // defaultChecked = {true}
                        name="typeOfTicketRadio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="typeOfTicketRadio1" className="ms-2 text-sm font-medium text-white">Một chiều</label>
                </div>
                <div className="flex items-center">
                    <input
                        id="typeOfTicketRadio2"
                        onChange={() => { setTypeOfTicket(2) }}
                        type="radio" checked={typeOfTicket == 2}
                        name="typeOfTicketRadio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="typeOfTicketRadio2" className="ms-2 text-sm font-medium text-white">Khứ hồi</label>
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
                            defaultValue={selectedDepartAirport}
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
                            defaultValue={selectedReturnAirport}
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
                    <div className=" col-span-12 xl:col-span-4 md:px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 justify-between ...">




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

                        {typeOfTicket == 2 &&
                            <div className=" flex flex-col space-y-1 w-full">
                                <div className=' flex flex-row'>
                                    <FaRegCalendarCheck className="mr-1 w-3 mt-0.5 opacity-70 text-white" />
                                    <label htmlFor="toDate" className="block text-sm font-medium text-white">Ngày đến</label>
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
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
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
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <form className="max-w-xs mb-3">
                                <label htmlFor="child-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trẻ em (từ 2-12 tuổi):</label>
                                <div className="relative flex items-center max-w-[10rem]">
                                    <button onClick={() => { Children >= 1 && setChildren(Children - 1) }} type="button" id="decrement-button" data-input-counter-decrement="child-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
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
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <form className="max-w-xs">
                                <label htmlFor="baby-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Em bé (dưới 2 tuổi):</label>
                                <div className="relative flex items-center max-w-[10rem]">
                                    <button onClick={() => { Infant >= 1 && setInfant(Infant - 1) }} type="button" id="decrement-button" data-input-counter-decrement="baby-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text" id="baby-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={Infant}
                                        placeholder="0" required />
                                    <button onClick={() => { Infant >= 0 && setInfant(Infant + 1) }} type="button" id="increment-button" data-input-counter-increment="baby-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
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
                        onClick={search}
                        type="button"
                        className="mt-1 md:mt-0 text-white mb-5 bg-blue-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10">Tìm kiếm</button>
                </div>
            </div>
        </div>
    )

}