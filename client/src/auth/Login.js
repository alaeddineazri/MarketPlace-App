import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import { toast } from 'react-toastify'
import { login } from '../redux/actions/auth'
import { useDispatch } from 'react-redux';


const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handelSubmit = async (e) => {
        e.preventDefault()
        console.log("send login data ", { password, email })

        try {
            const res = await login({
                password,
                email
            })
            if (res.data) {
                console.log("data ", res)
                // save user & token to local storage
                window.localStorage.setItem("auth", JSON.stringify(res.data))
                dispatch({
                    type:"LOGIN",
                    payload:res.data,
                })
                // navigate("/")
            }
            console.log("res.data", res.data)
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(error.response.data)
            }
        }
    }


    return (
        <div className="container-fluid bg-light p-4 ">
            <h1 className="text-center">Login</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm
                            handelSubmit={handelSubmit}
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
