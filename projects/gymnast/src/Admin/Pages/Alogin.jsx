import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Alogin() {

    const navigate = useNavigate()
    const [email,setemail]= useState('')
    const [pass, setpass]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!email || !pass){
            alert("please fill the both feilds")
            return;
        }

        if(email === "admin@gmail.com" && pass === "admin1234"){
            alert("login successful")
            localStorage.setItem("admin-auth",'true');
            navigate("/dash")
        }
        else{
            alert("login failed!!")
        }
    }
    return (
        <div style={{ height: "365px", width: "400px", borderRadius: "10px", background: "black", margin: "0 auto", }}>
            <form onSubmit={handleSubmit} action="" style={{ padding: "100px", }}>
                <input style={{ margin: "10px" }}
                    type="email"
                    name=""
                    id=""
                    placeholder='enter your email'
                    value={email}
                    onChange={(e)=> setemail(e.target.value)}/><br />
                <input style={{ margin: "10px" }}
                    type="password"
                    name=""
                    id=""
                    placeholder='enter your pass'
                    value={pass}
                    onChange={(e)=> setpass(e.target.value)}/><br />
                <button  style={{ margin: "10px" }} type='submit' name='' id='' className='align-enter btn btn-danger'>Login</button>
            </form>
            <h1 style={{ textAlign: "center", marginTop: "25px" }}>ADMIN LOGIN PAGE</h1>
        </div>
    )
}

export default Alogin
