import React from 'react'
import Footer from '../Coman/Footer'
import Header from '../Coman/Header'
import Coheader from '../Coman/Coheader'

function Bloggrid() {
    return (
        <div>
            <Header />
            <Coheader title="Our Blog" subtitle="home" desc="our blog" />
            {/* Blog Start */}
            <div className="container pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Our Blog</h4>
                    <h4 className="display-4 font-weight-bold">Latest Article From Blog</h4>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5 blog-item">
                        <img className="img-fluid mb-4" src="img/blog-1.jpg" alt="Image" />
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 80, height: 80 }}>
                                <small>01</small>
                                <strong className="text-uppercase m-0 text-white">Jan</strong>
                                <small>2045</small>
                            </div>
                            <div className="pl-3">
                                <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                                <div className="d-flex">
                                    <small className="mr-2 text-muted"><i className="fa fa-user" /> Admin</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-folder" /> Web Design</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-comments" /> 15 Comments</small>
                                </div>
                            </div>
                        </div>
                        <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                        <a className="btn btn-outline-primary mt-2 px-3" href>Read More <i className="fa fa-angle-right" /></a>
                    </div>
                    <div className="col-lg-6 mb-5 blog-item">
                        <img className="img-fluid mb-4" src="img/blog-2.jpg" alt="Image" />
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 80, height: 80 }}>
                                <small>01</small>
                                <strong className="text-uppercase m-0 text-white">Jan</strong>
                                <small>2045</small>
                            </div>
                            <div className="pl-3">
                                <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                                <div className="d-flex">
                                    <small className="mr-2 text-muted"><i className="fa fa-user" /> Admin</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-folder" /> Web Design</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-comments" /> 15 Comments</small>
                                </div>
                            </div>
                        </div>
                        <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                        <a className="btn btn-outline-primary mt-2 px-3" href>Read More <i className="fa fa-angle-right" /></a>
                    </div>
                    <div className="col-lg-6 mb-5 blog-item">
                        <img className="img-fluid mb-4" src="img/blog-1.jpg" alt="Image" />
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 80, height: 80 }}>
                                <small>01</small>
                                <strong className="text-uppercase m-0 text-white">Jan</strong>
                                <small>2045</small>
                            </div>
                            <div className="pl-3">
                                <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                                <div className="d-flex">
                                    <small className="mr-2 text-muted"><i className="fa fa-user" /> Admin</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-folder" /> Web Design</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-comments" /> 15 Comments</small>
                                </div>
                            </div>
                        </div>
                        <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                        <a className="btn btn-outline-primary mt-2 px-3" href>Read More <i className="fa fa-angle-right" /></a>
                    </div>
                    <div className="col-lg-6 mb-5 blog-item">
                        <img className="img-fluid mb-4" src="img/blog-2.jpg" alt="Image" />
                        <div className="d-flex align-items-center mb-4">
                            <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: 80, height: 80 }}>
                                <small>01</small>
                                <strong className="text-uppercase m-0 text-white">Jan</strong>
                                <small>2045</small>
                            </div>
                            <div className="pl-3">
                                <h3 className="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                                <div className="d-flex">
                                    <small className="mr-2 text-muted"><i className="fa fa-user" /> Admin</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-folder" /> Web Design</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-comments" /> 15 Comments</small>
                                </div>
                            </div>
                        </div>
                        <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                        <a className="btn btn-outline-primary mt-2 px-3" href>Read More <i className="fa fa-angle-right" /></a>
                    </div>
                    <div className="col-lg-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center mb-4">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            <Footer />
        </div>
    )
}

export default Bloggrid
