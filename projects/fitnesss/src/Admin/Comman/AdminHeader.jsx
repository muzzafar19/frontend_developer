import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminHeader() {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-fluid header-top">
                <div className="nav-shaps-2" />
                <div className="container d-flex align-items-center">
                    <div className="d-flex align-items-center h-100">
                        <a href="#" className="navbar-brand" style={{ height: 125 }}>
                            <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2" /> Fitness</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                    </div>
                    <div className="w-100 h-100">
                        <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: 45 }}>
                            <div className="row gx-0 align-items-center">
                                <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                    <div className="d-flex flex-wrap">
                                        <div className="pe-4">
                                            <a href="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2" />example@gmail.com</a>
                                        </div>
                                        <div className="pe-0">
                                            <a href="mailto:example@gmail.com" className="text-muted small"><i className="fa fa-clock text-primary me-2" />Mon - Sat: 8.00 am-7.00 pm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center text-lg-end">
                                    <div className="d-flex justify-content-end">
                                        <div className="d-flex align-items-center small">
                                            <a href="#" className="login-btn text-body me-3 pe-3"> <span>Login</span></a>
                                            <a href="#" className="text-body me-3"> Register</a>
                                        </div>
                                        <div className="d-flex pe-3">
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f" /></a>
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter" /></a>
                                            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram" /></a>
                                            <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-bar px-0 py-lg-0" style={{ height: 80 }}>
                            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                                <a href="#" className="navbar-brand-2">
                                    <h1 className="text-primary mb-0"><i className="fas fa-hand-rock me-2" /> Fitness</h1>
                                    {/* <img src="img/logo.png" alt="Logo"> */}
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav mx-0 mx-lg-auto">
                                        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                        <NavLink to="/course" className="nav-item nav-link">Courses</NavLink>
                                        <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                                <span className="dropdown-toggle">Pages</span>
                                            </a>
                                            <div className="dropdown-menu">
                                                <NavLink to="/feature" className="dropdown-item">Our Features</NavLink>
                                                <NavLink to="/team" className="dropdown-item">Our team</NavLink>
                                                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>

                                            </div>
                                        </div>
                                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                        <div className="nav-btn ps-3">
                                            <button className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search" /></button>
                                            <a href="#" className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"> <span>Get Quote</span></a>
                                        </div>
                                        <div className="nav-shaps-1" />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
        </div>
    )
}

export default AdminHeader
