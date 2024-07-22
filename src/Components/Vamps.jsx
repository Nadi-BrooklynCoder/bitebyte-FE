import React, { useState, useEffect } from "react";
import Vampire from "./Vampire";
import formatDate from "../helpers/date"
import calculateTurnedTime from "../helpers/turnedCalculation"
import './Vamps.css'

const API = import.meta.env.VITE_BASE_URL;

function Vamps() {
  const [vamps, setVamps] = useState([]);
  
  useEffect(() => {
    fetch(`${API}/vampires`)
      .then(res => res.json())
      .then(res => {
        res.forEach(vamp => {
          vamp.date_turned = formatDate(vamp.date_turned);
          vamp.time_since_turned = calculateTurnedTime(vamp.date_turned)
        })
        setVamps(res);
      })
      .catch(err => console.log(err));
  }, [])

    return (
        <div className="">
            {vamps.map((vamp) => {
              return <Vampire key={vamp.id} vamp={vamp} id={vamp.id} />
            })}
        </div>
    );
}

export default Vamps