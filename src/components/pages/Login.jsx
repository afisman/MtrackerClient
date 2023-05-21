import { Container } from 'react-bootstrap'

import React, { useContext, useState } from 'react'
import { AuthContext } from './../../context/auth.context'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth.services'


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log(data)
                storeToken(data.authToken)
                authenticateUser()
                navigate('/cycle/create')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData
    return (
        <>
            <Container>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='form-input' type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='form-input' type="password" value={password} onChange={handleInputChange} name="password" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button id='login-button' variant="dark" type="submit">Log in</Button>
                    </div>

                </Form>
            </Container>
        </>
    )
}

export default Login