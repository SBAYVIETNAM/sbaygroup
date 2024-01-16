
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';
import Notfound from "./notfound";
import Searching from "./search";
var _ = require('lodash');
import SearchAndOrder from "./search-and-order";

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
  let rawData = `{\r\n    \"action\": \"`
    + action + `\",\r\n    \"ItineraryType\": `
    + ItineraryType + `,\r\n    \"StartPoint\": \"`
    + StartPoint + `\",\r\n    \"EndPoint\": \"`
    + EndPoint + `\",\r\n    \"DepartureDate\": \"`
    + format(new Date(DepartureDate), "dd/MM/yyyy", { locale: vi }) + `\",\r\n    \"ReturnDate\": \"` + '' + `\",\r\n    \"Adult\": `
    + Adult + `,\r\n    \"Children\": `
    + Children + `,\r\n    \"Infant\": `
    + Infant + `\r\n}`
  console.log('rawData', rawData);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: rawData,
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log("data: ", data);

  // console.log("DOMSearchFlights", data.DOMSearchFlights);
  // if (data.Data) {
  //   let departData = []
  //   for (const key in data.Data.DepartureFlights) {
  //     // console.log('key', key, ReturnFlights[key]);
  //     departData.push(data.Data.DepartureFlights[key])
  //   }
  //   return departData;
  // }
  return data
}

async function getDepartAndReturn() {

  // const url = 'aaaa'
  // const res = await fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + token,
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: "follow",
  //   cache: 'force-cache'
  // });
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  // // console.log("data: ",await res.json());
  // return await res.json();

}


export default async function AirLineTicket({ params }: { params: { slug: string } }) {

  const action = 'DOMSearchFlights'
  const ItineraryType = 1
  const StartPoint = 'HAN'
  const EndPoint = 'SGN'
  const DepartureDate = '01/17/2024'
  const Adult = 3
  const Children = 2
  const Infant = 1

  const searchData = await getDepart(
    action,
    ItineraryType,
    StartPoint,
    EndPoint,
    DepartureDate,
    Adult,
    Children,
    Infant
  )

  return (
    <SearchAndOrder
      searchData={searchData}
      action={action}
      ItineraryType={ItineraryType}
      StartPoint={StartPoint}
      EndPoint={EndPoint}
      DepartureDate={DepartureDate}
      Adult={Adult}
      Children={Children}
      Infant={Infant}
    ></SearchAndOrder>
  )
}
