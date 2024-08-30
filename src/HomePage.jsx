import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate =useNavigate();
    const handleCreateFamily = () => {
        navigate("/createfamily");
    };
    return (
        <div>
            <div>
                <img className="bg-image" src="/Images/bg_img.png" alt="Background Image" />
            </div>

            <div className="page">
                <div className="innerpage">
                    <div className="navbar">
                        <div className="navbarDateTime">
                            <div className="Date">
                                <p id="DatePara"></p>
                            </div>
                            <div className="Time">
                                <p id="TimePara"></p>
                            </div>
                        </div>
                        <div className="navbarLanguage">
                            <div className="navbarLanguageTitle">
                                <p>Select Language</p>
                            </div>
                            <div className="navbarLanguageSelection">
                                <select name="Language" id="Language">
                                    <option value="English">English</option>
                                    <option value="Gujarati">Gujarati</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="Underline"></div>

                    <div className="OrgName">
                        <h1>Shree Amdavadi Dasha Srimali Jain Gyanti</h1>
                    </div>

                    <div className="Underline"></div>

                    <div className="pages">
                        <div className="link">HOME</div>
                        <div className="link" onClick={handleCreateFamily}>ADD MEMBER</div>
                        <div className="link">MEMBER LIST</div>
                        <div className="link">ADD BLOOD GROUP</div>
                        <div className="link">ADD AREA MASTER</div>
                    </div>

                    <div className="main-hero">
                        <div className="main-table">
                            <div className="table">
                                <span>Welcome, Here</span>
                            </div>
                            <div className="table-line">
                                <span>If you have any query, Tell us</span>
                                <div className="submit">
                                    <input type="text" placeholder="Type Here" />
                                    <button>Submit</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="main-table">
                            <div className="table">
                                <span>NEWS</span>
                            </div>
                            <div className="table-line">
                            
                                <div className="submit">
                                <div className='content'>news content</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
