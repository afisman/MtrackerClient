import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const CalendarTable = () => {
    const [date, setDate] = useState(new Date());
    const [userData, setUserData] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [periodDuration, setPeriodDuration] = useState(0);

    const onChange = date => {
        setDate(date);
    }
    // const handleRenderCalendar = value => {
    //     const view = value["view"];
    //     const date = value["date"].toString();
    //     const userData = userData;
    //     const startDate = this.props.state["startDate"];
    //     const totalDuration = startDate;
    //     const periodDuration = periodDuration;
    //     const msPerDay = 60 * 60 * 24 * 1000;
    //     if (view !== "month") {
    //         // not in month view
    //         return null;
    //     } else if (!(date in userData)) {
    //         // no data, render class predict-n
    //         const fromStartDateMs = Date.parse(date) - Date.parse(startDate);
    //         const fromStartDateDay = fromStartDateMs / msPerDay;
    //         const fromStartDate = fromStartDateDay % totalDuration;
    //         if (fromStartDate <= 0) {
    //             return null;
    //         } else if (fromStartDateDay < periodDuration) {
    //             return "blood-1";
    //         } else if (fromStartDate < periodDuration) {
    //             return "predict-1";
    //         } else {
    //             return "predict-0";
    //         }
    //     } else {
    //         // has data, render class blood-n
    //         return "blood-" + userData[date]["Blood"];
    //     }
    // }

    useEffect(() => {
        setUserData()
    }, [])

    return (
        <>
            <Calendar showWeekNumbers onChange={onChange} value={date} selectRange={true} />
            {date[0]?.toString()}
        </>
    )
}

export default CalendarTable