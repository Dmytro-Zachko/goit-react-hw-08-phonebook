
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";

const AuthNav = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/goit-react-hw-08-phonebook/" color="inherit" sx={{ textDecoration:"none" }}>
                  Home
                </Link>      
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ }}>
                        <Link href="/goit-react-hw-08-phonebook/register" color="inherit" sx={{ textDecoration:"none" }}>
                  Register
                </Link>      
          </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, marginLeft: "15px" }}>
              <Link href="/goit-react-hw-08-phonebook/login" color="inherit" sx={{ textDecoration:"none" }}>
                  Login
                </Link> 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        )
}
export default AuthNav  