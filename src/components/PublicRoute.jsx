import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const IsLoggedIn = useSelector(getIsLoggedIn)

    return IsLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute