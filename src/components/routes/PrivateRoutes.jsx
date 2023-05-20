import { useContext } from "react"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../layout/Loader"
import { AuthContext } from "../../context/auth.context"

function PrivateRoute() {

    const { isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    console.log(user)

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute