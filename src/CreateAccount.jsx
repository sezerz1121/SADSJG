import React from 'react';
import { useNavigate } from 'react-router-dom';
const CreateAccount = () => {
    const navigate =useNavigate();
    const handleCreateFamily = () => {
        navigate("/createfamily");
    };
    return (
        <div className='LandingPage'>
            <img src='Images/Untitled design.png' className='LandingPageImage' alt='Landing Page'/>
            <div className='Page'>
                <div className='button1' >Family Exist</div>
                <div className='button2' onClick={handleCreateFamily}>Create Family</div>
            </div>
        </div>
    );
}

export default CreateAccount;
