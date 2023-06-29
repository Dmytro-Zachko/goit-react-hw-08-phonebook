import { useSelector } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { getIsLoggedIn } from "redux/auth/auth-selectors";

const AppBar = () => {
    const IsLoggedIn = useSelector(getIsLoggedIn)
    
    return (
        <header>
            <Navigation />
    {IsLoggedIn ? <UserMenu/> : <AuthNav/>}        
     </header>   
    )
}
export default AppBar