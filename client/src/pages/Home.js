import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <div>
            Home page {JSON.stringify(auth)}
            
        </div>
    )
}

export default Home
