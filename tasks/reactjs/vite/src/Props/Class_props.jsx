import React, { Component } from "react";


class Class_props extends Component {
    constructor(props) {
        super(props);
        this.data = (props);
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">{this.data.btn}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Class_props;