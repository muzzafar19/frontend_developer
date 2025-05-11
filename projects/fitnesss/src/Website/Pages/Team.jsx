import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Cohead from '../Comman/Cohead'
import Footer from '../Comman/Footer'
import axios from 'axios';

function Team() {


    const [team, setteam] = useState([]);


    const fetchapi = async () => {
        const res = await axios.get("http://localhost:3000/team")
        // console.log(res.data)
        setteam(res.data)
    }

    useEffect(() => {
        fetchapi();
    }, [])
    
    return (
        <div>
            <Header />
            <Cohead title="Our Team" subtitle="Team" />
            {/* Team Start */}
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Our Trainer</h4>
                        <h1 className="display-4 mb-4">Meet Our Amazing Team</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row gy-5 gy-lg-4 gx-4">
                        {team && team.map((team)=>(
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={team.img} className="img-fluid w-100" alt="Image" />
                                    <div className="team-icon">
                                        <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-facebook-f" /></a>
                                        <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-twitter" /></a>
                                        <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-instagram" /></a>
                                        <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>{team.name}</h4>
                                    <p className="mb-0">{team.profession}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />
        </div>
    )
}

export default Team
