import React, { useEffect, useState } from "react";


const Speakers = () => {
  const [data, setData] = useState({}); // usestate holder dataen
  const [speakers, setSpeakers] = useState(null); 

  useEffect(() => {
    fetch("https://patrickognielsen.dk/tomcat/24timers/api/speaker/all")
      .then((response) => response.json())
      .then((data) => {
        setSpeakers(data);
        console.log(data)
      });
  }, []);

  async function handleClick(id) {
    const response = await fetch(`https://patrickognielsen.dk/tomcat/24timers/api/speaker/${id}`);
    const json = await response.json();
    setData({...data, [id]: json}); // opdaterer state med ny data
  }

  return (
    <div>
      {speakers &&
        speakers.map((speak) => (
          <div key={speak.id}>
            <ul>
              <li>
                Name: {speak.name}, Profession: {speak.profession},
                Gender: {speak.gender} 
                <div>
                  <button onClick={() => handleClick(speak.id)}>See Talks</button>
                  {data[speak.id] && <div>{JSON.stringify(data[speak.id])}</div>}
                </div>
              </li> 
            </ul>
          </div>
        ))}
    </div>
  );
};


export default Speakers
