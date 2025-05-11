import React from 'react'
import { Link } from 'react-router-dom'

function Cohead({title,subtitle,}) {
    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-primary">{subtitle}</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}

        </div>
    )
}

export default Cohead
