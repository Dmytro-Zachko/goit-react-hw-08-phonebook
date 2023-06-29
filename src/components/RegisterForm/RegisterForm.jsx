import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "redux/auth/auth-operations";
import {  NavLink } from "react-router-dom";

const RegisterForm = () => {
const dispatch = useDispatch();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

      const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'nickname') {
      setNickname(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };
    
    const ClearForm = () => {
        setEmail('')
        setNickname('')
        setPassword('')
    }

      const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: nickname,
        email,
        password,
      })
    );

    ClearForm();
  };
    
    return (
        <div>
        <h1>Сторінка реєстрації</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
    
         <label >
    Nickname
     <input
                type="text"
                placeholder="Nickname"
                name="nickname"
                value={nickname}
                onChange={handleInputChange}
              />   
    </label>
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

<button type="submit"> Sign up  </button>

         <NavLink to="/login">
                <button type="button">
                  Log Into Account
                </button>
                </NavLink>
                </form>
    </div>
)
    
}

export default RegisterForm