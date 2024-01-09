"use client";
import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck, FaBullseye } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { da, vi } from 'date-fns/locale';
import Notfound from "./notfound";
import Searching from "./search";
var _ = require('lodash');

export default function AirLineTicket({ params }: { params: { slug: string } }) {
  const router = useRouter()

  let searchParams = useSearchParams()
  // console.log('searchParams', searchParams.get('a'));
  const itineraryType = searchParams.get('t') || '2'
  const adult = searchParams.get('ad') || '1'
  const children = searchParams.get('ch') || '0'
  const infant = searchParams.get('ba') || '0'

  const dataUrl = {
    action: searchParams.get('a'),
    ItineraryType: itineraryType,
    StartPoint: searchParams.get('sp'),
    EndPoint: searchParams.get('ep'),
    DepartureDate: format(new Date(searchParams.get('dp') || Date.now()), "MM/dd/yyyy", { locale: vi }),
    ReturnDate: format(new Date(searchParams.get('rd') || Date.now()), "MM/dd/yyyy", { locale: vi }),
    Adult: adult,
    Children: children,
    Infant: infant
  };
  console.log('searchParams', dataUrl);


  const [departData, setDepartData] = useState<any>([])
  const [returnData, setReturnData] = useState<any>([])


  const [passenger, setPassenger] = useState({
    Adult: searchParams.get('ad'),
    Children: searchParams.get('ch'),
    Infant: searchParams.get('ba')
  })
  useEffect(() => {
    console.log('useEffect ...');
    const findFrom: any = airportOptions.find(({ value }) => value === searchParams.get('sp'))
    const findTo: any = airportOptions.find(({ value }) => value === searchParams.get('ep'))
    setTrip({
      from: findFrom?.label + ', ' + findFrom?.label + ' (' + findFrom?.value + ')',
      to: findTo?.label + ', ' + findTo?.label + ' (' + findTo?.value + ')'
    })
    setDepartData([])
    setReturnData([])
    setSearchStatus(true)

    const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";

    let rawData = `{\r\n    \"action\": \"` + dataUrl.action + `\",\r\n    \"ItineraryType\": ` + dataUrl.ItineraryType + `,\r\n    \"StartPoint\": \"` + dataUrl.StartPoint + `\",\r\n    \"EndPoint\": \"` + dataUrl.EndPoint + `\",\r\n    \"DepartureDate\": \"` + format(new Date(dataUrl.DepartureDate), "dd/MM/yyyy", { locale: vi }) + `\",\r\n    \"ReturnDate\": \"` + format(new Date(dataUrl.ReturnDate), "dd/MM/yyyy", { locale: vi }) + `\",\r\n    \"Adult\": ` + dataUrl.Adult + `,\r\n    \"Children\": ` + dataUrl.Children + `,\r\n    \"Infant\": ` + dataUrl.Infant + `\r\n}`
    // console.log('data', dataUrl);
    const search = async () => {
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


        if (data.Data) {
          let departData = []
          for (const key in data.Data.DepartureFlights) {
            // console.log('key', key, ReturnFlights[key]);
            departData.push(data.Data.DepartureFlights[key])
          }
          let returnData = []
          for (const key in data.Data.ReturnFlights) {
            // console.log('key', key, ReturnFlights[key]);
            returnData.push(data.Data.ReturnFlights[key])
          }
          setDepartData(departData)
          setReturnData(returnData)
          setSearchStatus(false)
          setNotFound(false)
        } else {
          setSearchStatus(false)
          setNotFound(true)
        }
        /* order */
        setOrderDataBefore(
          {
            action: 'DOMMakeReservation',
            action_type: 1,
            dataSession: data.Data.DataSession,
            SBAY_data_search: '',
            departureFlight: data.Data.DepartureFlights,
            returnFlight: data.Data.ReturnFlights,
            DOMSearchFlights: data.DOMSearchFlights,
            DOMGetBaggages: "",
          }
        )
      }
    }
    search()

  }, [
    dataUrl.ItineraryType,
    dataUrl.StartPoint,
    dataUrl.EndPoint,
    dataUrl.DepartureDate,
    dataUrl.ReturnDate,
    dataUrl.Adult,
    dataUrl.Children,
    dataUrl.Infant,
  ])

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

  const findFrom: any = airportOptions.find(({ value }) => value === searchParams.get('sp'))
  console.log('findFrom', findFrom);
  const findTo: any = airportOptions.find(({ value }) => value === searchParams.get('ep'))
  // console.log('findFrom', findFrom);
  // console.log({
  //   from: findFrom?.label,
  //   to: findTo?.label
  // });
  const [trip, setTrip] = useState<any>({
    from: findFrom?.label + ', ' + findFrom?.label + ' (' + findFrom?.value + ')',
    to: findTo?.label + ', ' + findTo?.label + ' (' + findTo?.value + ')'
  })

  /* Form search */
  const defaultDepart = findFrom
  const defaultReturn = findTo

  const [defaultDepartTime, setDefaultDepartTime] = useState(format(new Date(dataUrl.DepartureDate), 'yyyy-MM-dd', { locale: vi }))
  const [defaultReturnTime, setDefaultReturnTime] = useState(format(new Date(dataUrl.ReturnDate), 'yyyy-MM-dd', { locale: vi }))
  const [minDate, setMinDate] = useState(format(addDays(new Date(), 0), 'yyyy-MM-dd', { locale: vi }))
  const [maxDate, setMaxDate] = useState(format(addDays(new Date(), 365), 'yyyy-MM-dd', { locale: vi }))
  /* Time choose */
  const [typeOfTicket, setTypeOfTicket] = useState<number>(parseInt(itineraryType))
  /* Select depart */
  const [selectedDepartAirport, setSelectedDepartAirport] = useState(defaultDepart.value);
  const onChangeDepart = (e: any) => {
    // console.log('e', e);
    setSelectedDepartAirport(e.value)
  }
  /* Select return */
  const [selectedReturnAirport, setSelectedReturnAirport] = useState(defaultReturn.value);
  const onChangeReturn = (e: any) => {
    // console.log('e', e);
    setSelectedReturnAirport(e.value)
  }
  /* Time choose */
  const [departTime, setDepartTime] = useState(defaultDepartTime)
  const [returnTime, setReturnTime] = useState(defaultReturnTime)
  /* Passengers choose */
  const [Adult, setAdult] = useState(parseInt(dataUrl.Adult))
  const [Children, setChildren] = useState(parseInt(dataUrl.Children))
  const [Infant, setInfant] = useState(parseInt(dataUrl.Infant))

  /*  */
  const [searchStatus, setSearchStatus] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const searchfn = async () => {
    const data = {
      action: 'DOMSearchFlights',
      ItineraryType: typeOfTicket,
      StartPoint: selectedDepartAirport,
      EndPoint: selectedReturnAirport,
      DepartureDate: format(new Date(departTime), "MM/dd/yyyy", { locale: vi }),
      ReturnDate: format(new Date(returnTime), "MM/dd/yyyy", { locale: vi }),
      Adult: Adult,
      Children: Children,
      Infant: Infant
    };
    router.push('/airline-tickets?a=DOMSearchFlights&t=' + data.ItineraryType + '&sp=' + data.StartPoint + '&ep=' + data.EndPoint + '&dp=' + data.DepartureDate + '&rd=' + data.ReturnDate + '&ad=' + data.Adult + '&ch=' + data.Children + '&ba=' + data.Infant)
  }

  const [show, setShow] = useState(false)
  const weekChooseDepart =
    [
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), -2), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), -2), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), -2), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), -1), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), -1), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), -1), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), 0), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), 0), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), 0), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), 1), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), 1), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), 2), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), 3), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), 3), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), 3), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.DepartureDate), 4), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.DepartureDate), 4), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.DepartureDate), 4), "MM/dd/yyyy", { locale: vi }),
      },
    ]
  const weekChooseReturn =
    [
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), -2), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), -2), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), -2), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), -1), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), -1), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), -1), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), 0), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), 0), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), 0), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), 1), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), 1), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), 2), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), 3), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), 3), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), 3), "MM/dd/yyyy", { locale: vi }),
      },
      {
        dayOfWeek: format(addDays(new Date(dataUrl.ReturnDate), 4), 'EEEE', { locale: vi }),
        date: format(addDays(new Date(dataUrl.ReturnDate), 4), 'dd/MM', { locale: vi }),
        dateStandar: format(addDays(new Date(dataUrl.ReturnDate), 4), "MM/dd/yyyy", { locale: vi }),
      },
    ]
  const searchInDateDepart = function (e: any) {
    // console.log(e.target.getAttribute('data-dateStandar'));
    const dateChoose = e.target.getAttribute('data-dateStandar')
    router.push('/airline-tickets?a=DOMSearchFlights&t=' + typeOfTicket + '&sp=' + selectedDepartAirport + '&ep=' + selectedReturnAirport + '&dp=' + dateChoose + '&rd=' + format(addDays(new Date(dateChoose), 1), 'MM/dd/yyyy', { locale: vi }) + '&ad=' + Adult + '&ch=' + Children + '&ba=' + Infant)
  }

  const searchInDateReturn = function (e: any) {
    // console.log(e.target.getAttribute('data-dateStandar'));
    const dateChoose = e.target.getAttribute('data-dateStandar')
    router.push('/airline-tickets?a=DOMSearchFlights&t=' + typeOfTicket + '&sp=' + selectedDepartAirport + '&ep=' + selectedReturnAirport + '&dp=' + format(new Date(departTime), "MM/dd/yyyy", { locale: vi }) + '&rd=' + dateChoose + '&ad=' + Adult + '&ch=' + Children + '&ba=' + Infant)
  }

  /* Sort */
  const [priceTax, setPriceTax] = useState(true)
  const [sortBy, setSortBy] = useState(3) // 1: giá, 2: thời gian đi, 3: hãng a đến z

  const sortFn = (e: any) => {
    // setDepartData([])
    // setReturnData([])
    console.log('departData', departData);
    // console.log('returnData', returnData);
    if (e == 1) {
      const de = [...departData].sort((a: any, b: any) => a.TotalPrice - b.TotalPrice);
      console.log('de', de);
      const re = [...returnData].sort((a: any, b: any) => a.TotalPrice - b.TotalPrice);
      setDepartData(de)
      setReturnData(re)
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
      const re = [...returnData].sort((a, b) => {
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
      setDepartData(de)
      setReturnData(re)
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
      const re = [...returnData].sort((a, b) => {
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
      setDepartData(de)
      setReturnData(re)

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

  /* Order */
  const [orderDataBefore, setOrderDataBefore] = useState(
    {
      action: 'DOMMakeReservation',
      action_type: 1,
      dataSession: '',
      SBAY_data_search: '',
      departureFlight: '',
      returnFlight: '',
      DOMSearchFlights: '',
      DOMGetBaggages: '',
    }
  )
  const [chooseFlightDepartId, setChooseFlightDepartId] = useState('')
  const [chooseFlightReturn, setChooseFlightReturn] = useState('')
  const [departChooseData, setDepartChooseData] = useState<any>([
    {
      "StartPoint": "HAN",
      "EndPoint": "SGN",
      "FlightSession": "25ad6af895c34afcb997813488b0a180",
      "FlightNumber": "VU787",
      "AirlineCode": "VU",
      "StartDate": "2024-01-08T20:55:00",
      "EndDate": "2024-01-08T23:10:00",
      "Stops": 0,
      "Duration": 135,
      "PriceAdult": 1348000,
      "PriceChild": 1348000,
      "PriceInfant": 162000,
      "FeeAdult": 570000,
      "FeeChild": 510000,
      "FeeInfant": 0,
      "TaxAdult": 143840,
      "TaxChild": 143840,
      "TaxInfant": 0,
      "TotalPrice": 4225680,
      "ServiceFee": 0,
      "IssueFee": 0,
      "SeatRemaining": 3,
      "ListSegment": [
        {
          "AirlineCode": "VU",
          "StartDate": "2024-01-08T20:55:00",
          "EndDate": "2024-01-08T23:10:00",
          "StartPoint": "HAN",
          "EndPoint": "SGN",
          "FlightNumber": "VU787",
          "Plane": "Airbus A321 CEO",
          "FlightTime": 135,
          "Class": "ECONOMY-REFUNDABLE"
        }
      ],
      "LastTkDate": "2024-01-08T14:19:32.5314204+07:00",
      "Class": "ECONOMY-REFUNDABLE"
    }
  ])

  const chooseFlightDepartFn = (e: any) => {
    const getFlightDepartId = e.target.getAttribute('data-departureFlightSession')
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
      dataSession: orderDataBefore.dataSession,
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
      dataSession: orderDataBefore.dataSession,
      departureFlightSession: chooseFlightDepartId,
      returnFlightSession: getFlightReturntId
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
        console.log("return getBaggage ...", data);
      }
    }
    getBaggage()
  }
  const [checkOutStep, setCheckOutStep] = useState(false)
  const [orderStep, setOrderStep] = useState(false)
  /* Order */
  const orderfn = () => {
    console.log('đặt chuyến bay ...');

    const orderData = {
      action: 'DOMMakeReservation',
      action_type: 1,
      dataSession: orderDataBefore.dataSession,
      departureFlightSession: chooseFlightDepartId,
      returnFlightSession: chooseFlightReturn,
      ListPassengers: [{
        "FirstName": "CUC",
        "LastName": "CU",
        "Type": "ADT",
        "Gender": "1",
        "Birthday": "",
        "Phone": "0123123123",
        "Email": "a@123.com",
        "BaggageDeparture": "15",
        "BaggageReturn": ""
      }],
      ContactInfo: {
        "Gender": "1",
        "FirstName": "Bla",
        "LastName": "bla",
        "Phone": "0123123123",
        "Email": "a@123.com",
        "Address": "123",
        "Company": "Sbay",
        "Note": "123"
      },
      InvoiceInfo: {
        "company": "abc123",
        "address": "123123",
        "city": "123123",
        "mst": "123131321321",
        "receiver": "12313213213213",
        "email": "123@123.com"
      },
      SBAY_data_search: orderDataBefore.SBAY_data_search,
      departureFlight: orderDataBefore.departureFlight,
      returnFlight: orderDataBefore.returnFlight,
      DOMSearchFlights: orderDataBefore.DOMSearchFlights,
      DOMGetBaggages: orderDataBefore.DOMGetBaggages,
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
      gia_chieu_ve: ''
    }
  }
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
  return (
    <>
      {orderStep == false &&
        <div className=" mt-32 bg-white mx-auto rounded-3xl p-5">
          <div className="flex bg-amber-500 rounded-xl min-h-max flex-col max-w-7xl mx-auto justify-between">
            <div className=" flex flex-row space-x-2 p-3">
              <div className="flex items-center">
                <input id="typeOfTicket-radio-1" onChange={() => { setTypeOfTicket(1) }} type="radio" checked={typeOfTicket == 1} name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="typeOfTicket-radio-1" className="ms-2 text-sm font-medium text-white">Một chiều</label>
              </div>
              <div className="flex items-center">
                <input id="typeOfTicket-radio-2" onChange={() => { setTypeOfTicket(2) }} type="radio" checked={typeOfTicket == 2} name="typeOfTicket-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="typeOfTicket-radio-2" className="ms-2 text-sm font-medium text-white">Khứ hồi</label>
              </div>
            </div>
            <div className=" grid grid-cols-12 my-auto">
              <div className=" col-span-12 xl:col-span-4 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 mb-5 justify-between ...">
                <div className=" flex flex-col space-y-1 w-full">
                  <div className=' flex flex-row'>
                    <FaPlaneDeparture className="mr-1 w-3 mt-0.5 text-white" />
                    <label htmlFor="from" className="block text-sm font-medium text-white dark:text-white">Từ</label>
                  </div>
                  <Select
                    id="from"
                    placeholder="Nơi đi"
                    options={airportOptions}
                    defaultValue={defaultDepart}
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
                    className="w-full " />
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
                    defaultValue={defaultReturn}
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
                    className="w-full" />
                </div>
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
                    max={maxDate} />            </div>
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
              </div>

              <div className='relative col-span-6 xl:col-span-2 px-3 flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between ...'>

                <div className=' col-span-4'>
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
                  onClick={searchfn}
                  type="button"
                  className="text-white mb-5 bg-blue-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10">Tìm kiếm</button>
              </div>
            </div>
          </div>

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
                      <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - đi ngày {format(new Date(searchParams.get('dp') || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                    </div>
                    <ul className="flex flex-row justify-between ...">
                      {weekChooseDepart.map((e: any, i: number) => {
                        // console.log('here ...', format(new Date(dataUrl.DepartureDate), "dd/MM", { locale: vi }), format(new Date(e.dateStandar), "dd/MM", { locale: vi }))
                        return (
                          <>
                            {
                              format(new Date(dataUrl.DepartureDate), "dd/MM", { locale: vi }) == e.date
                                ?
                                <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-600">
                                  <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg text-red-600">
                                    {e.dayOfWeek} <br />
                                    {e.date}</button>
                                </li>
                                :
                                <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-100">
                                  <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                    {e.dayOfWeek} <br />
                                    {e.date}</button>
                                </li>
                            }
                          </>
                        )
                      })}


                    </ul>
                  </div>

                  {searchStatus == false ?
                    <>
                      <div className="flex flex-col space-y-5 mt-5">
                        {departData.map((e: any, i: number) => {
                          // console.log('departData', departData);
                          return (
                            <>
                              <div className=" grid grid-cols-12 h-20 shadow-md ... rounded-xl hover:bg-stone-100">
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
                                    <button onClick={(e) => chooseFlightDepartFn(e)} data-departureFlightSession={e.FlightSession} type="button" className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>

                    </>

                    :
                    <Searching></Searching>
                  }
                  {notFound == true &&
                    <Notfound></Notfound>
                  }
                </div>
              }

              {
                typeOfTicket == 2 &&
                <>
                  {/* Chiều đi */}
                  <div>
                    <div className=" text-sm max-h-36 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                      <div className=" text-start pt-2 bg-red-100">
                        <h1 className="text-black mx-3 text-xl font-bold">{trip.from} - {trip.to}</h1>
                        <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - đi ngày {format(new Date(searchParams.get('dp') || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                      </div>
                      <ul className="flex flex-row justify-between ...">
                        {weekChooseDepart.map((e: any, i: number) => {
                          // console.log('here ...', format(new Date(dataUrl.DepartureDate), "dd/MM", { locale: vi }), format(new Date(e.dateStandar), "dd/MM", { locale: vi }))
                          return (
                            <>
                              {
                                format(new Date(dataUrl.DepartureDate), "dd/MM", { locale: vi }) == e.date
                                  ?
                                  <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-600">
                                    <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg text-red-600">
                                      {e.dayOfWeek} <br />
                                      {e.date}</button>
                                  </li>
                                  :
                                  <li key={'weekChooseDepart' + i} className="mx-auto border-b-2 border-red-100">
                                    <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateDepart(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                      {e.dayOfWeek} <br />
                                      {e.date}</button>
                                  </li>
                              }
                            </>
                          )
                        })}
                      </ul>
                    </div>
                    {searchStatus == false
                      ?
                      <div className="flex flex-col space-y-5 mt-5">
                        {departData.map((e: any, i: number) => {
                          return (
                            <>
                              <div className=" grid grid-cols-12 h-20 shadow-md ... rounded-xl hover:bg-stone-100">
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
                                    <button
                                      onClick={(e) => chooseFlightDepartFn(e)}
                                      data-departureFlightSession={e.FlightSession}
                                      type="button"
                                      className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      :
                      <Searching></Searching>
                    }
                    {notFound == true &&
                      <Notfound></Notfound>
                    }
                  </div>
                  {/* Chiều về */}
                  <div className="my-10">
                    <div className=" text-sm max-h-36 shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                      <div className=" text-start pt-2 bg-red-100">
                        <h1 className="text-black mx-3 text-xl font-bold">{trip.to} - {trip.from}</h1>
                        <p className=" mx-3">{passenger.Adult + ' (người lớn), ' + passenger.Children + ' (trẻ em),' + passenger.Infant + ' (em bé)'} - về ngày {format(new Date(searchParams.get('rd') || Date.now()), "dd/MM/yyyy", { locale: vi })}</p>
                      </div>
                      <ul className="flex flex-row justify-between ...">
                        {weekChooseReturn.map((e: any, i: number) => {
                          return (
                            <>
                              {
                                format(new Date(dataUrl.ReturnDate), "dd/MM", { locale: vi }) == format(new Date(e.dateStandar), "dd/MM", { locale: vi })
                                  ?
                                  <li key={'weekChooseReturn' + i} className="mx-auto border-b-2 border-red-600">
                                    <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateReturn(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg text-red-600">
                                      {e.dayOfWeek} <br />
                                      {e.date}</button>
                                  </li>
                                  :
                                  <li key={'weekChooseReturn' + i} className="mx-auto border-b-2 border-red-100">
                                    <button data-dateStandar={e.dateStandar} onClick={(e) => searchInDateReturn(e)} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                      {e.dayOfWeek} <br />
                                      {e.date}</button>
                                  </li>
                              }
                            </>
                          )
                        })}
                      </ul>
                    </div>

                    {searchStatus == false
                      ?
                      <div className="flex flex-col space-y-5 mt-5">
                        {returnData.map((e: any, i: number) => {
                          return (
                            <>
                              <div className=" grid grid-cols-12 h-20 shadow-md ... rounded-xl hover:bg-stone-100">
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
                                    }                          <div className="font-medium dark:text-white">
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
                                    <button
                                      onClick={(e) => chooseFlightReturnFn(e)}
                                      data-returnFlightSession={e.FlightSession}
                                      type="button"
                                      className="text-white bg-red-600 min-w-full max-w-sm hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs h-8 my-auto"> Chọn</button>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      :
                      <Searching></Searching>
                    }
                    {notFound == true &&
                      <Notfound></Notfound>
                    }
                  </div>
                </>

              }

              {checkOutStep == true &&
                <div className="shadow-md ... rounded-xl hover:bg-stone-100 p-3 my-10 max-h-32">
                  {/* <p className=" font-bold">Checkout</p> */}
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
                    // chooseFlightReturn != '' &&
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
        </div>
      }
      
      {orderStep == true &&
        <div className=" mt-28 bg-white mx-auto rounded-3xl p-5">
          <div className=" grid grid-cols-12 gap-4 max-w-7xl mx-auto py-2">
            <div className="grid col-span-12 xl:col-span-8">
              <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <div className=" text-start bg-red-500 py-3">
                  <h1 className="text-white mx-3 text-xl font-bold">Thông tin khách hàng</h1>
                </div>
                {Array.from(Array(Adult), (e, i) => {
                  return (
                    <>
                      <div className=" flex flex-col justify-start ...">
                        <p className=" text-start px-3 text-md my-3 text-red-600 font-bold">Người lớn {i + 1}</p>
                        <div className=" grid grid-cols-6 gap-4 px-3">
                          <div className="col-span-2">
                            <label htmlFor="adults" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                            <select id="adults" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                            </select>
                          </div>
                          <div className=' col-span-4'>
                            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                            <input placeholder="Hoàng Văn Hải" type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div>
                        </div>
                        <div className=" flex flex-col px-3 py-5">
                          {/* <label htmlFor="baggage" className="block mb-2 text-sm font-medium text-start">Hành lý</label> */}
                          <select id="baggage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                            <option value="20">Mua 20 kg hành lý (195,000 VND)</option>
                            <option value="30">Mua 30 kg hành lý (292,000 VND)</option>
                            <option value="40">Mua 40 kg hành lý (389,000 VND)</option>
                            <option value="50">Mua 50 kg hành lý (486,000 VND)</option>
                            <option value="60">Mua 60 kg hành lý (584,000 VND)</option>
                            <option value="70">Mua 70 kg hành lý (681,000 VND)</option>
                            <option value="20+">Mua 20 kg HLQK hành lý (411,000 VND)</option>
                            <option value="30+">Mua 30 kg HLQK hành lý (508,000 VND)</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )

                })}

                {Array.from(Array(Children), (e, i) => {
                  return (
                    <>
                      <div className=" flex flex-col justify-start ...">
                        <p className=" text-start px-3 text-md my-3 text-green-600 font-bold">Trẻ em {i + 1}</p>
                        <div className=" grid grid-cols-6 gap-4 px-3">
                          <div className="col-span-2">
                            <label htmlFor="child" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                            <select id="child" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                            </select>
                          </div>
                          <div className=' col-span-2'>
                            <label htmlFor="childFullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                            <input placeholder="Hoàng Văn Hải" pattern="Hoàng Văn Nam" type="text" id="childFullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div>
                          <div className=' col-span-2'>
                            <div className=' flex flex-row'>
                              <label htmlFor="childBirthDay" className="block text-sm font-medium mb-2">Ngày sinh</label>
                            </div>
                            <input id="childBirthDay" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" />
                          </div>
                        </div>
                        <div className=" flex flex-col px-3 py-5">
                          {/* <label htmlFor="baggage" className="block mb-2 text-sm font-medium text-start">Hành lý</label> */}
                          <select id="baggage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected={true} value="0">Không thêm hành lý chiều đi</option>
                            <option value="20">Mua 20 kg hành lý (195,000 VND)</option>
                            <option value="30">Mua 30 kg hành lý (292,000 VND)</option>
                            <option value="40">Mua 40 kg hành lý (389,000 VND)</option>
                            <option value="50">Mua 50 kg hành lý (486,000 VND)</option>
                            <option value="60">Mua 60 kg hành lý (584,000 VND)</option>
                            <option value="70">Mua 70 kg hành lý (681,000 VND)</option>
                            <option value="20+">Mua 20 kg HLQK hành lý (411,000 VND)</option>
                            <option value="30+">Mua 30 kg HLQK hành lý (508,000 VND)</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )

                })}
                {Array.from(Array(Infant), (e, i) => {
                  return (
                    <>
                      <div className=" flex flex-col justify-start ...">
                        <p className=" text-start px-3 text-md my-3 text-blue-600 font-bold">Em bé {i + 1}</p>
                        <div className=" grid grid-cols-6 gap-4 px-3 mb-5">
                          <div className="col-span-2">
                            <label htmlFor="baby" className="block mb-2 text-sm font-medium text-start">Giới tính</label>
                            <select id="baby" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                            </select>
                          </div>
                          <div className=' col-span-2'>
                            <label htmlFor="babyFullname" className="block mb-2 text-sm font-medium text-start">Họ và tên</label>
                            <input placeholder="Hoàng Thị Hân" type="text" id="babyFullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div>
                          <div className=' col-span-2'>
                            <div className=' flex flex-row'>
                              <label htmlFor="babyBithDay" className="block text-sm font-medium mb-2">Ngày sinh</label>
                            </div>
                            <input id="babyBithDay" className="g-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" type="date" name="trip-start" />
                          </div>
                        </div>

                      </div>
                    </>
                  )

                })}




              </div>
            </div>
            <div className="grid col-span-12 xl:col-span-8">
              <div className=" text-sm shadow-xl ... rounded-xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <div className=" text-start bg-red-100 py-3">
                  <h1 className="text-black mx-3 text-xl font-bold">Thông tin liên hệ, hóa đơn</h1>
                </div>
                <div className=" flex flex-col justify-start ...">
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
                </div>
                {showVatInfo == true &&
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
                }

              </div>
            </div>
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
                        {departChooseData[0].AirlineCode == 'VJ' &&
                          <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                        }
                        {departChooseData[0].AirlineCode == 'VN' &&
                          <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                        }
                        {departChooseData[0].AirlineCode == 'QH' &&
                          <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                        }
                        {departChooseData[0].AirlineCode == 'VU' &&
                          <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                        }
                        <div className="font-medium dark:text-white">
                          <div>{departChooseData[0].AirlineCode}</div>
                          <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                            <p>{departChooseData[0].FlightNumber}</p>
                            <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                          </div>
                          <p className=" block xl:hidden text-xs">Từ: {format(new Date(departChooseData[0].StartDate), "HH:mm", { locale: vi })}, đến: {departChooseData[0].EndDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" grid grid-cols-6 py-5">
                      <div className=" col-span-6 xl:col-span-1 px-3">
                        <p className="text-center">{format(new Date(departChooseData[0].StartDate), "HH:mm", { locale: vi })}</p>
                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departChooseData[0].StartPoint}</p>
                      </div>
                      <div className="col-span-6 xl:col-span-4">
                        <div className="flex flex-row space-x-3">
                          <FaPlaneDeparture className="w-4 my-auto" />
                          <div className="flex flex-col w-full space-y-2">
                            <p className="text-center text-xs">{departChooseData[0].Duration + ' phút'}</p>
                            <div className="border-dashed border-b-2 ..."></div>
                            {departChooseData[0].Stops == 0 &&
                              <p className="text-center text-xs">Bay thẳng</p>
                            }
                          </div>
                          <FaPlaneArrival className="w-4 my-auto" />
                        </div>
                      </div>
                      <div className=" col-span-6 xl:col-span-1 px-3">
                        <p className="text-center">{format(new Date(departChooseData[0].EndDate), "HH:mm", { locale: vi })}</p>
                        <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departChooseData[0].EndPoint}</p>
                      </div>


                    </div>
                  </div>
                }

                {/* {typeOfTicket == 2 &&
                  <>
                    <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
                      <p className=" text-xs text-end mb-2">Chiều đi</p>

                      <div className="px-3">
                        <div className="flex items-center gap-4">
                          {departChooseData[0].AirlineCode == 'VJ' &&
                            <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                          }
                          {departChooseData[0].AirlineCode == 'VN' &&
                            <img className="w-10 h-10 rounded-full" src="/img/vn.png" alt="vietjet" />
                          }
                          {departChooseData[0].AirlineCode == 'QH' &&
                            <img className="w-10 h-10 rounded-full" src="/img/qh.png" alt="vietjet" />
                          }
                          {departChooseData[0].AirlineCode == 'VU' &&
                            <img className="w-10 h-10 rounded-full" src="/img/vu.png" alt="vietjet" />
                          }
                          <div className="font-medium dark:text-white">
                            <div>{departChooseData[0].AirlineCode}</div>
                            <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                              <p>{departChooseData[0].FlightNumber}</p>
                              <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                            </div>
                            <p className=" block xl:hidden text-xs">Từ: {format(new Date(departChooseData[0].StartDate), "HH:mm", { locale: vi })}, đến: {departChooseData[0].EndDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-6 py-5">
                        <div className=" col-span-6 xl:col-span-1 px-3">
                          <p className="text-center">{format(new Date(departChooseData[0].StartDate), "HH:mm", { locale: vi })}</p>
                          <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departChooseData[0].StartPoint}</p>
                        </div>
                        <div className="col-span-6 xl:col-span-4">
                          <div className="flex flex-row space-x-3">
                            <FaPlaneDeparture className="w-4 my-auto" />
                            <div className="flex flex-col w-full space-y-2">
                              <p className="text-center text-xs">{departChooseData[0].Duration + ' phút'}</p>
                              <div className="border-dashed border-b-2 ..."></div>
                              {departChooseData[0].Stops == 0 &&
                                <p className="text-center text-xs">Bay thẳng</p>
                              }
                            </div>
                            <FaPlaneArrival className="w-4 my-auto" />
                          </div>
                        </div>
                        <div className=" col-span-6 xl:col-span-1 px-3">
                          <p className="text-center">{format(new Date(departChooseData[0].EndDate), "HH:mm", { locale: vi })}</p>
                          <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{departChooseData[0].EndPoint}</p>
                        </div>


                      </div>
                    </div>
                    <div className="flex flex-col tems-center shadow-lg p-2 rounded-lg">
                      <p className=" text-xs text-end mb-2">Chiều về</p>
                      <div className="px-3">
                        <div className="flex items-center gap-4">
                          <img className="w-10 h-10 rounded-full" src="/img/vj.png" alt="vietjet" />
                          <div className="font-medium dark:text-white">
                            <div>Vietjet Air</div>
                            <div className=" flex flex-row xl:flex-col text-xs text-gray-500 dark:text-gray-400">
                              <p>VJ197</p>
                              <p className=" block xl:hidden">- 02h 10m - Bay thẳng</p>
                            </div>
                            <p className=" block xl:hidden text-xs">Từ: 08:05, đến: 10:15</p>
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-6 py-5">
                        <div className=" col-span-1">
                          <p className="text-center">05:00</p>
                          <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HAN</p>
                        </div>
                        <div className="col-span-4">
                          <div className="flex flex-row space-x-3">
                            <FaPlaneDeparture className="w-4 my-auto" />
                            <div className="flex flex-col w-full space-y-2">
                              <p className="text-center text-xs">02h 10m</p>
                              <div className="border-dashed border-b-2 ..."></div>
                              <p className="text-center text-xs">Bay thẳng</p>
                            </div>
                            <FaPlaneArrival className="w-4 my-auto" />
                          </div>
                        </div>
                        <div className=" col-span-1">
                          <p className="text-center">07:00</p>
                          <p className="text-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">SGN</p>
                        </div>

                      </div>
                    </div>
                  </>

                } */}

                <div className="flex flex-col space-y-2 text-sm">
                  <p className=" text-xs text-end">Thông tin thanh toán</p>
                  <div className=" flex flex-row justify-between ...">
                    <p>
                      Người lớn (1,476,800 x 01)
                    </p>
                    <p className=" font-bold">
                      1,476,800 VNĐ
                    </p>
                  </div>
                  <div className=" flex flex-row justify-between ...">
                    <p>
                      Người lớn (1,476,800 x 01)
                    </p>
                    <p className=" font-bold">
                      1,476,800 VNĐ
                    </p>
                  </div>
                  <div className=" flex flex-row justify-between ...">
                    <p>
                      Người lớn (1,476,800 x 01)
                    </p>
                    <p className=" font-bold">
                      1,476,800 VNĐ
                    </p>
                  </div>
                  <div className=" flex flex-row justify-between ...">
                    <p>
                      Hành lí bổ sung
                    </p>
                    <p className=" font-bold">
                      0 VNĐ
                    </p>
                  </div>
                  <div className=" flex flex-row justify-between ...">
                    <p>
                      Tổng cộng
                    </p>
                    <p className=" font-bold">
                      3,001,600 VNĐ
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <button type="button" className="text-white bg-green-600 min-w-full max-w-sm hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-10 my-auto">Đặt vé</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
