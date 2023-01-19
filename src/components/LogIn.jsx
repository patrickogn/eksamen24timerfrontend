import React, {useState, useEffect} from "react"
import facade from "../apiFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from "./UserPage.jsx";
import LoginForm from "./LoginForm.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";

function LogIn({loggedIn, setLoggedIn, setErrorMessage}) {
    // const [loggedIn, setLoggedIn] = useState(false)
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init); //Hvorfor skal de ligge her?

    const logout = () => {
        facade.logout()
        setLoggedIn(false)
        setErrorMessage('Logged out.')
    }

    const login = (user, pass) => {
        facade.login(user, pass, setLoggedIn, setErrorMessage)
    }

    const navigate = useNavigate();

    const signUp = () => {
        navigate("/signUp")
    }

    return (
        <div>
            {!loggedIn ? (<LoginForm login={login} loginCredentials={loginCredentials}
                                     setLoginCredentials={setLoginCredentials}/>) :
                (
                <div>
                    <UserPage/>
                    <button onClick={logout}>Logout</button>

                </div>
                
                )}

                
                    <div className="signUp">
                    <h5>Not a user?</h5>
                    <button onClick={signUp}>Sign up her!</button>
                    </div>
                

        </div>
    )

}

export default LogIn;
