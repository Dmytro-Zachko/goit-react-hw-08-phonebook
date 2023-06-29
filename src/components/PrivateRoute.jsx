import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn,getRefreshUser } from "redux/auth/auth-selectors";
import { Component } from "react";

const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const IsLoggedIn = useSelector(getIsLoggedIn)
    const RefreshUser = useSelector(getRefreshUser)
    const shouldRedirect = !IsLoggedIn && !RefreshUser

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
        
    
}
export default PrivateRoute