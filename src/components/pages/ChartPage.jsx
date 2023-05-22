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
    const { user_id } = useParams()


    const loadUser = () => {
        userService
            .getUser(user_id)
            .then(user => {
                console.log(user)
                setUserCycles(user.data.cycles)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <>
            <div>ChartPage</div>
            {
                userCycles ?
                    <BarChart userCycles={userCycles} />
                    :
                    <Loader />

            }
        </>
    )
}

export default ChartPage