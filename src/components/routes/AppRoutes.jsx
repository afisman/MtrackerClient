import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CreateCycle from '../pages/CreateCycle'
import PrivateRoute from './PrivateRoutes'
import ChartPage from '../pages/ChartPage'


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/cycle/create' element={<PrivateRoute />}>
                    <Route path='' element={<CreateCycle />} />
                </Route>
                <Route path='/user/:user_id' element={<ChartPage />} />
                {/* <Route path='/cycle/create' element={<CreateCycle />} /> */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default AppRoutes