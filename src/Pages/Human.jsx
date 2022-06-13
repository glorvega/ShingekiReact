import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Human() {
  const [human, setHuman] = useState([]);

  const navigate = useNavigate(); 
  const getHuman = async () => {
    const res = await axios("https://shingekiapi.herokuapp.com/human");
    setHuman(res.data);
    console.log(res);
  };

  useEffect(() => {
    getHuman();
  }, []);

  const navigateToHuman = (human) => {
    navigate(`/human/${human.name}`, {state: human});
  };


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
                onClick={() => navigateToHuman(human)}
              />
              <div className="human__info">
                <div>
                  Name: <strong>{human.name}</strong>
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
