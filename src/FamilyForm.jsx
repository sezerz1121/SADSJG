import React from 'react';
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const FamilyForm = () => {
    const navigate =useNavigate();
    const handleHome = () => {
        navigate("/home");
    };
    return (
        <>
            <div className='FamilyForm'>
            <div className='NavBarFamilyPage'>
                <div className='navbarTitle'> Shree Amdavadi Dasha Srimali Jain Gyanti</div>
                <div className='navbarlogout'> <p>Log out</p><MdLogout /> </div>
             </div>
            <div className='subNavbar'>
                <div onClick={handleHome}>HOME</div>
                <div>ADD MEMBER</div>
                <div>MEMBER LIST</div>
                <div>ADD AREA MASTER</div>
            </div>
            <div className='FamilyFormDiv'>
            <div className='TitlePERSONALDETAILS'>FAMILY FORM</div>
            <div className='inputField1'><div className='inputFieldinner'>MEMBERSHIP NO :</div><input className='inputBox'/> </div>
           
            <div className='inputField2'><div className='inputFieldinner'>ADDRESS : </div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>PHONE NO :</div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>OFFICE ADDRESS :</div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>SPECIALITY :</div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>AREA : </div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>CITY : </div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>STATE : </div><input className='inputBox'/> </div>
            <div className='inputField23'><div className='inputFieldinner'>IS INTERNATIONAL :</div><input type="checkbox"/> </div>
            <div className='inputField2'><div className='inputFieldinner'>INTERNATION :</div><input className='inputBox'/> </div>
            <div className='inputField2'><div className='inputFieldinner'>BLOOD GROUP :</div><input className='inputBox'/> </div>
            <div className='TitlePERSONALDETAILS'>PERSONAL DETAILS</div>
            <div className='inputField1'><div className='inputFieldinner'>NAME :</div><input className='inputBox'/> </div>
           
           <div className='inputField2'><div className='inputFieldinner'>MARITAL STATUS :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>PHONE NO :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>OCCUPATION :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>BIRTH-DATE :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>MOBILE NO : </div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>EMAIL-ID :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>QUILIFICATION : </div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>TALENT :</div><input className='inputBox'/> </div>
           <div className='inputField2'><div className='inputFieldinner'>RELATION :</div><input className='inputBox'/> </div>
           <div className='inputField22'><div className='inputFieldinner'>IMAGE :</div><input type='file'/> </div>
           <div className='SubmitButton'>Submit</div>
            </div>
             
            
            </div>
        </>
    );
}

export default FamilyForm;
