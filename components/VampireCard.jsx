import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Vampire from "./Vampire";


const API = import.meta.env.VITE_BASE_URL;


function VampireCard() {
  let { id } = useParams();
  let navigate = useNavigate();


  const [details, setDetails] = useState({
    name: "",
    date_turned: "",
    location: "",
    age: "",
    main_diet: "",
    power: "",
    is_dangerous: "",
    date_documented: ""

  })

  
  useEffect(() => {
    fetch(`http://localhost:3333/vampires/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setDetails(res);
    })
    .catch(err => console.error(err))
  }, [id])
  
  const handleDelete = () => {
    fetch(`http://localhost:3333/vampires/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => navigate('/vampires'))
      .catch(err => console.log(err))
  };
  // console.log(details)
  return (
    <section>
      <div>
       <Vampire key={details.id} vamp={details} id={details.id} />
      </div>
      <Link to={`/vamps`}>
            <button>Back</button>
          </Link>
      <Link to={`/vamps/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </section>
  )
}

export default VampireCard
