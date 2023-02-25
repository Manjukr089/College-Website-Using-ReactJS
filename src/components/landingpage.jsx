import { Link } from "react-router-dom";
import '../styles/landingPage.css';
const LandingPage = () => {

    return (

        <div className="LandingPage">
            
            <div className="selectLoginType" >
                <img src="/images/humlog.png" alt="" />
                <img src="/images/img1.png" alt="" /><br /><br />
                <h2>Kuvempu University</h2>
                <Link to='/admin-login'>Admin Login</Link>
               
                <Link to='/user-login'>Student Login</Link>
            </div>

        </div>
    );
}
export default LandingPage;