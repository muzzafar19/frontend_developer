import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import axios from 'axios'
import { toast } from 'react-toastify'


function Dashboard() {


    // get data
    const [data, setdata] = useState([])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/users")
        // console.log(res.data)
        setdata(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    // view data
    const [viewdata, setviewdata] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })


    // show data when function call
    const showdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/users/${id}`)
        // console.log(res.data)
        setviewdata(res.data)
    }


// delete data 
const deletedata = async (id)=>{
    try {
        const res = await axios.delete(`http://localhost:3000/users/${id}`)
        // console.log(res.data)
         toast.success("Data deleted successfully")
        fetchdata()
       
    } catch (error) {
        console.log(error, "api not found")
        toast.error("Data not deleted")
    }
}

    return (
        <div>
            <Aheader />
            <h1>HELLO THIS IS ADMIN SIDE DATA PANEL</h1>
            <h1>GYMNAST FITNESS WEBSITE</h1>


            <table className="table container table-bordered table-striped table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">pass</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td className='d-flex gap-3'>
                                    <button className='btn btn-info' onClick={()=>showdata(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">VIEW</button>
                                    <button className='btn btn-danger' onClick={()=>deletedata(data.id)}>DELETE</button></td>
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
                            <div className="container">
                                <h1>id : {viewdata.id}</h1>
                                <h1>name : {viewdata.name}</h1>
                                <h1>email : {viewdata.email}</h1>
                                <h1>password : {viewdata.password}</h1>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Dashboard
