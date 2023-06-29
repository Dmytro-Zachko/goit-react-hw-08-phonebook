import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn } from "redux/auth/auth-operations";
import { Link, NavLink } from "react-router-dom";

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
    <div>
        
        <h1>Сторінка логіна</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
    
        <label >
    Email
     <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />   
    </label>
        <label >
    Password
    <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />    
        </label>

<button type="submit"> LogIn  </button>

         <NavLink to="/register">
                <button type="button">
                  Create a new account
                </button>
            </NavLink>
            </form>
    </div>
)
}
export default LoginForm
