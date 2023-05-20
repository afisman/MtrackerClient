import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'


const Navigation = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const logout = () => {
        logoutUser()
    }

    return (
        <Navbar expand="lg" variant="dark">
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
                                    <Nav.Link as="span" onClick={logout}>Log out</Nav.Link>
                                </>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Navigation