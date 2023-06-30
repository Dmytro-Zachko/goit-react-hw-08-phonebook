import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { getUSerName } from "redux/auth/auth-selectors";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";

const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(getUSerName)

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/goit-react-hw-08-phonebook/" color="inherit" sx={{ textDecoration:"none" }}>
                  Home
                </Link>      
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 30 }}>
                        <Link href="/goit-react-hw-08-phonebook/contacts" color="inherit" sx={{ textDecoration:"none" }}>
                  Contacts
                </Link>      
          </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, marginRight: "15px" }}>
            Welcome, {name}
          </Typography>
                    <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default UserMenu