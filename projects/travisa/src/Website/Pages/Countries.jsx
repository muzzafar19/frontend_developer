import React from 'react'
import Header from '../Comman/Header'
import Cohead from '../Comman/Cohead'
import Footer from '../Comman/Footer'

function Countries() {
    return (
        <div>
            <Header />
            <Cohead title="Our Countries Offer" subtitle="Countries" />
            {/* Countries We Offer Start */}
            <div className="container-fluid country overflow-hidden py-5">
                <div className="container py-5">
                    <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: 70 }}>
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                        </div>
                        <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/country-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/brazil.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="#" className="text-white fs-4">Brazil</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/country-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/india.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="#" className="text-white fs-4">india</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/country-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/usa.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="#" className="text-white fs-4">New York</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/country-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/italy.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="#" className="text-white fs-4">Italy</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Countries We Offer End */}
            <Footer />
        </div>
    )
}

export default Countries
