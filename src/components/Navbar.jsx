import React, { useEffect } from 'react'
import logo from '../assets/Google.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { user, isSuccess } = useSelector((state) => state.google)

    const navigate = useNavigate()

    const logout = () => {
        window.open("http://localhost:8080/logout", "_self")
    }

    useEffect(() => {
        if (user && isSuccess) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }, [user, isSuccess])



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-2 m-2">

                <div className="container-fluid">

                    <div className="logo">
                        <Link to={'/'}>
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                <img
                                    src={logo}
                                    height="30"
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                            </a></Link>
                    </div>

                    <div className="d-flex align-items-center">

                        <a className="link-secondary me-3" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>

                        <div className="dropdown">
                            {
                                user ?
                                    <a
                                        data-mdb-dropdown-init
                                        className="d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={user.image}
                                            className="rounded-circle"
                                            height="35"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    </a> : ""
                            }
                        </div>
                        <span>
                            <div className="container-fluid">
                                {
                                    user ?
                                        <button className='btn btn-outline-danger btn-sm' onClick={logout} >LogOut</button> :
                                        <span>
                                            <Link to={'/register'} className='btn btn-outline-primary mx-1'>Register</Link>
                                            <Link to={'/login'} className='btn btn-outline-primary mx-1' >Login</Link>
                                        </span>
                                }
                            </div>
                        </span>
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar