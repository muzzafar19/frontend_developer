import React, { useEffect, useState } from 'react'
import Footer from '../Coman/Footer'
import Header from '../Coman/Header'
import Coheader from '../Coman/Coheader'
import axios from 'axios'

function About() {


    const [data, setdata] = useState([])

    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        // console.log(res.data)
        setdata(res.data)
    }

    useEffect(() => {
        getdata()
    })
    return (
        <div>
            <Header />
            <Coheader title="About Us" subtitle="home" desc="about us" />
            <div>
                {/* About Start */}
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                            <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                            <div className="row py-2">
                                <div className="col-sm-6">
                                    <i className="flaticon-barbell display-2 text-primary" />
                                    <h4 className="font-weight-bold">Certified GYM Center</h4>
                                    <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="flaticon-medal display-2 text-primary" />
                                    <h4 className="font-weight-bold">Award Winning</h4>
                                    <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                                </div>
                            </div>
                            <a href className="btn btn-lg px-4 btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Features Start */}
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                                <i className="flaticon-training display-3 text-primary mr-3" />
                                <div className>
                                    <h2 className="text-white mb-3">Progression</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: 300 }}>
                                <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
                                <div className>
                                    <h2 className="text-white mb-3">Workout</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: 300 }}>
                                <i className="flaticon-treadmill display-3 text-primary mr-3" />
                                <div className>
                                    <h2 className="text-white mb-3">Nutrition</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Team Start */}
                <div className="container pt-5 team">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Our Trainers</h4>
                        <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                    </div>
                    <div className="row">
                      {data && data.map((data)=>{
                        return(
                              <div className="col-lg-3 col-md-6 mb-5">
                            <div className="card border-0 bg-secondary text-center text-white">
                                <img className="card-img-top" src={data.image} style={{height:"400px"}} alt />
                                <div className="card-social d-flex align-items-center justify-content-center">
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="card-body bg-secondary">
                                    <h4 className="card-title text-primary">{data.name}</h4>
                                    <p className="card-text">{data.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                      })}
                       
                      
                        
                    </div>
                </div>
                {/* Team End */}
            </div>
            <Footer />
        </div>
    )
}

export default About
