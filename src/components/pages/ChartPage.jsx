import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './../../context/auth.context'
import userService from '../../services/user.services'
import { useParams } from 'react-router-dom'
import BarChart from '../layout/BarChart'
import LineChart from '../layout/LineChart'
import Loader from '../layout/Loader'
const ChartPage = () => {
    const { user } = useContext(AuthContext)
    const [userCycles, setUserCycles] = useState([])
    const [flowArr, setFlowArr] = useState([])
    const [moodArr, setMoodArray] = useState([])
    const [dateArr, setDateArr] = useState([])
    const [periodDurationArr, setPeriodDurationArr] = useState([])
    const { user_id } = useParams()

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0')
    }

    const getDayAndMonth = date => {
        const date2 = new Date(date)
        const year = date2.getFullYear()
        const month = padTo2Digits(date2.getMonth() + 1)
        const day = padTo2Digits(date2.getDate())

        return [day, month, year].join('/')
    }



    const loadUser = () => {
        userService
            .getUser(user_id)
            .then(user => {
                const sortedCycles = user.data.cycles.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
                setUserCycles(sortedCycles)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadUser()
    }, [])

    useEffect(() => {
        const fArr = userCycles.map((data) => data.flow)
        const mArr = userCycles.map((data) => data.mood)
        const dArr = userCycles.map((data) => getDayAndMonth(data.startDate))
        const PDArr = userCycles.map((data) => data.periodDuration)
        setFlowArr(fArr)
        setMoodArray(mArr)
        setDateArr(dArr)
        setPeriodDurationArr(PDArr)

    }, [userCycles])

    return (
        <>
            <div>ChartPage</div>
            {
                userCycles ?
                    <>
                        <BarChart dateArr={dateArr} moodArr={moodArr} flowArr={flowArr} />
                        <LineChart dateArr={dateArr} periodDurationArr={periodDurationArr} />
                    </>
                    :
                    <Loader />

            }
        </>
    )
}

export default ChartPage