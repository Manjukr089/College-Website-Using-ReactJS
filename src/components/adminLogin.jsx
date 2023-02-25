import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';

const AdminLogin = () => {


    let [email, setemail] = useState("");
    let [password, setpassword] = useState("")
    let navigate = useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data = { email, password }// data input....
        // console.log(data);

        if (email == "admin@gmail.com" && password == "0000") {

            //naviagting to the admin page...
            navigate('/admin/home')

        }
        else {
            alert(" Invalid email or pasword");
        }
    }

    return (

        <div className="AdminLogin">

            <div className="selectLoginType">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>

                        <div className="email">
                            <input type="email" value={email} placeholder="Email Address" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <button id="btn">Login</button>
                    </form>
                </div>


            </div>

        </div>
    );
}
export default AdminLogin;