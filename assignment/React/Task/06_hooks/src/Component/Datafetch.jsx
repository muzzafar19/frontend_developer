import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


const Datafetch = () => {
    const [data, setData] = useState([]);

    const fetchapi = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setData(res.data)
    }

    useEffect(() => {
        fetchapi();
    }, [])

    return (
        <div className="row">
            {data && data.map((data) => (
                <MDBCard className="col-md-4 col-lg-3">
                    <MDBCardImage src={data.image} position='top' alt='...' className="w-50 h-50"  />
                    <MDBCardBody>
                        <MDBCardTitle>{data.title}</MDBCardTitle>
                        <MDBCardText>
                            {data.description}
                        </MDBCardText>
                        <MDBBtn href='#'>{data.price}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            ))}
        </div>
    )
}
export default Datafetch;