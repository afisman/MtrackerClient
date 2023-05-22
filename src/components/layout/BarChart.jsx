import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import Loader from './Loader'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

const BarChart = ({ userCycles }) => {
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

    const [userData, setUserData] = useState({
        labels: userCycles.map((data) => getDayAndMonth(data.startDate)),
        datasets: [{
            label: "Mood",
            data: userCycles.map((data) => data.mood),
            backgroundColor: 'aqua',
            borderColor: 'black',
            borderWidth: 1
        }
            ,
        {
            label: "Flow",
            data: userCycles.map((data) => data.flow),
            backgroundColor: 'green',
            borderColor: 'black',
            borderWidth: 1
        }
        ]
    })

    console.log(userCycles.map((data) => data.flow))

    return (
        <div className='barChart' style={{ width: 700 }}>
            {
                userCycles ?
                    <Bar
                        data={userData}
                        options={{
                            barPercentage: 4,
                            mantainAspectRatio: false,
                            scales: {
                                x: {
                                    stacked: false
                                },
                                y: {
                                    stacked: false
                                }
                            }
                        }}
                    />
                    : <Loader />

            }
        </div >
    )
}

export default BarChart