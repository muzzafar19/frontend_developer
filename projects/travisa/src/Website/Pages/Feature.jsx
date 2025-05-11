import React from 'react'
import Header from '../Comman/Header'
import Cohead from '../Comman/Cohead'
import Footer from '../Comman/Footer'

function Feature() {
    return (
        <div>
            <Header />
            <Cohead title="Our Feature" subtitle="Feature" />
            {/* Features Start */}
            <div className="container-fluid features overflow-hidden py-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                        </div>
                        <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4 justify-content-center text-center">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-item text-center p-4">
                                <div className="feature-icon p-3 mb-4">
                                    <i className="fas fa-dollar-sign fa-4x text-primary" />
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Cost-Effective</h5>
                                    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                    <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-item text-center p-4">
                                <div className="feature-icon p-3 mb-4">
                                    <i className="fab fa-cc-visa fa-4x text-primary" />
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Visa Assistance</h5>
                                    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                    <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-item text-center p-4">
                                <div className="feature-icon p-3 mb-4">
                                    <i className="fas fa-atlas fa-4x text-primary" />
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Faster Processing</h5>
                                    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                    <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="feature-item text-center p-4">
                                <div className="feature-icon p-3 mb-4">
                                    <i className="fas fa-users fa-4x text-primary" />
                                </div>
                                <div className="feature-content d-flex flex-column">
                                    <h5 className="mb-3">Direct Interviews</h5>
                                    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                    <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}

            <Footer />
        </div>
    )
}

export default Feature
