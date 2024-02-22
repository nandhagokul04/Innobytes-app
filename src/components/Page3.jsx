import { Link, NavLink } from 'react-router-dom';
import { ChevronLeft, Lock } from "react-feather";
import '../styles/Page3.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Flag from 'react-world-flags';


function Page3() {
    const navigate = useNavigate()
    const [country, setcountry] = useState("");
    const [phone, setphone] = useState('')

    function countrychange(e) {
        setcountry(e.target.value)
    }

    function phonechange(e) {
        setphone(e.target.value)
    }

    function navetopage4() {
        navigate('/Page4')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
   
    return (
        <div className="page3">
            <div className="back">
                <NavLink to="/Page2"><ChevronLeft /><span id="back">Back</span></NavLink>
            </div>
            <div className="step2">
                <div id="step2">STEP 02/03 </div>
                <div id="personalinfo">Personal Info.</div>
            </div>
            <div className="register">
                <div id="account">Complete Your Profile!</div>
                <div id="content">For the purpose of industry regulation, your details are required.</div>
                <hr />
            </div>
            <div className="inputs">
                <form >
                    <div className="phone">
                        <label htmlFor="phone">Phone number</label> <br />
                        <input type="tel" placeholder="please enter phone number" value={phone} onChange={phonechange} />
                        <div className="selectphone">
                            <select name='phone' value={phone} onChange={phonechange}>
                                <option value="+091"><Flag code="in" /> +91</option>
                                <option value="+031"> <Flag code="us" />+31</option>
                            </select>
                        </div>
                    </div>
                    <div className="address">
                        <label htmlFor="address">Your address</label><br />
                        <input type="text" placeholder="Please enter address" />
                    </div>
                    <div className="country">
                        <label htmlFor="country">Country of residence</label><br />
                        <input type="text" placeholder="Please select" value={country} onChange={countrychange} />
                        <div className="selectcountry">
                            <select name='country' onChange={countrychange}>
                                <option value=""></option>
                                <option value="India">IND</option>
                                <option value="United States of America">USA</option>
                                <option value="United Arab Emirates">UAE</option>
                                <option value="England">ENG</option>
                                <option value="South Africa">SA</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div className="saveandcontinue">
                    <button onClick={navetopage4}><span id='saveandcontinue'>Save & Continue</span></button>
                </div>
                <div className="secured">
                    <p> <span id='lock'>< Lock id='lock' /> </span> <span id='secured'> Your Info is safely secured</span></p>
                </div>
            </div>
        </div>
    )
}
export default Page3