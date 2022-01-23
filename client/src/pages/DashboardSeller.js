import React from 'react'
import { useSelector } from 'react-redux'
import DashboardNav from '../components/DashboardNav'


const DashboardSeller = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <div>
            <DashboardNav />
        </div>
    )
}

export default DashboardSeller
