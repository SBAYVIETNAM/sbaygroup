"use client";

import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck, FaBullseye } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import { useRouter } from "next/navigation";
import Notfound from "./notfound";
import Searching from "./search";
import TopSearch from "./top-search";
var _ = require('lodash');
import DepartureBaggagesInfomation from "./DepartureBaggagesInfomation";
import ContactAndTaxInfomation from "./contact-tax-Infomation";
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


export default function SearchResponse(props: any) {
    const searchData = props.searchData
    const [departData, setDepartData] = useState<any>([])

    useEffect(() => {
        console.log('useEffect.....');
        let x: any = []
        for (const key in searchData.Data.DepartureFlights) {
            // console.log('key', key, ReturnFlights[key]);
            x.push(searchData.Data.DepartureFlights[key])
        }
        setDepartData(x)
    }, [])

    const DataSession = props.searchData.Data.DataSession
    const DOMSearchFlights = props.searchData.DOMSearchFlights
    console.log({
        'departData': departData,
        'DataSession': DataSession,
        'DOMSearchFlights': DOMSearchFlights
    });
    /*  */
    const router = useRouter()
    const [typeOfTicket, setTypeOfTicket] = useState<number>(parseInt(props.ItineraryType))
    const [passenger, setPassenger] = useState({
        Adult: props.Adult,
        Children: props.Children,
        Infant: props.Infant
    })

    const weekChooseDepart =
        [
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), -2), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), -2), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), -2), "MM/dd/yyyy", { locale: vi }),
            },
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), -1), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), -1), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), -1), "MM/dd/yyyy", { locale: vi }),
            },
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), 0), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), 0), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), 0), "MM/dd/yyyy", { locale: vi }),
            },
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), 1), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), 1), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), 2), "MM/dd/yyyy", { locale: vi }),
            },
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), 3), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), 3), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), 3), "MM/dd/yyyy", { locale: vi }),
            },
            {
                dayOfWeek: format(addDays(new Date(props.DepartureDate), 4), 'EEEE', { locale: vi }),
                date: format(addDays(new Date(props.DepartureDate), 4), 'dd/MM', { locale: vi }),
                dateStandar: format(addDays(new Date(props.DepartureDate), 4), "MM/dd/yyyy", { locale: vi }),
            },
        ]
    const searchInDateDepart = function (e: any) {
        // console.log(e.target.getAttribute('data-datestandar'));
        const dateChoose = e.target.getAttribute('data-datestandar')
        // router.push('/airline-tickets?a=DOMSearchFlights&t=' + typeOfTicket + '&sp=' + selectedDepartAirport + '&ep=' + selectedReturnAirport + '&dp=' + dateChoose + '&rd=' + format(addDays(new Date(dateChoose), 1), 'MM/dd/yyyy', { locale: vi }) + '&ad=' + Adult + '&ch=' + Children + '&ba=' + Infant)
    }
    const findFrom: any = airportOptions.find(({ value }) => value === props.StartPoint)
    console.log('findFrom', findFrom);
    const findTo: any = airportOptions.find(({ value }) => value === props.EndPoint)
    const [trip, setTrip] = useState<any>({
        from: findFrom?.label + ', ' + findFrom?.label + ' (' + findFrom?.value + ')',
        to: findTo?.label + ', ' + findTo?.label + ' (' + findTo?.value + ')'
    })
    const [notFound, setNotFound] = useState(false)

    /* LeftMenu */
    /* form show */
    const [showVatInfo, setShowVatInfo] = useState(false)
    const showVat = (e: any, i: number) => {
        console.log(e.target.checked);
        if (e.target.checked == true) {
            setShowVatInfo(true)
        } else {
            setShowVatInfo(false)
        }
    }
    /* Sort */
    const [priceTax, setPriceTax] = useState(true)
    const [sortBy, setSortBy] = useState(3) // 1: giá, 2: thời gian đi, 3: hãng a đến z
    // const [departData, setDepartData] = useState(props.departData)

    const sortFn = (e: any) => {
        // setDepartData([])
        // setReturnData([])
        console.log('departData', departData);
        // console.log('returnData', returnData);
        if (e == 1) {
            const de = [...departData].sort((a: any, b: any) => a.TotalPrice - b.TotalPrice);
            console.log('de', de);
            //   const re = [...returnData].sort((a: any, b: any) => a.TotalPrice - b.TotalPrice);
            setDepartData(de)
            //   setReturnData(re)
            // setUpdateSort(!updateSort)
        } else if (e == 2) {
            const de = [...departData].sort((a, b) => {
                const nameA = a.StartDate; // ignore upper and lowercase
                const nameB = b.StartDate; // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
            console.log('de', de);
            //   const re = [...returnData].sort((a, b) => {
            //     const nameA = a.StartDate; // ignore upper and lowercase
            //     const nameB = b.StartDate; // ignore upper and lowercase
            //     if (nameA < nameB) {
            //       return -1;
            //     }
            //     if (nameA > nameB) {
            //       return 1;
            //     }

            //     // names must be equal
            //     return 0;
            //   });
            setDepartData(de)
            //   setReturnData(re)
        } else if (e == 3) {
            const de = [...departData].sort((a, b) => {
                const nameA = a.AirlineCode.toUpperCase(); // ignore upper and lowercase
                const nameB = b.AirlineCode.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
            console.log('de', de);
            //   const re = [...returnData].sort((a, b) => {
            //     const nameA = a.AirlineCode.toUpperCase(); // ignore upper and lowercase
            //     const nameB = b.AirlineCode.toUpperCase(); // ignore upper and lowercase
            //     if (nameA < nameB) {
            //       return -1;
            //     }
            //     if (nameA > nameB) {
            //       return 1;
            //     }

            //     // names must be equal
            //     return 0;
            //   });
            setDepartData(de)
            //   setReturnData(re)

        }
        setSortBy(e)
    }
    /* Filter */
    const [filterBy, setFilterBy] = useState({
        bambo: true,
        vietjet: true,
        vietnam: true,
        vietravel: true
    })
    const filterFn = (e: any, i: number) => {
        console.log(e.target.checked);
        if (e.target.checked == false && i == 1) {
            setFilterBy(
                {
                    bambo: false,
                    vietjet: filterBy.vietjet,
                    vietnam: filterBy.vietnam,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == false && i == 2) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: false,
                    vietnam: filterBy.vietnam,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == false && i == 3) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: filterBy.vietjet,
                    vietnam: false,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == false && i == 4) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: filterBy.vietjet,
                    vietnam: filterBy.vietnam,
                    vietravel: false
                }
            )
        } else if (e.target.checked == true && i == 1) {
            setFilterBy(
                {
                    bambo: true,
                    vietjet: filterBy.vietjet,
                    vietnam: filterBy.vietnam,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == true && i == 2) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: true,
                    vietnam: filterBy.vietnam,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == true && i == 3) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: filterBy.vietjet,
                    vietnam: true,
                    vietravel: filterBy.vietravel
                }
            )
        } else if (e.target.checked == true && i == 4) {
            setFilterBy(
                {
                    bambo: filterBy.bambo,
                    vietjet: filterBy.vietjet,
                    vietnam: filterBy.vietnam,
                    vietravel: true
                }
            )
        }
        // const x = _.filter(departData, ['AirlineCode', 'VN'])
        // setDepartData(x)
    }

    /* Checkout */
    const [checkOutStep, setCheckOutStep] = useState(false)
    const [orderStep, setOrderStep] = useState(false)

    const [chooseFlightDepartId, setChooseFlightDepartId] = useState('')
    const [chooseFlightReturn, setChooseFlightReturn] = useState('')
    const [departureBaggages, setDepartureBaggages] = useState([])
    const [returnBaggages, setReturnBaggages] = useState([])
    /*  */
    const [domGetBaggages, setDOMGetBaggages] = useState('')
    const chooseFlightDepartFn = (e: any) => {
        const getFlightDepartId = e.target.getAttribute('data-departureflightsession')
        console.log(getFlightDepartId);
        setChooseFlightDepartId(getFlightDepartId)
        // console.log('departData', departData);
        const departChoose = _.filter(departData, { 'FlightSession': getFlightDepartId });
        console.log('departChoose', departChoose);

        setCheckOutStep(true)
        setDepartData(departChoose)
        /* Call get Api */
        const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";
        const dataFight = {
            action: "DOMGetBaggages",
            dataSession: DataSession,
            departureFlightSession: getFlightDepartId,
            returnFlightSession: ""
        }
        console.log('dataFight', dataFight);
        const getBaggage = async () => {
            const res = await fetch(url, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataFight),
            });
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error("Failed to fetch data");
            } else {
                const data = await res.json();
                console.log("get getBaggage ...", data);
                setDepartureBaggages(data.Data.DepartureBaggages)
                setDOMGetBaggages(data.DOMGetBaggages)
            }
        }
        getBaggage()
    }

    /* Order */
    /* Passengers choose */
    const [Adult, setAdult] = useState(parseInt(props.Adult))
    const [Children, setChildren] = useState(parseInt(props.Children))
    const [Infant, setInfant] = useState(parseInt(props.Infant))
    /* Order Infomation */
    interface Passenger {
        "FirstName": string,
        "LastName": string,
        "Type": string,
        "Gender": string,
        "Birthday": string,
        "Phone": string,
        "Email": string,
        "BaggageDeparture": string,
        "BaggageReturn": string
    }
    interface Passengers extends Array<Passenger> { }

    const [listPassengers, setListPassengers] = useState<Passengers>([{
        "FirstName": "Sbay",
        "LastName": "Viet Nam",
        "Type": "ADT",
        "Gender": "1",
        "Birthday": "",
        "Phone": "1231231234",
        "Email": "0912345678@0912345678.com",
        "BaggageDeparture": "20",
        "BaggageReturn": ""
    }])

    const [contactInfo, setContactInfo] = useState({
        "Gender": "1",
        "FirstName": "Sbay Viet Nam",
        "LastName": "",
        "Phone": "0912345678",
        "Email": "0912345678@0912345678.com",
        "Address": "0912345678",
        "Company": "Sbay Viet Nam",
        "Note": "Sbay Viet Nam"
    })
    const [invoiceInfo, setInvoiceInfo] = useState({
        "company": "Sbay Viet Nam",
        "address": "Sbay Viet Nam",
        "city": "Sbay Viet Nam",
        "mst": "Sbay Viet Nam",
        "receiver": "Sbay Viet Nam",
        "email": "0912345678@0912345678.com"
    })
    // /* get useForm data */

    /* Success */
    const [complete, setComplete] = useState(false)
    const [completeData, setCompleteData] = useState<any>({})

    const orderfn = () => {

        console.log('đặt chuyến bay ...');

        const orderData = {
            action: 'DOMMakeReservation',
            action_type: 1,
            dataSession: DataSession,
            departureFlightSession: chooseFlightDepartId,
            returnFlightSession: chooseFlightReturn,
            ListPassengers: listPassengers,
            ContactInfo: contactInfo,
            InvoiceInfo: invoiceInfo,
            SBAY_data_search: {
                "action": props.action,
                "ItineraryType": parseInt(props.ItineraryType),
                "StartPoint": props.StartPoint,
                "EndPoint": props.EndPoint,
                "DepartureDate": format(new Date(props.DepartureDate), "dd/MM/yyyy", { locale: vi }),
                "ReturnDate": '',
                "Adult": parseInt(props.Adult),
                "Children": parseInt(props.Children),
                "Infant": parseInt(props.Infant)
            },
            departureFlight: departData[0],
            returnFlight: "",
            DOMSearchFlights: DOMSearchFlights,
            DOMGetBaggages: domGetBaggages,
            DOMGetFareRuleInfo: '',
            DOMGetFareRuleInfo1: '',
            SBAY_detail_of_agent_website_json: {
                "id": "2",
                "email": "sbaydatcho@gmail.com",
                "title": "Sbay Việt Nam",
                "folder": "flight.sbaygroup.com/",
                "folder_old": null,
                "user_id": "1",
                "status": "1",
                "ip": "113.167.79.196",
                "update_by": null,
                "created_at": "2022-09-17 18:24:34",
                "updated_at": "2023-12-13 09:21:50",
                "FeeAdult": "50000",
                "FeeChild": "50000",
                "FeeInfant": "50000",
                "logo": "//sbaygroup.net/upload-logos/logo-sbay.png",
                "hotline": "0967041900",
                "facebook": "https://www.facebook.com/messages/t/104778018642392",
                "zalo": "3932405098286099762",
                "FeeAdultVN": "50000",
                "FeeChildVN": "50000",
                "FeeInfantVN": "50000",
                "FeeAdultVJ": "50000",
                "FeeChildVJ": "50000",
                "FeeInfantVJ": "50000",
                "FeeAdultQH": "50000",
                "FeeChildQH": "50000",
                "FeeInfantQH": "50000",
                "FeeAdultVU": "50000",
                "FeeChildVU": "50000",
                "FeeInfantVU": "50000",
                "FeeAdultQT": "500000",
                "FeeChildQT": "500000",
                "FeeInfantQT": "500000",
                "tab_top100": "1",
                "tab_sanvere": "1",
                "tab_tragop": "1",
                "tab_datxe": "1"
            },
            sbay_agent: 'abcbibibi',
            sbtoken: '',
            gia_chieu_di: '',
            gia_chieu_ve: '0'
        }
        const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";

        console.log('orderData', orderData);
        const search = async () => {
            const res = await fetch(url, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error("Failed to fetch data");
            } else {
                const data = await res.json();
                console.log("res", data);
                if (data.Data != null) {
                    setComplete(true)
                    setCompleteData(data)
                } else {
                    alert('Có lỗi, vui lòng thử lại !')
                }
            }
        }
        search()

    }

    /* Checkout */
    const [checkoutStep, setCheckoutStep] = useState(1)
    const getListPassengers = function (e: any) {
        console.log('getListPassengers', e);
        setCheckoutStep(2)
    }

    const getContactAndTax = function (e: any) {
        console.log('getContactAndTax', e);
    }


    return (
        <>
            {orderStep == false
                ?
                <>
                    <TopSearch
                        className="mt-32"
                        action={props.action}
                        ItineraryType={props.ItineraryType}
                        StartPoint={props.StartPoint}
                        EndPoint={props.EndPoint}
                        DepartureDate={props.DepartureDate}
                        Adult={props.Adult}
                        Children={props.Children}
                        Infant={props.Infant}
                    ></TopSearch>
                    <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto py-2">
                        <div className="xl:grid hidden xl:visible xl:col-span-3 shadow-xl ... rounded-xl">
                            <div className="flex flex-col space-y-5 p-5">
                                <div className="flex flex-col space-y-5 p-5 border-b-2">
                                    <h3>Hiển thị giá</h3>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="priceTax"
                                            type="radio"
                                            onChange={() => { setPriceTax(true) }}
                                            checked={priceTax == true}
                                            name="priceTaxRadio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="priceTax" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá bao gồm thuế phí</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="priceNoTax" type="radio"
                                            onChange={() => { setPriceTax(false) }}
                                            checked={priceTax == false}
                                            name="priceTaxRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="priceNoTax" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá chưa gồm thuế phí</label>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5 p-5 border-b-2">
                                    <h3>Sắp xếp</h3>
                                    <div className="flex items-center mb-4">
                                        <input
                                            onClick={() => sortFn(1)}
                                            checked={sortBy == 1}
                                            id="priceLowRadio" type="radio" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="priceLowRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Giá (Thấp tới Cao)</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            onClick={() => sortFn(2)}
                                            checked={sortBy == 2}
                                            id="timeStartRadio" type="radio" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="timeStartRadio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thời gian khởi hành</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            onClick={() => sortFn(3)}
                                            checked={sortBy == 3}
                                            id="byAir" type="radio" name="sortRadio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="byAir" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hãng hàng không</label>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5 p-5 border-b-2">
                                    <h3>Hãng hàng không</h3>
                                    <div className="flex items-center mb-4">
                                        <input
                                            onClick={(e) => filterFn(e, 1)}
                                            checked={filterBy.bambo == true}
                                            id="BamboCheckbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="BamboCheckbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bamboo Airways</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            onClick={(e) => filterFn(e, 2)}
                                            checked={filterBy.vietjet == true}
                                            id="VietJetCheckbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="VietJetCheckbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietjet Air</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            onClick={(e) => filterFn(e, 3)}
                                            checked={filterBy.vietnam == true}
                                            id="VnAirlineCheckbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="VnAirlineCheckbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietnam Airlines</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            onClick={(e) => filterFn(e, 4)}
                                            checked={filterBy.vietravel == true}
                                            id="VietTravelCheckbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="VietTravelCheckbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vietravel Airlines</label>
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Copy text</button>
                                        <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Chụp ảnh</button>
                                        <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Xóa bộ lọc</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="button" onClick={orderfn} className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">order</button> */}

                        <div className="grid col-span-12 xl:col-span-9 content-start">
                            {
                                typeOfTicket == 1 &&
                                <div className="h-full">
                                    <div className=" text-sm max-h-36 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                        <div className=" text-start pt-2 bg-red-100">
                                            <h1 className="text-black mx-3 text-xl font-bold">{trip.from} - {trip.to}</h1>
                                            <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - đi ngày {format(new Date(props.DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                                        </div>
                                        <ul className="flex flex-row justify-between ...">
                                            {weekChooseDepart.map((e: any, i: number) => {
                                                // console.log('here ...', format(new Date(props.DepartureDate), "dd/MM", { locale: vi }), format(new Date(e.dateStandar), "dd/MM", { locale: vi }))
                                                return (
                                                    <>
                                                        {
                                                            format(new Date(props.DepartureDate), "dd/MM", { locale: vi }) == e.date
                                                                ?
                                                                <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-600">
                                                                    <button data-datestandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg text-red-600">
                                                                        {e.dayOfWeek} <br />
                                                                        {e.date}</button>
                                                                </li>
                                                                :
                                                                <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-100">
                                                                    <button data-datestandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                                                        {e.dayOfWeek} <br />
                                                                        {e.date}</button>
                                                                </li>
                                                        }
                                                    </>
                                                )
                                            })}


                                        </ul>
                                    </div>

                                    <div className="flex flex-col space-y-5 mt-5">
                                        {departData.map((e: any, i: number) => {
                                            // console.log('departData', departData);
                                            return (
                                                <>
                                                    <div key={'departData' + i} className=" grid grid-cols-12 h-20 shadow-md ... rounded-xl hover:bg-stone-100">
                                                        <div className="grid col-span-8 xl:col-span-2 border-r-2 px-3">
                                                            <div className="flex items-center gap-4">
                                                                {e.AirlineCode == 'VJ' &&
                                                                    <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                                                                }
                                                                {e.AirlineCode == 'VN' &&
                                                                    <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                                                                }
                                                                {e.AirlineCode == 'QH' &&
                                                                    <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                                                                }
                                                                {e.AirlineCode == 'VU' &&
                                                                    <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                                                                }
                                                                <div className="font-medium dark:text-white">
                                                                    <div>{e.AirlineCode}</div>
                                                                    <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                                                                        <p>{e.FlightNumber}</p>
                                                                        <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                                                                    </div>
                                                                    <p className=" block xl:hidden text-xs">Từ: {format(new Date(e.StartDate), "HH:mm", { locale: vi })}, đến: {e.EndDate}</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" hidden xl:grid grid-cols-6 col-span-4 xl:col-span-7 border-r-2 p-3">
                                                            <div className=" col-span-6 xl:col-span-1 px-3">
                                                                <p className="text-center">{format(new Date(e.StartDate), "HH:mm", { locale: vi })}</p>
                                                                <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{e.StartPoint}</p>
                                                            </div>
                                                            <div className="col-span-6 xl:col-span-4">
                                                                <div className="flex flex-row space-x-3">
                                                                    <FaPlaneDeparture className="w-4 my-auto" />
                                                                    <div className="flex flex-col w-full space-y-2">
                                                                        <p className="text-center text-xs">{e.Duration + ' phút'}</p>
                                                                        <div className="border-dashed border-b-2 ..."></div>
                                                                        {e.Stops == 0 &&
                                                                            <p className="text-center text-xs">Bay thẳng</p>
                                                                        }
                                                                    </div>
                                                                    <FaPlaneArrival className="w-4 my-auto" />
                                                                </div>
                                                            </div>
                                                            <div className=" col-span-6 xl:col-span-1 px-3">
                                                                <p className="text-center">{format(new Date(e.EndDate), "HH:mm", { locale: vi })}</p>
                                                                <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{e.EndPoint}</p>
                                                            </div>

                                                        </div>
                                                        <div className="grid col-span-4 xl:col-span-3">
                                                            <div className="flex flex-col px-5 space-y-1">
                                                                {priceTax == true
                                                                    ?
                                                                    <h4 className="text-red-600 text-lg font-bold text-center">{e.TotalPrice.toLocaleString()}<span className=" text-xs">vnđ</span></h4>
                                                                    :
                                                                    <h4 className="text-red-600 text-lg font-bold text-center">{(e.TotalPrice - e.TaxAdult - e.TaxChild - e.TaxInfant - e.FeeAdult - e.FeeChild - e.FeeInfant).toLocaleString()} <span className=" text-xs">vnđ</span></h4>

                                                                }
                                                                <button onClick={(e) => chooseFlightDepartFn(e)} data-departureflightsession={e.FlightSession} type="button" className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            }



                            {checkOutStep == true &&
                                <div className="shadow-md ... rounded-xl hover:bg-stone-100 p-3 my-10 max-h-32">
                                    {
                                        typeOfTicket == 1 &&
                                        <>
                                            <p className=" text-end">Giá chiều đi: <strong className="text-red-600 text-lg font-bold text-center">{departData[0].TotalPrice.toLocaleString()}</strong><span className=" text-xs text-red-600">vnđ</span></p>
                                            <button
                                                onClick={() => setOrderStep(true)}
                                                type="button"
                                                className=" text-white bg-amber-600 min-w-full max-w-sm hover:bg-amber-200 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base h-12 my-auto">Điền thông tin đặt vé</button>
                                        </>
                                    }
                                    {/* {
                            typeOfTicket == 2 &&
                            <>
                                <p className=" text-end">Giá chiều đi: <strong className="text-red-600 text-lg font-bold text-center">{departData[0].TotalPrice.toLocaleString()}</strong><span className=" text-xs text-red-600">vnđ</span></p>
                                <p className=" text-end">Giá chiều về: <strong className="text-red-600 text-lg font-bold text-center">{returnData[0].TotalPrice.toLocaleString()}</strong><span className=" text-xs text-red-600">vnđ</span></p>
                                <button
                                    onClick={() => setOrderStep(true)}
                                    type="button"
                                    className=" text-white bg-amber-600 min-w-full max-w-sm hover:bg-amber-200 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base h-12 my-auto">Điền thông tin đặt vé</button>
                            </>
                        } */}

                                </div>
                            }

                        </div>


                    </div>
                </>

                :
                complete == false
                    ?
                    <div className=" mt-28 bg-white mx-auto rounded-3xl p-5">
                        <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto py-2">
                            {checkoutStep == 1 &&
                                <div className="grid col-span-12 xl:col-span-8">
                                    <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                        <div className=" text-start bg-red-500 py-3 rounded-sm">
                                            <h1 className="text-white mx-3 text-xl font-bold">Thông tin khách hàng</h1>
                                        </div>
                                        <DepartureBaggagesInfomation
                                            departureBaggages={departureBaggages}
                                            typeOfTicket={typeOfTicket}
                                            Adult={Adult}
                                            Children={Children}
                                            Infant={Infant}
                                            getListPassengers={getListPassengers}
                                        ></DepartureBaggagesInfomation>


                                    </div>
                                </div>
                            }
                            {checkoutStep == 2 &&
                                <>

                                    <div className="grid col-span-12 xl:col-span-8">
                                        <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                            <div className=" text-start bg-red-100 py-3">
                                                <h1 className="text-black mx-3 text-xl font-bold">Thông tin liên hệ, hóa đơn</h1>
                                            </div>
                                            <ContactAndTaxInfomation
                                                getContactAndTax={getContactAndTax}
                                            ></ContactAndTaxInfomation>
                                            {/* <div className=" flex flex-col justify-start ...">
                                                <div className=" grid grid-cols-6 gap-4 px-3">
                                                    <div className="col-span-2">
                                                        <label htmlFor="contactGender" className="block my-2 text-sm font-medium text-start">Giới tính</label>
                                                        <select id="contactGender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            <option value="male">Nam</option>
                                                            <option value="female">Nữ</option>
                                                        </select>
                                                    </div>
                                                    <div className=' col-span-4'>
                                                        <label htmlFor="contactName" className="block my-2 text-sm font-medium text-start">Họ và tên</label>
                                                        <input placeholder="Hoàng Văn Hải" type="text" id="contactNamefirst_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                    </div>
                                                </div>
                                                <div className=" grid grid-cols-6 gap-4 px-3">
                                                    <div className=' col-span-3'>
                                                        <label htmlFor="contactPhone" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                                                        <input placeholder="0912123123" type="text" id="contactPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                    </div>
                                                    <div className=' col-span-3'>
                                                        <label htmlFor="contactEmail" className="block my-2 text-sm font-medium text-start">Email</label>
                                                        <input placeholder="vanhai@gmail.com" type="text" id="contactEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center p-3">
                                                <input
                                                    onClick={(e) => showVat(e, 4)}
                                                    checked={showVatInfo == true}
                                                    id="checkedVAT" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkedVAT" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Xuất hóa đơn</label>
                                            </div> */}
                                            {/* {showVatInfo == true &&
                                                <div className=" flex flex-col justify-start ...">
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-3'>
                                                            <label htmlFor="companyName" className="block my-2 text-sm font-medium text-start">Tên công ty</label>
                                                            <input placeholder="Công ty TNHH MTV Hoàng Hải" type="text" id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-3'>
                                                            <label htmlFor="companyTAX" className="block my-2 text-sm font-medium text-start">Mã số thuế</label>
                                                            <input placeholder="8858191965" type="text" id="companyTAX" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-6 gap-4 px-3">
                                                        <div className=' col-span-6'>
                                                            <label htmlFor="companyAddress" className="block my-2 text-sm font-medium text-start">Địa chỉ</label>
                                                            <input placeholder="44 Lê Thái Tổ, phường Hàng Trống, Hoàn Kiếm, Hà Nội" type="text" id="companyAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>

                                                    </div>
                                                    <div className=" grid grid-cols-6 gap-4 px-3 mb-5">
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Người nhận hóa đơn</label>
                                                            <input placeholder="Hoàng Văn Hải" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Số điện thoại</label>
                                                            <input placeholder="09123123123" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                        <div className=' col-span-2'>
                                                            <label htmlFor="first_name" className="block my-2 text-sm font-medium text-start">Email nhận hóa đơn</label>
                                                            <input placeholder="hoanghai@gmail.com" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                        </div>
                                                    </div>

                                                </div>
                                            } */}

                                        </div>
                                    </div>
                                </>

                            }

                        </div>
                        <div className=" fixed top-24 right-5 bg-white grid col-span-12 xl:col-span-4 shadow-xl ... rounded-xl">
                            <div className=" flex flex-col space-y-5 p-5">
                                <div className="flex flex-col space-y-3">
                                    <h3>Thông tin đặt chỗ</h3>
                                    {typeOfTicket == 1 &&
                                        <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
                                            <p className=" text-xs text-end mb-2">Chiều đi</p>

                                            <div className="px-3">
                                                <div className="flex items-center gap-4">
                                                    {departData[0].AirlineCode == 'VJ' &&
                                                        <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                                                    }
                                                    {departData[0].AirlineCode == 'VN' &&
                                                        <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                                                    }
                                                    {departData[0].AirlineCode == 'QH' &&
                                                        <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                                                    }
                                                    {departData[0].AirlineCode == 'VU' &&
                                                        <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                                                    }
                                                    <div className="font-medium dark:text-white">
                                                        <div>{departData[0].AirlineCode}</div>
                                                        <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                                                            <p>{departData[0].FlightNumber}</p>
                                                            <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                                                        </div>
                                                        <p className=" block xl:hidden text-xs">Từ: {format(new Date(departData[0].StartDate), "HH:mm", { locale: vi })}, đến: {departData[0].EndDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" grid grid-cols-6 py-5">
                                                <div className=" col-span-6 xl:col-span-1 px-3">
                                                    <p className="text-center">{format(new Date(departData[0].StartDate), "HH:mm", { locale: vi })}</p>
                                                    <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departData[0].StartPoint}</p>
                                                </div>
                                                <div className="col-span-6 xl:col-span-4">
                                                    <div className="flex flex-row space-x-3">
                                                        <FaPlaneDeparture className="w-4 my-auto" />
                                                        <div className="flex flex-col w-full space-y-2">
                                                            <p className="text-center text-xs">{departData[0].Duration + ' phút'}</p>
                                                            <div className="border-dashed border-b-2 ..."></div>
                                                            {departData[0].Stops == 0 &&
                                                                <p className="text-center text-xs">Bay thẳng</p>
                                                            }
                                                        </div>
                                                        <FaPlaneArrival className="w-4 my-auto" />
                                                    </div>
                                                </div>
                                                <div className=" col-span-6 xl:col-span-1 px-3">
                                                    <p className="text-center">{format(new Date(departData[0].EndDate), "HH:mm", { locale: vi })}</p>
                                                    <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departData[0].EndPoint}</p>
                                                </div>


                                            </div>
                                        </div>
                                    }


                                    <div className="flex flex-col space-y-2 text-sm">
                                        <p className=" text-xs text-end">Thông tin thanh toán</p>
                                        {typeOfTicket == 1 &&
                                            <>
                                                <div className="flex flex-col space-y-2 text-sm">
                                                    <p className=" text-xs text-start">Chiều đi:</p>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Người lớn
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(departData[0].FeeAdult + departData[0].PriceAdult + departData[0].TaxAdult).toLocaleString()} x {Adult}) VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Trẻ em
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(departData[0].FeeChild + departData[0].PriceChild + departData[0].TaxChild).toLocaleString()} x {Children}) VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Em bé
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(departData[0].FeeInfant + departData[0].PriceInfant + departData[0].TaxInfant).toLocaleString()} x {Infant}) VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Hành lí bổ sung
                                                        </p>
                                                        <p className=" font-bold">
                                                            0 VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Tổng cộng
                                                        </p>
                                                        <p className=" font-bold">
                                                            {departData[0].TotalPrice.toLocaleString()} VNĐ
                                                        </p>
                                                    </div>
                                                </div>

                                            </>
                                        }


                                    </div>

                                    {/* <div className="flex flex-col">
                                        <button
                                            onClick={orderfn}
                                            type="button"
                                            className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Đặt vé</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" mt-28 bg-white mx-auto rounded-3xl p-5">
                        <div className=" flex flex-col max-w-7xl mx-auto py-2">
                            <p className="text-red-600">Chúc mừng quý khách đặt chỗ thành công!</p>
                            <p>Mã đặt chỗ của quý khách</p>
                            <p className="text-4xl">
                                {'completeData.Data.DepartureCode'}
                            </p>
                            <p>
                                {"Quý khách vui lòng thanh toán, đặt chỗ sẽ hết hạn nếu quý khách không thanh toán trước thời gian:" + completeData.exp_date}
                            </p>
                        </div>

                    </div>
            }
        </>


    )

}