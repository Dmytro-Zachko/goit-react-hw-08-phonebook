import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { getUSerName } from "redux/auth/auth-selectors";

const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(getUSerName)

    return (
        <div>
            <span> Welcome, {name} </span>
            <button type="button"  onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}
export default UserMenu