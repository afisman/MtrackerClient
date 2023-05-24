import React, { useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import Loader from './Loader'



const PolarChart = ({ dateArr, painPercentages }) => {




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
        <div className='polarChart' style={{ width: 700, padding: '100px' }}>

            <PolarArea />

        </div >
    )
}

export default PolarChart