import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const CalendarTable = ({ receiveDates }) => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    console.log(date)


    useEffect(() => {
        receiveDates(date[0], date[1])
    }, [date])

    return (
        <>
            <Calendar onChange={onChange} value={date} selectRange={true} />
        </>
    )
}

export default CalendarTable