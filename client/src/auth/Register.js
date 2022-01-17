import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'       


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handelSubmit = async (e) => {
        e.preventDefault() 
        try {
            const res = axios.post('http://localhost:5050/api/register',{
                name,
                email,
                password

            })
            console.table("res register",res)
        } catch (error) {
            console.log(error)
        }
        
    }





    return (
        <div className="container-fluid bg-secondary p-4 ">
            <h1 className="text-center">Register</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <RegisterForm 
                        handelSubmit={handelSubmit} 
                        name={name} 
                        setName={setName} 
                        email={email} 
                        setEmail={setEmail} 
                        password={password} 
                        setPassword={setPassword} 

                    />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register
