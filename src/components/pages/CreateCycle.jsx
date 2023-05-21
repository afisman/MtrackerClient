import { useState, useContext, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import cycleService from '../../services/cycle.services'
import CalendarTable from '../layout/Calendar'
import Checkbox from '../layout/Checkbox'
import { useNavigate } from 'react-router-dom'



const CreateCycle = () => {

    const [painChecked, setPainChecked] = useState([])
    const [flowChecked, setFlowChecked] = useState(1)
    const [moodChecked, setMoodChecked] = useState(1)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [periodDuration, setPeriodDuration] = useState(0)

    const navigate = useNavigate()


    const receivePain = data => {
        setPainChecked(data)
    }

    const receiveMood = data => {
        setMoodChecked(data)
    }

    const receiveFlow = data => {
        setFlowChecked(data)
    }

    const receiveDates = (date1, date2) => {
        const msPerDay = 60 * 60 * 24 * 1000
        const fromStartDate = Math.round((Date.parse(date2) - Date.parse(date1)) / msPerDay)
        setStartDate(new Date(date1))
        setEndDate(new Date(date2))
        setPeriodDuration(fromStartDate)
    }

    // useEffect(() => {
    //     setCycleData({
    //         ...cycleData, pain: painChecked
    //     })
    // }, [painChecked])

    // useEffect(() => {
    //     setCycleData({
    //         ...cycleData, mood: moodChecked
    //     })
    // }, [moodChecked])

    // useEffect(() => {
    //     setCycleData({
    //         ...cycleData, flow: flowChecked
    //     })
    // }, [flowChecked])

    // useEffect(() => {
    //     console.log(startDate)
    //     setCycleData(
    //         { ...cycleData, startDate: new Date(startDate) }
    //     )
    // }, [startDate])

    // useEffect(() => {
    //     console.log(endDate)
    //     setCycleData({
    //         ...cycleData, endDate: new Date(endDate)
    //     })
    // }, [endDate])

    // useEffect(() => {
    //     setCycleData({
    //         ...cycleData, periodDuration
    //     })
    // }, [periodDuration])

    const handleSubmit = e => {
        e.preventDefault()

        const cycleData = { startDate, endDate, periodDuration, flow: flowChecked, mood: moodChecked, pain: painChecked }

        cycleService
            .createCycle(cycleData)
            .then(() => navigate('/'))
            .catch(err => console.error(err))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <CalendarTable receiveDates={receiveDates} />
                <Checkbox
                    receivePain={receivePain} painChecked={painChecked}
                    receiveMood={receiveMood} moodChecked={moodChecked}
                    receiveFlow={receiveFlow} flowChecked={flowChecked}
                />
                <div className='d-grid form-button'>
                    <Button id='create-button' variant='dark' type='submit'>Create cycle</Button>
                </div>
            </Form>
        </Container>
    )
}

export default CreateCycle