import React from 'react'
import logo from '../Images/image.png'
import '../Style/SignUp.css'
import TextField from '@mui/material/TextField';
import GoogleLogo from '../Images/G-logo.png'
import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <div className='signUpPage'>

            <div className='singUpHeader'>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="title">
                    <h1>Connect</h1>
                </div>
            </div>

            <div className='signUpForm'>
                <div className='signUpFormHeader'>
                    <h1>Create an account</h1>
                    <p>let’s get started to create your profile to meet others</p>
                </div>

                <TextField className='inputField' id="standard-basic" label="Name" variant="standard" />
                <TextField className='inputField' id="standard-basic" label="Email" variant="standard" />
                <TextField className='inputField' id="standard-basic" label="Password" variant="standard" />

                <div className='signUpButtons'>
                    <Link className='creatAccBtn' to='/questionInterest'>Create Account</Link>

                    <button className='GoogleLogin'>
                        <div class="centered-content">
                            <img src={GoogleLogo} alt="googleLogo" />
                            <span>Sign Up with Google</span>
                        </div>
                    </button>

                </div>

                <div className='haveAccount'>
                    <p>Already have an account? <a href="#">Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp