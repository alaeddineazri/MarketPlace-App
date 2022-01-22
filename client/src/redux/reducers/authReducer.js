
let initState = {
}

if (window.localStorage.getItem("auth")) {
    initState=JSON.parse(window.localStorage.getItem("auth"))
} else{
    initState =null
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