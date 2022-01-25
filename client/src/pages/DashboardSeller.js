import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'
import { createConnectAccount } from "../redux/actions/stripe"
import { toast } from "react-toastify"
import { useState, useEffect } from "react";


const DashboardSeller = () => {

    const { auth } = useSelector(state => ({ ...state }))


    const [loading, setLoading] = useState(false);


    const handelClick = async () => {
        setLoading(true)
        try {
            let res = await createConnectAccount(auth.token);
            console.log(res); // get login link
            window.location.href = res.data;
        } catch (error) {
            console.log(error)
            toast.error("stripe connect failed")
            setLoading(false)
        }
    }


    return (
        <div>
            <ConnectNav />
            <DashboardNav />



            {auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.charge_enabled ?
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">                 {/*!!!!!!!!!   too components */}
                            <h1>YOUR BOOKINGS</h1>
                        </div>
                        <div className="col-md-2">
                            <Link to="/hotels/new" className="btn btn-primary p-3 m-2">+ ADD NEW</Link>
                        </div>
                    </div>
                </div>
                :
                <div className="container-fluid">                        {/*!!!!!!!!!   too components */}
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <div className="p-5 pointer">
                                <h4>Setup payouts to post hotel rooms</h4>
                                <p className="lead">
                                    application Name partners with stripe to transfer earnings to your bank
                                    account
                                </p>
                                <button
                                    disable={loading}
                                    onClick={handelClick} className="btn btn-primary mb-3">
                                    {loading ? "Processing..." : "Setup Payouts"}
                                </button>
                                <p className="text-muted">
                                    <small>
                                        You'll be redirected to Stripe to complete the onboarding
                                        process.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default DashboardSeller
