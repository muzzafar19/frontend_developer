import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import axios from 'axios'
import { toast } from 'react-toastify'

function Teammanage() {


    // read data
    // get data
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        // console.log(res.data)
        setdata(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    // view data
    const [viewdata, setviewdata] = useState({
        id: "",
        image: "",
        name: "",
        desc: ""
    })


    // show data when function call
    const showdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/team/${id}`)
        // console.log(res.data)
        setviewdata(res.data)
    }

    // delete data
    const handledelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/team/${id}`)
            console.log(res.data)
            toast.success("Data deleted successfully")
            fetchdata()

        } catch (error) {
            console.log(error, "api not found")
            toast.error("Data not deleted")
        }
    }


    // edit/update data

    const [editdata, seteditdata] = useState({
        id: "",
        image: "",
        name: "",
        desc: ""
    })

    const handleupdate = (e) => {
        seteditdata({ ...editdata, [e.target.name]: e.target.value })
    }

    const opendata = async (id) => {
        const res = await axios.get(`http://localhost:3000/team/${id}`)
        setviewdata(res.data)
        seteditdata(res.data)
    }

    const updatedataa = async () => {
        try {
            await axios.put(`http://localhost:3000/team/${editdata.id}`, editdata)
            toast.success("data update successfully")
        } catch (error) {
            toast.error("data not update !!")
        }
    }
    return (
        <div>
            <Aheader />
            <h1>HELLO THIS IS TEAM MANAGE DATA</h1>
            <h1>GYMNAST FITNESS WEBSITE</h1>
            <table className="table table-bordered table-striped table-hover mt-5">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">id</th>
                        <th scope="col">image</th>
                        <th scope="col">name</th>
                        <th scope="col">desc</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => {
                        return (
                            <tr className='text-center' key={data.id}>
                                <td>{data.id}</td>
                                <td><img src={data.image} alt={data.image} style={{ width: '80px', height: '60px', objectFit: 'cover' }} /></td>
                                <td>{data.name}</td>
                                <td>{data.desc}</td>
                                <td className='d-flex gap-3'><button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showdata(data.id)}>VIEW</button>
                                    <button
                                        className='btn btn-success'
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={() => opendata(data.id)}
                                    >
                                        EDIT
                                    </button>

                                    <button className='btn btn-danger' onClick={() => handledelete(data.id)}>DELETE</button>
                                </td>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">TEAM EXPERT DATA</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-5">
                                <div className="card border-0 bg-secondary text-center text-white">
                                    <img className="card-img-top" src={viewdata.image} alt="" />
                                    <div className="card-social d-flex align-items-center justify-content-center">
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: 40, height: 40 }} href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="card-body bg-secondary">
                                        <h4 className="card-title text-primary">{viewdata.name}</h4>
                                        <p className="card-text">{viewdata.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>



            {/* EDIT MODAL */}
            <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel">Edit Team Member</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                name="image"
                                value={editdata.image}
                                onChange={handleupdate}
                                className="form-control mb-2"
                                placeholder="Image URL"
                            />
                            <input
                                type="text"
                                name="name"
                                value={editdata.name}
                                onChange={handleupdate}
                                className="form-control mb-2"
                                placeholder="Name"
                            />
                            <textarea
                                name="desc"
                                value={editdata.desc}
                                onChange={handleupdate}
                                className="form-control mb-2"
                                placeholder="Description"
                            ></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    updatedataa();
                                    fetchdata();
                                }}
                                data-bs-dismiss="modal"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teammanage
