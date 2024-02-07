
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import Notfound from "./notfound";
import Searching from "./search";
var _ = require('lodash');
import SearchAndOrder from "./search-and-order";
import TopSearch from "./top-search";

async function getDepart(
  action: string,
  ItineraryType: number,
  StartPoint: string,
  EndPoint: string,
  DepartureDate: string,
  Adult: number,
  Children: number,
  Infant: number
) {

  const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";
  const dataPost = {
    "action": action,
    "ItineraryType": ItineraryType,
    "StartPoint": StartPoint,
    "EndPoint": EndPoint,
    "DepartureDate": format(new Date(DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi }),
    "ReturnDate": "",
    "Adult": Adult,
    "Children": Children,
    "Infant": Infant
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPost),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // console.log("data: ", res);
  const data = await res.json();

  return data
}

async function getDepartAndReturn(
  action: string,
  ItineraryType: number,
  StartPoint: string,
  EndPoint: string,
  DepartureDate: string,
  ReturnDate: string,
  Adult: number,
  Children: number,
  Infant: number
) {

  const url = "https://flight.sbaygroup.com/inc/api-datcho-private.php";
  const dataPost = {
    "action": action,
    "ItineraryType": ItineraryType,
    "StartPoint": StartPoint,
    "EndPoint": EndPoint,
    "DepartureDate": format(new Date(DepartureDate || Date.now()), "dd/MM/yyyy", { locale: vi }),
    "ReturnDate": format(new Date(ReturnDate || Date.now()), "dd/MM/yyyy", { locale: vi }),
    "Adult": Adult,
    "Children": Children,
    "Infant": Infant
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPost),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data

}

type Props = {
  params: {};
  searchParams: { [key: string]: string };
};

export default async function AirLineTicket(props: Props) {

  const searchParams = props.searchParams;

  console.log('searchParams', searchParams);

  const action = searchParams.a
  const ItineraryType = parseInt(searchParams.t)
  const StartPoint = searchParams.sp
  const EndPoint = searchParams.ep
  const DepartureDate = searchParams.dp
  const ReturnDate = searchParams.rd

  const Adult = parseInt(searchParams.ad)
  const Children = parseInt(searchParams.ch)
  const Infant = parseInt(searchParams.ba)


  let searchData
  if (ItineraryType == 1) {
    searchData = await getDepart(
      action,
      ItineraryType,
      StartPoint,
      EndPoint,
      DepartureDate,
      Adult,
      Children,
      Infant
    )
  } else if (ItineraryType == 1) {
    searchData = await getDepartAndReturn(
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
  } else {
    return (
      <div className=" bg-white mx-auto rounded-3xl p-5">
        <TopSearch
          action={"DOMSearchFlights"}
          ItineraryType={"1"}
          StartPoint={"HAN"}
          EndPoint={"SGN"}
          DepartureDate={"01/30/2024"}
          ReturnDate={""}
          Adult={1}
          Children={0}
          Infant={0}
        ></TopSearch>
      </div>

    )
  }

  // console.log('searchData', searchData);

  return (
    <SearchAndOrder
      searchData={searchData}
      action={action}
      ItineraryType={ItineraryType}
      StartPoint={StartPoint}
      EndPoint={EndPoint}
      DepartureDate={DepartureDate}
      ReturnDate={ReturnDate}
      Adult={Adult}
      Children={Children}
      Infant={Infant}
    ></SearchAndOrder>
  )
}
