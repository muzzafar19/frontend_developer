import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();


        if (!name || !email || !password) {
            alert("all feilds are mednatory!!")
            return;
        }

        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert("registration successful");
        navigate('/login')
    }
    return (
       <div style={{ height: "365px", width: "400px", borderRadius: "10px", background: "black", margin: "0 auto", }}>
            <form onSubmit={handleRegister} action="" style={{ padding: "100px", }}>
                <input style={{ margin: "10px" }}
                    type="text"
                    name=""
                    id=""
                    placeholder='enter your name'
                    value={name}
                    onChange={(e)=> setname(e.target.value)}/><br />
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
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}/><br />
                <button  style={{ margin: "10px" }} type='submit' name='' id='' className='align-enter btn btn-danger'>Register</button>
            </form>
            <h1 style={{ textAlign: "center", marginTop: "25px" }}>USER REGISTRATION PAGE</h1>
        </div>
    )
}

export default Register;


