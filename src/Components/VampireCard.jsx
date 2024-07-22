import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import DangerousIcon from '../assets/Dangerous.png'
import NotDangerousIcon from '../assets/NotDangerous.png'
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
       NAME: {details.name}
      </p>
      <p>
       DATE TURNED: {details.date_turned}
      </p>
      <p>
       LOCATION: {details.location}
      </p>
      <p>
        AGE: {details.age}
      </p>
      <p>DIET: {details.main_diet}
      </p>
      <p>SUPERNATURAL ABILITIES: {details.power}
      </p>
      <p>DANGEROUS?:
       {details.is_dangerous ? <img src={DangerousIcon} alt="Dangerous"/> : <img src={NotDangerousIcon} alt="Not Dangerous" /> }
      </p>
      <p>
       DATE DOCUMENTED: {details.date_documented}
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


