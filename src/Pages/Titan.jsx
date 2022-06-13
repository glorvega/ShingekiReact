import React, { useEffect, useState } from "react";
import axios from "axios";

function Titan() {
  const [titan, setTitan] = useState([]);

  const getTitan = async () => {
    const res = await axios("https://shingekiapi.herokuapp.com/titan");
    setTitan(res.data);
    console.log(res);
  };

  useEffect(() => {
    getTitan();
  }, []);

  return (
    <div className="titan__container">
      {titan.length > 0 &&
        titan.map((titan) => {
          return (
            <div className="titan" key={titan.id}>
              <img
                className="titan__image"
                src={titan.image}
                alt={titan.name}
              />
              <div className="titan__info">
                <div>
                  Name: <strong>{titan.name}</strong>
                </div>
                <div>
                  Height: <strong>{titan.height}</strong>
                </div>
                <div>
                  Type: <strong>{titan.type}</strong>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Titan;
