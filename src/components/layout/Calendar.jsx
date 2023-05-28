import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'


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
            <div className='calendar'>

                <Calendar onChange={onChange} value={date} selectRange={true} />
            </div>
        </>
    )
}

export default CalendarTable