import React from 'react'
import { useSelector } from 'react-redux'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav'


const Dashboard = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <div>
            <ConnectNav />
            <DashboardNav />
        </div>
    )
}

export default Dashboard
