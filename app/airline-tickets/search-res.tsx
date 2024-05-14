"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
import WeekCalendarDepart from "./week-calendar-depart";
import WeekCalendarReturn from "./week-calendar-return";
import airportOptions from "../_helper/airport-options";
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { useScreenshot } from 'use-react-screenshot';
import { toPng } from 'html-to-image';


export default function SearchResponse(props: any) {
    console.log('searchDataxxxxx', props.searchData);
    // let searchData = props.searchData

    const [departData, setDepartData] = useState<any[]>([])
    const [returnData, setReturnData] = useState<any[]>([])
    const [copyValue, setCopyValue] = useState()

    useEffect(() => {
        let x: any = []
        for (const key in props.searchData?.Data.DepartureFlights) {
            // console.log('key', key, ReturnFlights[key]);
            x.push(props.searchData?.Data.DepartureFlights[key])
        }
        setDepartData(x)

        let y: any = []
        for (const key in props.searchData?.Data.ReturnFlights) {
            y.push(props.searchData?.Data.ReturnFlights[key])
        }
        setReturnData(y)

        setTrip({
            from: findFrom?.label + ', ' + findFrom?.label + ' (' + findFrom?.value + ')',
            to: findTo?.label + ', ' + findTo?.label + ' (' + findTo?.value + ')'
        })
    }, [props.searchData])

    const DataSession = props.searchData?.Data.DataSession
    const DOMSearchFlights = props.searchData?.DOMSearchFlights
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
    const chooseFlightReturnFn = (e: any) => {
        const getFlightReturntId = e.target.getAttribute('data-returnFlightSession')
        console.log(getFlightReturntId);
        setChooseFlightReturn(getFlightReturntId)
        // console.log('departData', departData);
        const returnChoose = _.filter(returnData, { 'FlightSession': getFlightReturntId });
        console.log('returnChoose', returnChoose);

        setCheckOutStep(true)
        setReturnData(returnChoose)
        /* Call get Api */
        const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";
        const dataFight = {
            action: "DOMGetBaggages",
            dataSession: DataSession,
            departureFlightSession: chooseFlightDepartId,
            returnFlightSession: getFlightReturntId
        }
        console.log('chooseFlightReturnFn', dataFight);
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
                console.log("return getBaggage ...", data);
                setReturnBaggages(data.Data.ReturnBaggages)
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

        // console.log('listPassengers ...', listPassengers);

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
        const x: any = e.adultbaggages.concat(e.childbaggages).concat(e.infanbaggages)
        setListPassengers(x)
        setCheckoutStep(2)
    }

    const getContactAndTax = function (e: any) {
        console.log('getContactAndTax', e);
        setContactInfo(e.ContactInfo[0])
        setContactInfo(e.InvoiceInfo[0])
        orderfn()
    }

    let newArr: any = [];
    newArr.push(trip.from + "  " + trip.to + "   " + format(new Date(props.DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi }) + "\n");
    for (const item of departData) {
        newArr.push("      " + item.FlightNumber + "                   " + format(new Date(item.StartDate), "HH:mm", { locale: vi }) + "-" + format(new Date(item.EndDate), "HH:mm", { locale: vi }) + "                " + (priceTax == true ? item.TotalPrice.toLocaleString() : (item.TotalPrice - item.TaxAdult - item.TaxChild - item.TaxInfant - item.FeeAdult - item.FeeChild - item.FeeInfant).toLocaleString()) + "\n")
    }

    const ref = useRef(null)
    // const [image, takeScreenshot] = useScreenshot()
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { backgroundColor: 'white' })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'vemaybay.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    // Search
    // const search = ()=>{
    //     console.log('search...');
    // }
    return (
        <>
            {orderStep == false
                ?
                <>
                    <TopSearch
                        action={props.action}
                        ItineraryType={props.ItineraryType}
                        StartPoint={props.StartPoint}
                        EndPoint={props.EndPoint}
                        DepartureDate={props.DepartureDate}
                        ReturnDate={props.ReturnDate}
                        adult={Adult}
                        treEm={Children}
                        infant={Infant}
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
                                        <CopyToClipboard text={newArr.join("")}
                                            onCopy={() => alert('Copy thành công')}>
                                            <button className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Copy text</button>
                                        </CopyToClipboard>
                                        <button type="button" onClick={onButtonClick} className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Chụp ảnh</button>
                                        <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Xóa bộ lọc</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="button" onClick={orderfn} className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">order</button> */}

                        <div ref={ref} className="grid col-span-12 xl:col-span-9 content-start">
                            {
                                typeOfTicket == 1 &&
                                <div className="h-full">
                                    <div className=" text-sm max-h-52 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                        <div className=" text-start pt-2 bg-red-100">
                                            <h1 className="text-black mx-3 text-xl font-bold">{trip.from} - {trip.to}</h1>
                                            <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - đi ngày {format(new Date(props.DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                                        </div>
                                        <WeekCalendarDepart
                                            DepartureDate={props.DepartureDate}
                                            typeOfTicket={typeOfTicket}
                                            StartPoint={props.StartPoint}
                                            EndPoint={props.EndPoint}
                                            Adult={Adult}
                                            Children={Children}
                                            Infant={Infant}
                                        ></WeekCalendarDepart>
                                    </div>

                                    <div className="flex flex-col space-y-5 mt-5">
                                        {departData.length != 0
                                            ?
                                            departData.map((e: any, i: number) => {
                                                // console.log('departData....', e);
                                                return (
                                                    <>
                                                        <div key={'departData' + i} className=" flex flex-row w-full h-20 shadow-md ... rounded-xl hover:bg-stone-100">
                                                            <div className="grid col-span-2 xl:col-span-2 border-r-2 px-3">
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
                                                                        <div className=" flex flex-row xl:flex-col text-xs">
                                                                            <p>{e.FlightNumber}</p>
                                                                            <p className=" block xl:hidden">- 02h 10m</p>
                                                                        </div>
                                                                        <p className=" block xl:hidden text-xs opacity-70">Từ: {format(new Date(e.StartDate), "HH:mm", { locale: vi })}, đến: {format(new Date(e.EndDate), "HH:mm", { locale: vi })}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" hidden xl:grid grid-cols-6 grow border-r-2 p-3">
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
                                            })
                                            :
                                            <p className="text-center">Không có chuyến nào, vui lòng tìm lại với điều kiện khác</p>
                                        }
                                    </div>
                                </div>
                            }

                            {
                                typeOfTicket == 2 &&
                                <>
                                    <div className="h-full">
                                        <div className=" text-sm max-h-52 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                            <div className=" text-start py-2 bg-red-100">
                                                <p className="mx-3  text-xs italic">Chiều đi</p>
                                                <h1 className="text-black mx-3 text-xl font-bold">{trip.from} - {trip.to}</h1>
                                                <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - đi ngày {format(new Date(props.DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                                            </div>
                                            <WeekCalendarDepart
                                                DepartureDate={props.DepartureDate}
                                                typeOfTicket={typeOfTicket}
                                                StartPoint={props.StartPoint}
                                                EndPoint={props.EndPoint}
                                                Adult={Adult}
                                                Children={Children}
                                                Infant={Infant}
                                            ></WeekCalendarDepart>
                                        </div>

                                        <div className="flex flex-col space-y-5 mt-5">
                                            {departData.length != 0
                                                ?
                                                departData.map((e: any, i: number) => {
                                                    // console.log('departData....', e);
                                                    return (
                                                        <>
                                                            <div key={'departData' + i} className=" flex flex-row w-full h-20 shadow-md ... rounded-xl hover:bg-stone-100">
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
                                                                                <p className=" block xl:hidden">- 02h 10m</p>
                                                                            </div>
                                                                            <p className=" block xl:hidden text-xs">Từ: {format(new Date(e.StartDate), "HH:mm", { locale: vi })}, đến: {format(new Date(e.EndDate), "HH:mm", { locale: vi })}</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=" hidden xl:grid grid-cols-6 grow xl:col-span-7 border-r-2 p-3">
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
                                                })
                                                :
                                                <p className="text-center">Không có chuyến nào, vui lòng tìm lại với điều kiện khác</p>
                                            }

                                        </div>
                                    </div>

                                    <div className="h-full mt-5">
                                        <div className=" text-sm max-h-56 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                            <div className=" text-start py-2 bg-blue-200">
                                                <p className="mx-3  text-xs italic">Chiều về</p>
                                                <h1 className="text-black mx-3 text-xl font-bold">{trip.to} - {trip.from}</h1>
                                                <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - về ngày {format(new Date(props.ReturnDate || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                                            </div>
                                            <WeekCalendarReturn
                                                DepartureDate={props.DepartureDate}
                                                ReturnDate={props.ReturnDate || format(new Date(Date.now()), "MM/dd/yyyy", { locale: vi })}
                                                typeOfTicket={typeOfTicket}
                                                StartPoint={props.StartPoint}
                                                EndPoint={props.EndPoint}
                                                Adult={Adult}
                                                Children={Children}
                                                Infant={Infant}
                                            ></WeekCalendarReturn>
                                        </div>

                                        <div className="flex flex-col space-y-5 mt-5">

                                            {returnData.length != 0
                                                ?
                                                returnData.map((e: any, i: number) => {
                                                    console.log('returnData....', e);
                                                    return (
                                                        <>
                                                            <div key={'returnData' + i} className=" flex flex-row w-full h-20 shadow-md ... rounded-xl hover:bg-stone-100">
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
                                                                                <p className=" block xl:hidden">- 02h 10m</p>
                                                                            </div>
                                                                            <p className=" block xl:hidden text-xs">Từ: {format(new Date(e.StartDate), "HH:mm", { locale: vi })}, đến: {format(new Date(e.EndDate), "HH:mm", { locale: vi })}</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=" hidden xl:grid grid-cols-6 grow xl:col-span-7 border-r-2 p-3">
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
                                                                        <button
                                                                            onClick={(e) => chooseFlightReturnFn(e)}
                                                                            data-returnFlightSession={e.FlightSession}
                                                                            type="button" className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })
                                                :
                                                <p className="text-center">Không có chuyến nào, vui lòng tìm lại với điều kiện khác</p>
                                            }

                                        </div>
                                    </div>
                                </>

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
                                    {
                                        typeOfTicket == 2 &&
                                        <>
                                            <p className=" text-end">Giá chiều đi: <strong className="text-red-600 text-lg font-bold text-center">{departData[0].TotalPrice.toLocaleString()}</strong><span className=" text-xs text-red-600">vnđ</span></p>
                                            <p className=" text-end">Giá chiều về: <strong className="text-red-600 text-lg font-bold text-center">{returnData[0].TotalPrice.toLocaleString()}</strong><span className=" text-xs text-red-600">vnđ</span></p>
                                            <button
                                                onClick={() => setOrderStep(true)}
                                                type="button"
                                                className=" text-white bg-amber-600 min-w-full max-w-sm hover:bg-amber-200 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base h-12 my-auto">Điền thông tin đặt vé</button>
                                        </>
                                    }

                                </div>
                            }

                        </div>
                    </div>
                </>

                :
                complete == false
                    ?
                    <div className=" md:mt-24 bg-white mx-auto rounded-3xl md:p-5">
                        <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto md:py-2">
                            {checkoutStep == 1 &&
                                <div className="grid col-span-12 xl:col-span-8 md:my-16">
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

                                    <div className="grid col-span-12 xl:col-span-8 md:my-16">
                                        <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                            <div className=" text-start bg-red-100 py-3">
                                                <h1 className="text-black mx-3 text-xl font-bold">Thông tin liên hệ, hóa đơn</h1>
                                            </div>
                                            <ContactAndTaxInfomation
                                                getContactAndTax={getContactAndTax}
                                            ></ContactAndTaxInfomation>

                                        </div>
                                    </div>
                                </>

                            }

                        </div>
                        <div className=" hidden  fixed top-24 right-5 bg-white xl:grid col-span-12 xl:col-span-4 shadow-xl ... rounded-xl">
                            <div className=" flex flex-col space-y-5 p-5">
                                <div className="flex flex-col space-y-3">
                                    <h3>Thông tin đặt chỗ</h3>
                                    {typeOfTicket == 1
                                        ?
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
                                        :
                                        <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
                                            <div>
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
                                            <div>
                                                <p className=" text-xs text-end mb-2">Chiều về</p>
                                                <div className="px-3">
                                                    <div className="flex items-center gap-4">
                                                        {returnData[0].AirlineCode == 'VJ' &&
                                                            <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                                                        }
                                                        {returnData[0].AirlineCode == 'VN' &&
                                                            <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                                                        }
                                                        {returnData[0].AirlineCode == 'QH' &&
                                                            <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                                                        }
                                                        {returnData[0].AirlineCode == 'VU' &&
                                                            <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                                                        }
                                                        <div className="font-medium dark:text-white">
                                                            <div>{returnData[0].AirlineCode}</div>
                                                            <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                                                                <p>{returnData[0].FlightNumber}</p>
                                                                <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                                                            </div>
                                                            <p className=" block xl:hidden text-xs">Từ: {format(new Date(returnData[0].StartDate), "HH:mm", { locale: vi })}, đến: {returnData[0].EndDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" grid grid-cols-6 py-5">
                                                    <div className=" col-span-6 xl:col-span-1 px-3">
                                                        <p className="text-center">{format(new Date(returnData[0].StartDate), "HH:mm", { locale: vi })}</p>
                                                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{returnData[0].StartPoint}</p>
                                                    </div>
                                                    <div className="col-span-6 xl:col-span-4">
                                                        <div className="flex flex-row space-x-3">
                                                            <FaPlaneDeparture className="w-4 my-auto" />
                                                            <div className="flex flex-col w-full space-y-2">
                                                                <p className="text-center text-xs">{returnData[0].Duration + ' phút'}</p>
                                                                <div className="border-dashed border-b-2 ..."></div>
                                                                {returnData[0].Stops == 0 &&
                                                                    <p className="text-center text-xs">Bay thẳng</p>
                                                                }
                                                            </div>
                                                            <FaPlaneArrival className="w-4 my-auto" />
                                                        </div>
                                                    </div>
                                                    <div className=" col-span-6 xl:col-span-1 px-3">
                                                        <p className="text-center">{format(new Date(returnData[0].EndDate), "HH:mm", { locale: vi })}</p>
                                                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{returnData[0].EndPoint}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }


                                    <div className="flex flex-col space-y-2 text-sm">
                                        <p className=" text-xs text-end">Thông tin thanh toán</p>
                                        {typeOfTicket == 1
                                            ?
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
                                                        <p className="font-bold">
                                                            Tổng chiều đi
                                                        </p>
                                                        <p className=" font-bold">
                                                            {departData[0].TotalPrice.toLocaleString()} VNĐ
                                                        </p>
                                                    </div>
                                                </div>

                                            </>
                                            :
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
                                                        <p className="font-bold">
                                                            Tổng chiều đi
                                                        </p>
                                                        <p className=" font-bold">
                                                            {departData[0].TotalPrice.toLocaleString()} VNĐ
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2 text-sm">
                                                    <p className=" text-xs text-start">Chiều về:</p>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Người lớn
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(returnData[0].FeeAdult + returnData[0].PriceAdult + returnData[0].TaxAdult).toLocaleString()} x {Adult}) VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Trẻ em
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(returnData[0].FeeChild + returnData[0].PriceChild + returnData[0].TaxChild).toLocaleString()} x {Children}) VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p>
                                                            Em bé
                                                        </p>
                                                        <p className=" font-bold">
                                                            ({(returnData[0].FeeInfant + returnData[0].PriceInfant + returnData[0].TaxInfant).toLocaleString()} x {Infant}) VNĐ
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
                                                    <div className=" text-xl ml-5 flex flex-row justify-between ...">
                                                        <p className="font-bold">
                                                            Tổng chiều về
                                                        </p>
                                                        <p className=" font-bold">
                                                            {returnData[0].TotalPrice.toLocaleString()} VNĐ
                                                        </p>
                                                    </div>
                                                    <div className=" ml-5 flex flex-row justify-between ...">
                                                        <p className="font-black text-xl text-red-700">
                                                            Tổng cộng hai chiều
                                                        </p>
                                                        <p className=" font-black text-xl text-red-700">
                                                            {(returnData[0].TotalPrice + departData[0].TotalPrice).toLocaleString()} VNĐ
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
                    <div className=" md:mt-24 bg-white mx-auto rounded-3xl md:p-5">
                        <div className=" flex flex-col max-w-7xl mx-auto py-2">

                            {completeData.Data.DepartureCode != ""
                                &&
                                completeData.Data.DepartureCode != null
                                ?
                                <>
                                    <p className="text-red-600 md:my-5 text-xl">Chúc mừng quý khách đặt chỗ thành công!</p>
                                    <p className="font-bold">1. Mã đặt chỗ của quý khách</p>
                                    <p className="text-4xl my-10">
                                        {completeData.Data.DepartureCode}
                                    </p>
                                </>
                                :
                                <>
                                    <p className="text-red-600 my-16">Có lỗi khi đặt chỗ tới nhà cung cấp vui lòng thử lại !</p>
                                </>
                            }

                            {completeData.Data.DepartureCode != "" &&
                                completeData.Data.DepartureCode != null
                                &&
                                <>
                                    <p>
                                        Quý khách vui lòng thanh toán số tiền là: <strong className="text-red-600 font-bold">{completeData.current_price_cart_row.toLocaleString()}</strong>  vnd
                                    </p>
                                    <p>
                                        {`Đặt chỗ sẽ hết hạn nếu quý khách không thanh toán trước thời gian:` + completeData.exp_date}
                                    </p>
                                    <div className="flex flex-col space-y-3">
                                        <h3 className="mt-10 font-bold">2. Chi tiết đặt chỗ</h3>
                                        {typeOfTicket == 1
                                            ?
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
                                            :
                                            <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
                                                <div>
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
                                                <div>
                                                    <p className=" text-xs text-end mb-2">Chiều về</p>
                                                    <div className="px-3">
                                                        <div className="flex items-center gap-4">
                                                            {returnData[0].AirlineCode == 'VJ' &&
                                                                <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                                                            }
                                                            {returnData[0].AirlineCode == 'VN' &&
                                                                <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                                                            }
                                                            {returnData[0].AirlineCode == 'QH' &&
                                                                <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                                                            }
                                                            {returnData[0].AirlineCode == 'VU' &&
                                                                <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                                                            }
                                                            <div className="font-medium dark:text-white">
                                                                <div>{returnData[0].AirlineCode}</div>
                                                                <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                                                                    <p>{returnData[0].FlightNumber}</p>
                                                                    <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                                                                </div>
                                                                <p className=" block xl:hidden text-xs">Từ: {format(new Date(returnData[0].StartDate), "HH:mm", { locale: vi })}, đến: {returnData[0].EndDate}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" grid grid-cols-6 py-5">
                                                        <div className=" col-span-6 xl:col-span-1 px-3">
                                                            <p className="text-center">{format(new Date(returnData[0].StartDate), "HH:mm", { locale: vi })}</p>
                                                            <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{returnData[0].StartPoint}</p>
                                                        </div>
                                                        <div className="col-span-6 xl:col-span-4">
                                                            <div className="flex flex-row space-x-3">
                                                                <FaPlaneDeparture className="w-4 my-auto" />
                                                                <div className="flex flex-col w-full space-y-2">
                                                                    <p className="text-center text-xs">{returnData[0].Duration + ' phút'}</p>
                                                                    <div className="border-dashed border-b-2 ..."></div>
                                                                    {returnData[0].Stops == 0 &&
                                                                        <p className="text-center text-xs">Bay thẳng</p>
                                                                    }
                                                                </div>
                                                                <FaPlaneArrival className="w-4 my-auto" />
                                                            </div>
                                                        </div>
                                                        <div className=" col-span-6 xl:col-span-1 px-3">
                                                            <p className="text-center">{format(new Date(returnData[0].EndDate), "HH:mm", { locale: vi })}</p>
                                                            <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{returnData[0].EndPoint}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        }


                                        <div className="flex flex-col space-y-2 text-sm">
                                            <p className=" text-xs text-end">Thông tin thanh toán</p>
                                            {typeOfTicket == 1
                                                ?
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
                                                        <div className=" text-xl ml-5 flex flex-row justify-between ...">
                                                            <p className="font-bold">
                                                                Tổng chiều đi
                                                            </p>
                                                            <p className=" font-bold">
                                                                {departData[0].TotalPrice.toLocaleString()} VNĐ
                                                            </p>
                                                        </div>
                                                    </div>

                                                </>
                                                :
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
                                                        <div className=" text-xl ml-5 flex flex-row justify-between ...">
                                                            <p className="font-bold">
                                                                Tổng chiều đi
                                                            </p>
                                                            <p className=" font-bold">
                                                                {departData[0].TotalPrice.toLocaleString()} VNĐ
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2 text-sm">
                                                        <p className=" text-xs text-start">Chiều về:</p>
                                                        <div className=" ml-5 flex flex-row justify-between ...">
                                                            <p>
                                                                Người lớn
                                                            </p>
                                                            <p className=" font-bold">
                                                                ({(returnData[0].FeeAdult + returnData[0].PriceAdult + returnData[0].TaxAdult).toLocaleString()} x {Adult}) VNĐ
                                                            </p>
                                                        </div>
                                                        <div className=" ml-5 flex flex-row justify-between ...">
                                                            <p>
                                                                Trẻ em
                                                            </p>
                                                            <p className=" font-bold">
                                                                ({(returnData[0].FeeChild + returnData[0].PriceChild + returnData[0].TaxChild).toLocaleString()} x {Children}) VNĐ
                                                            </p>
                                                        </div>
                                                        <div className=" ml-5 flex flex-row justify-between ...">
                                                            <p>
                                                                Em bé
                                                            </p>
                                                            <p className=" font-bold">
                                                                ({(returnData[0].FeeInfant + returnData[0].PriceInfant + returnData[0].TaxInfant).toLocaleString()} x {Infant}) VNĐ
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
                                                        <div className=" text-xl ml-5 flex flex-row justify-between ...">
                                                            <p className="font-bold">
                                                                Tổng chiều về
                                                            </p>
                                                            <p className=" font-bold">
                                                                {returnData[0].TotalPrice.toLocaleString()} VNĐ
                                                            </p>
                                                        </div>
                                                        <div className=" ml-5 flex flex-row justify-between ...">
                                                            <p className="font-black text-red-700">
                                                                Tổng cộng hai chiều
                                                            </p>
                                                            <p className=" font-black text-red-700">
                                                                {(returnData[0].TotalPrice + departData[0].TotalPrice).toLocaleString()} VNĐ
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
                                </>
                            }

                        </div>

                    </div>
            }
        </>


    )

}