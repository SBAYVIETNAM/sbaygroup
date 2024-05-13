
import { format, addDays } from "date-fns";
import { da, vi } from 'date-fns/locale';

export default async function getDepartAndReturn(
    action: string,
    ItineraryType: number,
    StartPoint: string,
    EndPoint: string,
    DepartureDate: string,
    ReturnDate: string,
    Adult: number,
    Children: number,
    Infant: number) {
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
    // console.log('dataPost', dataPost);
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
    if(data.Message == "Invalid request: Invalid infant count"){
        alert('Số lượng trẻ vượt quá giới hạn đi theo người lớn')
        window.location.href = '/airline-tickets'
    }
    return data
};
