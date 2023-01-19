import React, {useState} from "react";

function LoginForm({login, loginCredentials, setLoginCredentials}) {
    // const init = { username: "", password: "" };
    // const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form onChange={onChange}>
                <h2>Login</h2>
                <input placeholder="Username" id="username" />
                <input placeholder="Password" id="password" />
                <br/>
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    )

}

export default LoginForm;