import { useSelector } from "react-redux";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { getIsLoggedIn } from "redux/auth/auth-selectors";

const AppBar = () => {
    const IsLoggedIn = useSelector(getIsLoggedIn)
  
    
    return (
        <header>
            {IsLoggedIn ? <UserMenu /> : <AuthNav />}      
     </header>  
    
    )
}
export default AppBar