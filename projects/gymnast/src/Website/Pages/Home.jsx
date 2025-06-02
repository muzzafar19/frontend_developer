import React, { useEffect, useState } from 'react'
import Coheader from '../Coman/Coheader'
import Header from '../Coman/Header'
import axios from 'axios'

function Home() {


    // class
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/class")
            // console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    // team
    const [team, setteam] = useState([])

    const fetchapi = async () => {
        try {
            const res = await axios.get("http://localhost:3000/team")
            console.log(res.data)
            setteam(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchapi()
    }, [])
    return (
        <div>
            <div>
                <Header />
                {/* Carousel Start */}
                <div className="container-fluid p-0">
                    <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h3 className="text-primary text-capitalize m-0">Gym &amp; Fitness Center</h3>
                                    <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                                    <a href className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h3 className="text-primary text-capitalize m-0">Gym &amp; Fitness Center</h3>
                                    <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Get Body In Shape</h2>
                                    <a href className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                            <span className="carousel-control-prev-icon" />
                        </a>
                        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                            <span className="carousel-control-next-icon" />
                        </a>
                    </div>
                </div>
                {/* Carousel End */}
                {/* Gym Class Start */}
                <div className="container gym-class mb-5">
                    <div className="row px-3">
                        {data && data.map((data) => {
                            return (
                                <div className="col-md-6 mt-3">
                                    <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                                        <img src={data.logo} alt="" />
                                        <h3 className="display-4 mb-3 text-white font-weight-bold">{data.title}</h3>
                                        <p>
                                            {data.desc}
                                        </p>
                                        <a href className="btn btn-lg btn-outline-light mt-4 px-4">{data.button}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Gym Class End */}
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
                {/* Subscribe Start */}
                <div className="subscribe container-fluid my-5 py-5 text-center">
                    <h4 className="display-4 text-white font-weight-bold mt-5 mb-3">Subscribe Our Newsletter</h4>
                    <p className="text-white mb-4">Subscribe and get Our latest article in your inbox</p>
                    <form className="form-inline justify-content-center mb-5">
                        <div className="input-group">
                            <input type="text" className="form-control-lg" placeholder="Your Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Subscribe End */}
                {/* Class Timetable Start */}
                <div className="container gym-feature py-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Class Timetable</h4>
                        <h4 className="display-4 font-weight-bold">Working Hours and Class Time</h4>
                    </div>
                    <div className="tab-class">
                        <ul className="nav nav-pills justify-content-center mb-4">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#class-all">All Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#class-cardio">Cardio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#class-crossfit">Crossfit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#class-powerlifting">Powerlifting</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="class-all" className="container tab-pane p-0 active">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-lg m-0">
                                        <thead className="bg-secondary text-white text-center">
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="class-cardio" className="container tab-pane fade p-0">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-lg m-0">
                                        <thead className="bg-secondary text-white text-center">
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                                <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="class-crossfit" className="container tab-pane fade p-0">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-lg m-0">
                                        <thead className="bg-secondary text-white text-center">
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                                <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td><h5>Power Lifting</h5>James Alien</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="class-powerlifting" className="container tab-pane fade p-0">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-lg m-0">
                                        <thead className="bg-secondary text-white text-center">
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                            </tr>
                                            <tr>
                                                <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                                <td />
                                                <td><h5>Cardio</h5>John Deo</td>
                                                <td />
                                                <td><h5>Crossfit</h5>Adam Phillips</td>
                                                <td />
                                                <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Class Timetable End */}
                {/* BMI Calculation Start */}
                <div className="container-fluid position-relative bmi my-5">
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6">
                                <div className="pr-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Body Mass Index </h4>
                                    <h4 className="display-4 text-white font-weight-bold mb-4">Whate is BMI?</h4>
                                    <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-secondary py-5">
                                <div className="py-5 px-3">
                                    <h1 className="mb-4 text-white">Calculate your BMI</h1>
                                    <form>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Weight (KG)" />
                                            </div>
                                            <div className="col form-group">
                                                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Height (CM)" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Age" />
                                            </div>
                                            <div className="col form-group">
                                                <select className="custom-select custom-select-lg bg-dark text-muted">
                                                    <option>Gender</option>
                                                    <option>Mal</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <input type="button" className="btn btn-lg btn-block btn-dark border-light" defaultValue="Calculate Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BMI Calculation End */}
                {/* Team Start */}
                <div className="container pt-5 team">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Our Trainers</h4>
                        <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                    </div>
                    <div className="row">
                      {team && team.map((team)=>{
                        return(
                              <div className="col-lg-3 col-md-6 mb-5">
                            <div className="card border-0 bg-secondary text-center text-white">
                                <img className="card-img-top" src={team.image} alt />
                                <div className="card-social d-flex align-items-center justify-content-center">
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="card-body bg-secondary">
                                    <h4 className="card-title text-primary">{team.name}</h4>
                                    <p className="card-text">{team.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                      })}



                    </div>
                </div>
                {/* Team End */}
                {/* Testimonial Start */}
                <div className="container-fluid position-relative testimonial my-5">
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
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
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
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
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
                                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
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
                                    <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
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
                    </div>
                </div>
                {/* Blog End */}
                {/* Footer Start */}
                <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
                    <div className="row pt-5">
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 className="text-primary mb-4">Get In Touch</h4>
                            <p><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
                            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 className="text-primary mb-4">Quick Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />About Us</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Our Features</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Classes</a>
                                <a className="text-white" href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 className="text-primary mb-4">Popular Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />About Us</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Our Features</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Classes</a>
                                <a className="text-white" href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 className="text-primary mb-4">Opening Hours</h4>
                            <h5 className="text-white">Monday - Friday</h5>
                            <p>8.00 AM - 8.00 PM</p>
                            <h5 className="text-white">Saturday - Sunday</h5>
                            <p>2.00 PM - 8.00 PM</p>
                        </div>
                    </div>
                    <div className="container border-top border-dark pt-5">
                        <p className="m-0 text-center text-white">
                            © <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
                            <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                </div>
                {/* Footer End */}
            </div>
            {/* Back to Top */}
            <a href="#" className="btn btn-outline-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
        </div>
    )
}

export default Home
