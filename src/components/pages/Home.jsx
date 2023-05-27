import React, { useContext } from 'react'
import Signup from './Signup'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className='containerHome mt-5 mb-5 me-5 ms-5'>
            <h1>Home</h1>

            {
                user
                    ?
                    <div className='link-box'>
                        <Link to={`/user/${user._id}`} className='linkButton me-5'>Past cycles</Link>
                        <Link to='/cycle/create' className='linkButton '>Create cycle</Link>
                    </div>
                    :
                    <div className='link-box'>
                        <Link to='/signup' className='linkButton me-5'>Signup</Link>
                        <Link to='/login' className='linkButton '>Login</Link>
                    </div>
            }

        </div>
    )
}

export default Home