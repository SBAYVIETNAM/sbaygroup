'use client'

import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import Notfound from "./notfound";
import Searching from "./search";
var _ = require('lodash');
import TopSearch from "./top-search";
import SearchResponse from "./search-res";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import getDepart from "../_api/getDepart.api";
import getDepartAndReturn from "../_api/getDepartAndReturn.api";


export default function AirLineTicket() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get('a') || 'DOMSearchFlights'
  const ItineraryType = searchParams.get('t') || 1 || 2
  const StartPoint = searchParams.get('sp') || "HAN"
  const EndPoint = searchParams.get('ep') || "SGN"
  const DepartureDate = searchParams.get('dp') || format(new Date(addDays(new Date(), 2)), "MM/dd/yyyy", { locale: vi })
  const ReturnDate = searchParams.get('rd') || ""
  const Adult = parseInt(searchParams.get('ad') || '1')
  const Children = parseInt(searchParams.get('ch') || '0')
  const Infant = parseInt(searchParams.get('ba') || '0')

  const [searchData, setSearchData] = useState<any>([])
  // console.log('searchData', searchData);
  useEffect(() => {
    setSearchData([])
    const getData = async () => {
      if (ItineraryType == 1) {
        const data = await getDepart(
          action,
          ItineraryType,
          StartPoint,
          EndPoint,
          DepartureDate,
          Adult,
          Children,
          Infant
        )
        console.log('searchData', data);
        setSearchData(data)
      } else if (ItineraryType == 2) {
        const data = await getDepartAndReturn(
          action,
          ItineraryType,
          StartPoint,
          EndPoint,
          DepartureDate,
          ReturnDate,
          Adult,
          Children,
          Infant
        )
        setSearchData(data)
      } else {
        router.push('/airline-tickets?a=DOMSearchFlights&t=1&sp=HAN&ep=SGN&dp=' + format(new Date(Date.now()), "MM/dd/yyyy", { locale: vi }) + '&rd=&ad=1&ch=0&ba=0')
      }
    }
    getData()
  }, [action, ItineraryType,StartPoint, EndPoint, DepartureDate, ReturnDate, Adult, Children, Infant ])
  console.log('searchData', searchData);

  return (
    <div className=" bg-white mx-auto rounded-3xl p-5">
      {
        searchData.Data?.DataSession
          ?
          <SearchResponse
            action={action}
            ItineraryType={ItineraryType}
            StartPoint={StartPoint}
            EndPoint={EndPoint}
            DepartureDate={DepartureDate}
            ReturnDate={ReturnDate}
            Adult={Adult}
            Children={Children}
            Infant={Infant}
            searchData={searchData}
          ></SearchResponse>
          :
          <div role="status" className="animate-pulse my-64">
            <p className=" text-center text-xl my-10 text-red-600"> Đang tìm kiếm chuyến bay...</p>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
            <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
          </div>
      }

    </div>

  )
}
