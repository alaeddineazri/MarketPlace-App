
const initState = { name :"alaa"
    
}



const autReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            return { ...state, ...payload }
        case "LOGOUT":
            return {payload}
        default :
            return state
    }

}

export default autReducer