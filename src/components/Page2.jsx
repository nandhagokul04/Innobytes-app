import { ChevronLeft } from "react-feather";
import '../styles/Page2.css'
import { Link, NavLink } from 'react-router-dom'; 
import { useState } from 'react';
import gimg from "./images/google.png";
import { useNavigate } from 'react-router-dom';


function Page2() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const navigate = useNavigate(); 

    // Show or hide pass
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    }

    // Password change
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            setPasswordError('Password must contain at least 1 uppercase letter, 1 special character, and 1 number.');
        } else {
            setPasswordError('');
        }
    }

    // Form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Form validation
        if (!fullName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        if (!email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        if (!password.trim()) {
            alert("Please enter your password.");
            return;
        }

        if (!agreeTerms) {
            alert("Please agree to the terms and conditions.");
            return;
        }
        else{
            navetopage3()
        }
    }
       function navetopage3(){
        navigate('/Page3')
      }

    return (
        <div className="page2">
            <div className="back">
                <NavLink to="/"><ChevronLeft /><span id="back">Back</span></NavLink>
            </div>
            <div className="step1">
                <div id="step1">STEP 01/03 </div>
                <div id="personalinfo">Personal Info.</div>
            </div>
            <div className="register">
                <div id="account">Register Individual Account!</div>
                <div id="content">For the purpose of industry regulation, your details are required.</div>
                <hr />
            </div>
            <div className="inputs">
                <form onSubmit={handleSubmit}>
                    <div className="fname">
                        <label htmlFor="firstname">Your fullname*</label> <br />
                        <input type="text" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="mail">
                        <label htmlFor="Email address">Email address*</label><br />
                        <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Create password*</label><br />
                        <input type={showPassword ? "text" : "password"} placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                        <button type="button" id="passbtn" onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</button>
                        {passwordError && <div className="password-error">{passwordError}</div>}
                    </div>
                    <div className="terms">
                        <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
                        <p id="tnc">I agree to terms & conditions</p>
                    </div>
                   
                    <div className="registeracc">
                        <button type="submit">Register Account</button>
                    </div>
                </form>
            </div>
            <div className="line">
                <div className="hr1"><hr /></div>
                <div className="or">Or</div>
                <div className="hr2"><hr /></div>
            </div>
            <div className="googleregister">
                <button> <img id="googlelogo" src={gimg} alt="g" /> Register with Google</button>
            </div>
        </div>
    )
}
export default Page2;
