import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

    const state = useSelector(state => state.user)

    return (
        <div>
            Home page {JSON.stringify(state)}
        </div>
    )
}

export default Home
