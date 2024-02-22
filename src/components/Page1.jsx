import { ArrowRight, Briefcase, User } from 'react-feather'
import '../styles/Page1.css'
import { Link } from 'react-router-dom';




function Page1() {
    return (
        <div className="page1">
            <div className="signin">
                <p>Already have an account? <span ><a href="">Sign In</a></span></p></div>

            <div className="joinus">
                <p id='joinus'>Join Us!</p>
                <p id='para'>To begin this journey, tell us what type of account you’d be opening.</p>
            </div>
            <Link to="/Page2">
                <button id='individualbtn'>
                    <div className="individual">
                        <div className="first">
                            <div className="user"><User /></div>

                        </div>
                        <div className="second">
                            <span id='individual'> Individual</span><br />
                            <span id='content'>Personal account to manage all you activities.</span>
                        </div>
                        <div className="third">
                            <ArrowRight />
                        </div>
                    </div>
                </button>
            </Link>
            {/* <Outlet/>    */}
            {/* ---->The <Outlet> renders the current route selected. */}
            <button id='buisness'>
                <div className="buisness">
                    <div className="bfirst">
                        <div className="bfirstimg1">
                            <div className="bfirstimg2">
                                <div className="briefcase">
                                    <Briefcase />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bsecond">
                        <span id='buisnesscon'>Business</span><br />
                        <span id='bcontent'>Own or belong to a company, this is for you.</span>
                    </div>
                </div>
            </button>


        </div>

    );
}
export default Page1