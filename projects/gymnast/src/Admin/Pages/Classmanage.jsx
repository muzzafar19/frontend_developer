import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Classmanage() {


    // read data 
    const [data, setdata] = useState([])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/class")
        // console.log(res.data)
        setdata(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    //  view data
    const [viewdata, setviewdata] = useState({
        id: "",
        logo: "",
        title: "",
        desc: "",
        button: ""
    })

    // show data when function call
    const showdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/class/${id}`)
        // console.log(res.data)
        setviewdata(res.data)
    }


    // delete data
    const deletedata = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/class/${id}`)
            console.log(res.data)
            fetchdata()
            toast.success("Data deleted successfully")
        } catch (error) {
            console.log(error, "api not found")
            toast.error("Data not deleted")
        }
    }


    // update /edit data

const redirect = useNavigate()

    const [editdata, seteditdata] = useState({
        id: "",
        logo: "",
        title: "",
        desc: "",
        button: ""
    })

    const handleedit = (e) => {
        seteditdata({ ...editdata, [e.target.name]: e.target.value });
    }


    const seedata = async (id) => {
        const res = await axios.get(`http://localhost:3000/class/${id}`)
        setviewdata(res.data)
        seteditdata(res.data)
    }

    const updatedata = async () => {
        try {
            await axios.put(`http://localhost:3000/class/${editdata.id}`, editdata)
            toast.success("data change successfully")
            fetchdata();
            redirect("/classmanage")
        } catch (error) {
            toast.error("failed to update data!!")
        }
    }
    return (
        <div>
            <Aheader />
            <h1>HELLO THIS IS CLASS MANAGE DATA</h1>
            <h1>GYMNAST FITNESS WEBSITE</h1>
            <table className="table  table-bordered table-striped table-hover mt-5">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">id</th>
                        <th scope="col">logo</th>
                        <th scope="col">title</th>
                        <th scope="col">desc</th>
                        <th scope="col">button</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td><img src={data.logo} alt="" style={{ width: '80px', height: '60px', objectFit: 'cover' }} /></td>
                                <td>{data.title}</td>
                                <td>{data.desc}</td>
                                <td>{data.button}</td>
                                <td className='d-flex gap-3 '><button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showdata(data.id)} >VIEW</button>
                                    <button
                                        className='btn btn-success'
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={() => seedata(data.id)}
                                    >
                                        EDIT
                                    </button>

                                    <button className='btn btn-danger' onClick={() => deletedata(data.id)} >DELETE</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                                    <img src={viewdata.logo} alt="" />
                                    <h3 className="display-4 mb-3 text-white font-weight-bold">{viewdata.title}</h3>
                                    <p>
                                        {viewdata.desc}
                                    </p>
                                    <a href className="btn btn-lg btn-outline-light mt-4 px-4">{viewdata.button}</a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>


            {/* EDIT Modal */}
            <div className="modal fade" id="editModal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Class</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="logo" value={editdata.logo} onChange={handleedit} className="form-control mb-2" placeholder="Logo URL" />
                            <input type="text" name="title" value={editdata.title} onChange={handleedit} className="form-control mb-2" placeholder="Title" />
                            <textarea name="desc" value={editdata.desc} onChange={handleedit} className="form-control mb-2" placeholder="Description"></textarea>
                            <input type="text" name="button" value={editdata.button} onChange={handleedit} className="form-control mb-2" placeholder="Button" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={updatedata}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Classmanage
