import React, { useEffect, useState } from 'react'
import Footer from '../Coman/Footer'
import Header from '../Coman/Header'
import Coheader from '../Coman/Coheader'
import axios from 'axios'

function Class() {

  const [data, setdaat] =useState([])

  const fetchdata = async ()=>{
    const res = await axios.get("http://localhost:3000/class")
    // console.log(res.data)
    setdaat(res.data)
  }


  useEffect(()=>{
    fetchdata()
  },[])

    return (
        <div>
            <Header/>
            <Coheader title="Our Class" subtitle="home" desc="our class"/>
            <div>
                {/* Gym Class Start */}
                <div className="container gym-class mb-5" style={{ marginTop: 90 }}>
                    <div className="row px-3 ">
                        {data && data.map((data)=>{
                            return(
                                <div className="col-md-6 mb-4" key={data.id}>
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
                <div className="container-fluid position-relative bmi mt-5" style={{ marginBottom: 90 }}>
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
            </div>
            <Footer/>
        </div>
    )
}

export default Class
