import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Classadd() {


    const redirect = useNavigate();


    const [data,setdata]= useState ({
        id: "",
        logo: "",
        title: "",
        desc: "",
        button: ""
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
            const res = await axios.post("http://localhost:3000/class", data)
            setdata({
                id: "",
                logo: "",
                title: "",
                desc: "",
                button: ""
            })
            redirect("/classmanage")
            toast.success("Data added successfully")
        } catch (error) {
            console.log(error, "api not found")
            toast.error("Data not added")

        }
    }
    return (
        <div>
            <form className='container mt-5 col-6 border p-5' onSubmit={adddata}>
                <h1 className='text-center'>ADD CLASS DATA</h1>
                <div className="mb-3">
                    <label htmlFor="logo" className="form-label" >logo</label>
                    <input type="url" name='logo' value={data.logo} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" name='title' value={data.title} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">desc</label>
                    <input type="text" name='desc' value={data.desc} onChange={getchange}  className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="button" className="form-label">button</label>
                    <input type="text" name='button' value={data.button} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-success" >Submit</button>
            </form>
        </div>
    )
}

export default Classadd
