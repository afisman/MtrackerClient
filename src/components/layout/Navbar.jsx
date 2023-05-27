import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { MessageContext } from '../../context/message.context'


const Navigation = () => {

    const navigate = useNavigate()

    const { setShowMessage } = useContext(MessageContext)

    const { user, logoutUser } = useContext(AuthContext)
    const logout = () => {
        setShowMessage({
            show: true,
            title: 'Until next time', text: 'your session was closed successfully'
        })
        logoutUser()
        navigate('/')
    }

    return (
        <Navbar expand="lg" bg="dark" variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {
                            !user ?
                                <>
                                    <Link to="/signup">
                                        <Nav.Link as="span">Sign up</Nav.Link>
                                    </Link>
                                    <Link to="/login">
                                        <Nav.Link as="span">Login</Nav.Link>
                                    </Link>
                                </> :
                                <>
                                    <Link to={`/user/${user._id}`}>
                                        <Nav.Link as="span">Analytics</Nav.Link>
                                    </Link>
                                    <Link to='/cycle/create'>
                                        <Nav.Link as="span">Create</Nav.Link>
                                    </Link>
                                    <Link to='/'>
                                        <Nav.Link as="span" onClick={logout}>Log out</Nav.Link>
                                    </Link>
                                </>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Navigation