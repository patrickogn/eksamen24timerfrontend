import React, {useEffect, useState} from 'react';
import facade from "../apiFacade";
import chucknorris from "../assets/chucknorris.jpg";

function GetJoke({setErrorMessage}) {
    const [jokeFromServer, setJokeFromServer] = useState("Loading...")

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        facade.fetchData("joke/haha", data => setJokeFromServer(data.joke), setErrorMessage)
    }, [toggle])

    const fetchJoke = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <button onClick={fetchJoke}>Get funny jokes!</button>
            <br/><br/>
            <h2>This is a dad joke:</h2>
            <h5>{jokeFromServer[0]}</h5> <br/><br/>
            <h2>This is a Chuck Norris joke:</h2>
            <h5>{jokeFromServer[1]}</h5>
            <img className="imgDetails2" src={chucknorris} alt="Chuck Norris image"/>
        </div>
    )
}

export default GetJoke;