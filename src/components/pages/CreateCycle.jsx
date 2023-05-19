import { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import cycleService from '../../services/cycle.services'
import CalendarTable from '../layout/Calendar'


const CreateCycle = () => {
    const [cycleData, setCycleData] = useState({
        startDate: null,
        endDate: null,
        flow: 0,
        mood: 0,
        pain: []
    })

    const handleChange = e => {

        const { startDate, endDate, flow, mood, pain } = e.target

        setCycleData({
            ...cycleData, startDate, endDate, flow, mood, pain
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

        cycleService
            .createCycle(cycleData)
            .then(() => fireFinalActions())
            .catch(err => console.error(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <CalendarTable />

        </Form>
    )
}

export default CreateCycle