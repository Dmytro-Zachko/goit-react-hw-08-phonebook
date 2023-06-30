import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn } from "redux/auth/auth-operations";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

const LoginForm = () => {
 const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));

    clearForm();
  };
return (
//     <div>
        
//         <h1>Сторінка логіна</h1>

//         <form onSubmit={handleSubmit} autoComplete="off">
    
//         <label >
//     Email
//      <input
//                 type="text"
//                 placeholder="Email"
//                 name="email"
//                 value={email}
//                 onChange={handleInputChange}
//               />   
//     </label>
//         <label >
//     Password
//     <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={password}
//                 onChange={handleInputChange}
//               />    
//         </label>

// <button type="submit"> LogIn  </button>

//          <NavLink to="/register">
//                 <button type="button">
//                   Create a new account
//                 </button>
//             </NavLink>
//             </form>
//   </div>
  
  <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            autoFocus
            onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/goit-react-hw-08-phonebook/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                 <Link href="/goit-react-hw-08-phonebook/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
)
}
export default LoginForm
