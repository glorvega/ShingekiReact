import React, { useEffect, useState } from "react";
import axios from "axios";

function Human() {
  const [human, setHuman] = useState([]);

  const getHuman = async () => {
    const res = await axios("https://shingekiapi.herokuapp.com/human");
    setHuman(res.data);
    console.log(res);
  };

  useEffect(() => {
    getHuman();
  }, []);

  return (
    <div className="human__container">
      {human.length > 0 &&
        human.map((human) => {
          return (
            <div className="human" key={human.id}>
              <img
                className="human__image"
                src={human.image}
                alt={human.name}
              />
              <div className="human__info">
                <div>
                  ID: {human.id} - <strong>{human.name}</strong>
                </div>
                <div>
                  Origin: <strong>{human.origin}</strong>
                </div>
                <div>
                  Role: <strong>{human.role}</strong>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Human;
