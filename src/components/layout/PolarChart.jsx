import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import Loader from './Loader'
import './PolarChart.css'



const PolarChart = ({ dateArr, painPercentages }) => {

    const painArr = painPercentages.map((data) => data * 100 / dateArr.length)

    const userData = {
        labels: ['Abdomen', 'Pelvis', 'Nipples', 'Head'],
        datasets: [
            {
                label: "Pain",
                data: painArr,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)'
                ],
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className='polarChart'>

            <PolarArea
                data={userData}
                options={{
                    responsive: true,
                    mantainAspectRatio: false,
                }} />

        </div >
    )
}

export default PolarChart