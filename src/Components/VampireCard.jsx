import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import  formatDate  from '../helpers/date'

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
    date_documented: "",
  })

  useEffect(() => {
    fetch(`${API}/vampires/${id}`)
    .then(res => res.json())
    .then(res => {
      res.date_turned = formatDate(res.date_turned)
      res.date_documented = formatDate(res.date_documented)
      setDetails(res)
  })
    .catch(err => console.log(err))
  }, [])

  const handleDelete = () => {
    if(window.confirm("Are you sure you want to delete this vampire?"))
    fetch(`${API}/vampires/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => navigate('/vamps'))
      .catch(err => console.log(err))
  }
  
 return (
    <section>
      <p>
       {details.name}
      </p>
      <p>
       {details.date_turned}
      </p>
      <p>
       {details.location}
      </p>
      <p>
       {details.age}
      </p>
      <p>
       {details.main_diet}
      </p>
      <p>
       {details.power}
      </p>
      <p>
       {details.is_dangerous}
      </p>
      <p>
       {details.date_documented}
      </p>
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


