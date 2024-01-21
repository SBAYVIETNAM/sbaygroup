"use client";

import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaRegCalendar, FaRegCalendarCheck, FaBullseye } from "react-icons/fa";
import Select from 'react-select'
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import airportOptions from '../_helper/airport-options'
import { useRouter } from "next/navigation";

export default function WeekCalendarDepart(props: any) {
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
    const router = useRouter()

    const searchInDateDepart = function (e: any) {
        // console.log(e.target.getAttribute('data-datestandar'));
        const dateChoose = e.target.getAttribute('data-datestandar')
        router.push('/airline-tickets?a=DOMSearchFlights&t=' + props.typeOfTicket + '&sp=' + props.StartPoint + '&ep=' + props.EndPoint + '&dp=' + dateChoose + '&rd=' + format(addDays(new Date(dateChoose), 1), 'MM/dd/yyyy', { locale: vi }) + '&ad=' + props.Adult + '&ch=' + props.Children + '&ba=' + props.Infant)
    }

    return (
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
    )

}