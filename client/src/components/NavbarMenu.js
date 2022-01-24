import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'





const NavbarMenu = () => {

    const { auth } = useSelector((state) => ({ ...state }))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch({
            type: 'LOGOUT'

        })
        window.localStorage.removeItem("auth")
        navigate("/login")

    }




    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand >Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="px-5" to="/">Home</Link>

                        {auth && auth.user ?<> <Link className="px-5" to="dashboard">Dashboard</Link> <a className="px-5" onClick={logout} >LOGOUT</a> </>:<>
                                <Link className="px-5" to="login">Login</Link>
                                <Link className="px-5" to="register">Register</Link>
                            </>
                            

                            
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu
