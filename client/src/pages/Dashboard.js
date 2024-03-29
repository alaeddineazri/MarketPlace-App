import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'


const Dashboard = () => {

    const { auth } = useSelector(state => ({ ...state }))

    return (
        <div>
            <ConnectNav />
            <DashboardNav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h1>YOUR BOOKINGS</h1>
                    </div>
                    <div className="col-md-2">
                        <Link to="/"className="btn btn-primary p-3 m-2">Browse Hotels</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
