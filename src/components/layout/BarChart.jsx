import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import Loader from './Loader'
import './BarChart.css'
import { Form } from 'react-bootstrap'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

const BarChart = ({ dateArr, moodArr, flowArr }) => {

    const [range, setRange] = useState(3)

    const userData = {
        labels: dateArr.length < range ? dateArr : dateArr.slice(0, range),
        datasets: [
            {
                label: "Mood",
                data: moodArr.length < range ? moodArr : moodArr.slice(0, range),
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
                stack: 'Stack 0'
            }
            ,
            {
                label: "Flow",
                data: flowArr.length < range ? flowArr : flowArr.slice(0, range),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
                stack: 'Stack 1'

            }
        ]
    }

    const handleChange = (e) => {
        const { value } = e.target

        setRange(value)
    }

    return (
        <>
            <div className='barChart' >
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
            <Form.Select className='form-input barChart-form-input' aria-label="Default select example"
                value={range} name='range' onChange={handleChange}>
                <option value={3}>Last 3 cycles</option>
                <option value={6}>Last 6 cycles</option>
                <option value={12}>Last 12 cycles</option>
            </Form.Select>
        </>

    )
}

export default BarChart