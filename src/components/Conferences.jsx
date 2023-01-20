import React, { useEffect, useState } from "react";

const Conferences = () => {
  const [data, setData] = useState({}); // usestate holder dataen
  const [conference, setConference] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:8080/24timers/api/conf/all")
      .then((response) => response.json())
      .then((data) => {
        setConference(data);
        console.log(data)
      });
  }, []);

  async function handleClick(id) {
    const response = await fetch(`http://localhost:8080/24timers/api/conf/${id}`);
    const json = await response.json();
    setData({...data, [id]: json}); // opdaterer state med ny data
  }

  return (
    <div>
      {conference &&
        conference.map((conf) => (
          <div key={conf.id}>
            <ul>
              <li>
                Name: {conf.name}, Location: {conf.location},
                Capacity: {conf.capacity}, Date: {conf.date}, Time: {conf.time}  
                <div>
                  <button onClick={() => handleClick(conf.id)}>See Talks</button>
                  {data[conf.id] && <div>{JSON.stringify(data[conf.id])}</div>}
                </div>
              </li> 
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Conferences;
