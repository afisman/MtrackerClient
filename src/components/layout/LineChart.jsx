import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import Loader from './Loader'
import './LineChart.css'
import { Form } from 'react-bootstrap'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
)

const LineChart = ({ dateArr, periodDurationArr }) => {
    const [range, setRange] = useState(3)
    const userData = {
        labels: dateArr.length < range ? dateArr : dateArr.slice(dateArr.length - range),
        datasets: [
            {
                label: "Period duration",
                data: periodDurationArr.length < range ? periodDurationArr : periodDurationArr.slice(periodDurationArr.length - range),
                backgroundColor:
                    "rgba(75,192,192,1)",

                borderColor: "black",
                borderWidth: 2
            }

        ]
    }

    const handleChange = (e) => {
        const { value } = e.target

        setRange(value)
    }
    return (
        <>
            <div className='lineChart'>
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
            <Form.Select className='form-input line-form-input' aria-label="Default select example"
                value={range} name='range' onChange={handleChange}>
                <option value={3}>Last 3 cycles</option>
                <option value={6}>Last 6 cycles</option>
                <option value={12}>Last 12 cycles</option>
            </Form.Select>
        </>
    )
}

export default LineChart