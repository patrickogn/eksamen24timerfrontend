import React, {useState} from 'react';
import facade from "../apiFacade.js";
import {useNavigate} from "react-router-dom";

function SignUp(props) {

    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleUserPass = (e) => {
        setUserPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        facade.createUser(userName, userPass)
        console.log("You are signed up now")
    };



    return (
        <div className="container">
            <div className="signUp">
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Username" name="userName" onChange={handleUserName}/>
                <input required type="text" placeholder="Password" name="userPass" onChange={handleUserPass}/>
                <br/>
                <button onClick={handleSubmit} type="submit">Sign Up</button>
                <div>
                    <h2 ></h2>
                </div>
            </form>
        </div>
    );
}

export default SignUp;