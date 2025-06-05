import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setLoggedInUser}) {

    const [email,setEmail]=useState('')
    const[passWord,setpassWord]=useState('')
    const navigate = useNavigate()

    const handlelogin = (e) =>{
        e.preventDefault();

        const storeduser = JSON.parse(localStorage.getItem('user'));

        if(storeduser?.email === email && storeduser?.password === passWord){
            alert("login successful")
            setLoggedInUser(storeduser)
            navigate('/')
        }else{
            alert("login failed due to wrong email or pass!!")
        }
    }
  return (
   <div style={{ height: "365px", width: "400px", borderRadius: "10px", background: "black", margin: "0 auto", }}>
            <form onSubmit={handlelogin} action="" style={{ padding: "100px", }}>
            
                <input style={{ margin: "10px" }}
                    type="email"
                    name=""
                    id=""
                    placeholder='enter your email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/><br />
                    <input style={{ margin: "10px" }}
                    type="password"
                    name=""
                    id=""
                    placeholder='enter your pass'
                    value={passWord}
                    onChange={(e)=> setpassWord(e.target.value)}/><br />
                <button  style={{ margin: "10px" }} type='submit' name='' id='' className='align-enter btn btn-danger'>Login</button>
            </form>
            <h1 style={{ textAlign: "center", marginTop: "25px" }}>USER LOGIN PAGE</h1>
        </div>
  )
}

export default Login;
