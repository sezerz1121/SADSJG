import React from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate =useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleCreate = () => {
        navigate("/create");
    };
    return (
        <div className='LandingPage'>
            <img src='Images/Untitled design.png' className='LandingPageImage' alt='Landing Page'/>
            <div className='Page'>
                <div className='button1' onClick={handleLogin}>Login</div>
                <div className='button2' onClick={handleCreate}>Create account</div>
            </div>
        </div>
    );
}

export default LandingPage;
