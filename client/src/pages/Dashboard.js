import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

    const {auth} = useSelector(state => ({...state}))

    return (
        <div>
            Home page {(auth.token)}
        </div>
    )
}

export default Home
