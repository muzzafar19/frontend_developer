import React from 'react'
import Header from '../Comman/Header'
import Cohead from '../Comman/Cohead'
import Footer from '../Comman/Footer'
import { Helmet } from 'react-helmet'

function Testimonial() {
    return (
        <div>
            <Helmet>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="js/main.js"></script>
            </Helmet>
            <Header />
            <Cohead title="Our Testimonial" subtitle="Testimonial" />
            {/* Testimonial Start */}
            <div className="container-fluid testimonial overflow-hidden py-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
                        </div>
                        <h1 className="display-5 mb-4">What Our Clients Say</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow zoomInDown" data-wow-delay="0.2s">
                        <div className="testimonial-item">
                            <div className="testimonial-content p-4 mb-5">
                                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img" />
                                </div>
                                <div className="my-auto">
                                    <h5>Person Name</h5>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-content p-4 mb-5">
                                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
                                </div>
                                <div className="my-auto">
                                    <h5>Person Name</h5>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-content p-4 mb-5">
                                <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                    <i className="fas fa-star text-secondary" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
                                </div>
                                <div className="my-auto">
                                    <h5>Person Name</h5>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            <Footer />
        </div>
    )
}

export default Testimonial
