import {  useSelector } from "react-redux/es/hooks/useSelector";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const IsLoggedIn = useSelector(getIsLoggedIn)
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            {IsLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </div>
    )
}

export default Navigation