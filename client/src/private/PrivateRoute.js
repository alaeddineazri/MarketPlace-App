import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const auth =useSelector((state) => state.auth)


    if (auth.user) {
        return children
    }

    return <Navigate to="/login" />
}