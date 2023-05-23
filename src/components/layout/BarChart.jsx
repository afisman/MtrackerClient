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

const BarChart = ({ dateArr, moodArr, flowArr }) => {




    const userData = {
        labels: dateArr,
        datasets: [
            {
                label: "Mood",
                data: moodArr,
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
                stack: 'Stack 0'
            }
            ,
            {
                label: "Flow",
                data: flowArr,
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
                stack: 'Stack 1'

            }
        ]
    }

    return (
        <div className='barChart' style={{ width: 700, padding: '100px' }}>

            <Bar
                data={userData}
                options={{
                    responsive: true,
                    mantainAspectRatio: false,
                    scale: {
                        ticks: {
                            precision: 0,
                        },
                        y: {
                            beginAtZero: true
                        }
                    }

                }}
            />



        </div >
    )
}

export default BarChart