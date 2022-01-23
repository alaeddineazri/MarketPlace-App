import React from 'react'
import { useSelector } from 'react-redux'
import DashboardNav from '../components/DashboardNav'


const Dashboard = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <div>
            <DashboardNav />
        </div>
    )
}

export default Dashboard
