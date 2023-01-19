import facade from "../apiFacade";
import React, { useEffect, useState } from "react";


const Conferences = () => {

const [conference, setConference] = useState(null); 


useEffect(() => {
    fetch(
      "http://localhost:8080/24timers/api/conf/all",
    )
      .then((response) => response.json())
      .then((data) => {
        setConference(data);
        console.log(data)
      });
  }, []);


  return (
    <div>
     {conference &&
      conference.map((conference) => (
        <div>
          <ul>
            <li>
              Name: {conference.name}, Location: {conference.location},
              Capacity: {conference.capacity}, Date: {conference.date}, Time: {conference.time}
            </li> 
          </ul>
        </div>
      ))}

  </div>
);
};

export default Conferences
