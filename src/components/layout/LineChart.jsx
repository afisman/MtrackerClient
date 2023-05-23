import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import Loader from './Loader'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
)

const LineChart = ({ dateArr, periodDurationArr }) => {
    const userData = {
        labels: dateArr,
        datasets: [
            {
                label: "Period duration",
                data: periodDurationArr,
                backgroundColor:
                    "rgba(75,192,192,1)",

                borderColor: "black",
                borderWidth: 2
            }

        ]
    }
    return (
        <div style={{ width: 700, padding: '100px' }}>
            {
                <Line
                    data={userData}
                    options={{
                        responsive: true,
                        mantainAspectRatio: false,
                        scale: {
                            ticks: {
                                precision: 0,

                            }

                        },
                        scales: { y: { min: 0 } }

                    }}
                />
            }
        </div>
    )
}

export default LineChart