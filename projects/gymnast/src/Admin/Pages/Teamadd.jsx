import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Teamadd() {

    const redirect = useNavigate();

    const [data, setdata] = useState({
        id: "",
        image: "",
        name: "",
        desc: ""
    })



    const getchange = (e) => {
        setdata({
            ...data,
            id: new Date().getTime().toString(),
            [e.target.name]: [e.target.value]
        })
    }


    const adddata = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/team", data)
            console.log(res.data)
            setdata({
                id: "",
                image: "",
                name: "",
                desc: ""
            })
            toast.success("Data added successfully")
            redirect("/teammanage")


        } catch (error) {
            console.log(error, "api not found")
            toast.error("Data not added")
        }
    }
    return (
        <div>

            <form onSubmit={adddata} className='container mt-5 col-6 border p-5' >
                <h1 className='text-center'>ADD TEAM DATA</h1>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label" >image</label>
                    <input type="url" name='image' value={data.image} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" name='name' value={data.name} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">description</label>
                    <input type="text" name='desc' value={data.desc} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-success" >Submit</button>
            </form>

        </div>
    )
}

export default Teamadd
