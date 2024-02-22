import { NavLink } from 'react-router-dom';
import { ChevronLeft,Lock } from "react-feather";
import { FcOk } from "react-icons/fc";
import { useEffect } from 'react';
import '../styles/Page4.css'

function Page4() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page4">
            <div className="back">
                <NavLink to="/Page2"><ChevronLeft /><span id="back">Back</span></NavLink>
            </div>
            <div className="step3">
                <div id="step3">STEP 03/03 </div>
                <div id="bankverification">Bank Verification</div>
            </div>
            <div className="register">
                <div id="account">Complete Your Profile!</div>
                <div id="content">For the purpose of industry regulation, your details are required.</div>
                <hr />
            </div>
            <div className="inputs">
                <form >
                    <div className="phone">
                        <label htmlFor="phone">Bank verification number (BVN)</label> <br />
                        <input type="text" placeholder="Please enter BVN" />
                        <div className="verified">
                        <FcOk id='verified'/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="saveandcontinues">
                        <button><span id='saveandcontinue'>Save & Continue</span></button>
                    </div>
                <div className="secure">
                    <p> <span id='lock'>< Lock id='lock' /> </span> <span id='secured'> Your Info is safely secured</span></p>
                </div>


        </div>
    )
}
export default Page4