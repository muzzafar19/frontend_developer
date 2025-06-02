import React from 'react'

function Coheader({title,subtitle,desc}) {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">{title}</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href>{subtitle}</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">{desc}</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
        </div>
    )
}

export default Coheader
