import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';




const Register = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    async function handelSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5050/api/register', {
                name,
                email,
                password

            })
            console.log("resssssss", res)
            toast.success("Register success")
            navigate("/login")

        } catch (error) {
            console.log(error)
            toast.error(error.response.data)





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
