import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    return (
        <div className="container-fluid bg-light p-4 ">
        <h1 className="text-center">Login</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <LoginForm
                        // handelSubmit={handelSubmit}
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

export default Login
