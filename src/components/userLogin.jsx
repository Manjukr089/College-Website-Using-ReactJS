import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css';

const UserLogin = () => {


    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let navigate = useNavigate();

    let login = (e) => {
        e.preventDefault();
        let data = { email, password }// data input....
        // console.log(data);

        if (email == "user@gmail.com" && password == "0000") {

            //naviagting to the user page...
            navigate('/user/home')

        }
        else {
            alert(" Invalid email or pasword");
        }


    }

    return (

        <div className="userLogin" >


            <div className="selectLoginType">
                <h1>Login as Student</h1>

                <div className="form_input1">
                    <form action="" onSubmit={login}>

                    <div className="email">
                            <input type="email" value={email} placeholder="Email Address" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                        </div>
                            <button id="btn1">Login</button>
                            
                    </form>
                </div>


            </div>

        </div>
    );
}
export default UserLogin;