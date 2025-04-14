import React from 'react'

export default function Function_props({img,title,desc,btn}) {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">{btn}</a>
                </div>
            </div>
        </div>
    )
}
