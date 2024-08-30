import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate =useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    return (
        <div className='LandingPage'>
            <img src='Images/Untitled design.png' className='LandingPageImage' alt='Landing Page'/>
            <div className='Page'>
                <input type='email' placeholder='Email' className='emailInput'/>
                <input type='password' placeholder='Password' className='passwordInput'/>
                <div className='buttonLogin'>Login</div>
            </div>
        </div>
    );
}

export default Login;