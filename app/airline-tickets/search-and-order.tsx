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
import TopSearch from "./top-search";
import SearchResponse from "./search-res";

export default function SearchAndOrder(props: any) {
    // console.log('searchDataxxxxx', props.searchData);
    
    return (
        <>
            <div className=" bg-white mx-auto rounded-3xl p-5">
                
                <SearchResponse
                    action={props.action}
                    ItineraryType={props.ItineraryType}
                    StartPoint={props.StartPoint}
                    EndPoint={props.EndPoint}
                    DepartureDate={props.DepartureDate}
                    Adult={props.Adult}
                    Children={props.Children}
                    Infant={props.Infant}
                    searchData={props.searchData}
                ></SearchResponse>
            </div>


        </>
    )
}