import React from 'react'
import Footer from '../Coman/Footer'
import Header from '../Coman/Header'
import Coheader from '../Coman/Coheader'

function Feature() {
    return (
        <div>
            <Header />
            <Coheader title="Our Feature" subtitle="home" desc="our feature"/>
            <div>
                {/* GYM Feature Start */}
                <div className="container feature pt-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                        <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image" />
                                    <i className="flaticon-barbell" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Videos Instruction</h4>
                                    <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image" />
                                    <i className="flaticon-training" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Training Calendar</h4>
                                    <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image" />
                                    <i className="flaticon-trends" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Free Apps &amp; WiFi</h4>
                                    <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image" />
                                    <i className="flaticon-support" />
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Community Support</h4>
                                    <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* GYM Feature End */}
                {/* Testimonial Start */}
                <div className="container-fluid position-relative testimonial mt-5" style={{ marginBottom: 90 }}>
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6 bg-secondary">
                                <div className="d-flex align-items-center px-3" style={{ minHeight: 450 }}>
                                    <div id="carouselId" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselId" data-slide-to={0} className="active" />
                                            <li data-target="#carouselId" data-slide-to={1} />
                                            <li data-target="#carouselId" data-slide-to={2} />
                                        </ol>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <div className="d-flex align-items-center mb-4 text-white">
                                                    <img width={80} height={80} className="rounded-circle bg-dark p-2" src="img/testimonial-1.jpg" alt="Image" />
                                                    <div className="pl-4">
                                                        <h4 className="text-primary">Client Name</h4>
                                                        <p className="m-0">Profession</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita
                                                    lorem. Dolores tempor voluptua ipsum sanctus clita
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="d-flex align-items-center mb-4 text-white">
                                                    <img width={80} height={80} className="rounded-circle bg-dark p-2" src="img/testimonial-2.jpg" alt="Image" />
                                                    <div className="pl-4">
                                                        <h4 className="text-primary">Client Name</h4>
                                                        <p className="m-0">Profession</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita
                                                    lorem. Dolores tempor voluptua ipsum sanctus clita
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="d-flex align-items-center mb-4 text-white">
                                                    <img width={80} height={80} className="rounded-circle bg-dark p-2" src="img/testimonial-3.jpg" alt="Image" />
                                                    <div className="pl-4">
                                                        <h4 className="text-primary">Client Name</h4>
                                                        <p className="m-0">Profession</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita
                                                    lorem. Dolores tempor voluptua ipsum sanctus clita
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="pl-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Testimonial</h4>
                                    <h4 className="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                                    <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita
                                        lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />
        </div>
    )
}

export default Feature
