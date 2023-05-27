import { useContext, useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.services";
import { MessageContext } from "../../context/message.context";

const Signup = () => {
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                setShowMessage({
                    show: true,
                    title: `Welcome ${data.user.username}`, text: 'You have registered correctly'
                })
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { username, password, email } = signupData

    return (
        <Container>
            <h1 className='ms-5 me-5 mt-5 pe-5 ps-5'>Sign up</h1>
            <Form className='ms-5 me-5 mb-5 pe-5 ps-5  pb-5' onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className='form-input' type="text" value={username} onChange={handleInputChange} name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-input' type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='form-input' type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <div className="d-grid">
                    <Button id='signup-button' variant="dark" type="submit">Register</Button>
                </div>

            </Form>
        </Container>

    )
}

export default Signup