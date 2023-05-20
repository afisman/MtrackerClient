import React, { useContext, useEffect } from 'react'
import { AuthContext } from './../../context/auth.context'

const ChartPage = () => {
    const { user } = useContext(AuthContext)
    const [userCycles, setUserCycles] = useState([])

    useEffect(() => {
        setUserCycles(user.cycles)
    }, [])

    return (
        <div>ChartPage</div>
    )
}

export default ChartPage