import React, { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import formatDate from '../helpers/date'

const API = import.meta.env.VITE_BASE_URL

function VampireEditForm() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [vamp, setVamp] = useState({
        name:"",
        date_turned: "",
        location: "",
        age: "",
        main_diet: "",
        power: "",
        is_dangerous: false,
        date_documented: ""
    })

    useEffect(() => {
        fetch(`${API}/vampires/${id}`)
            .then(res => res.json())
            .then(res => {
                for(let key in res) {
                    if(res[key] === null) {
                        res[key] = ""
                    } else if (key === 'date_turned' || key === "date_documented"){
                        res[key] = formatDate(res[key])
                    }
                }
                setVamp(res)
            })
            .catch(err => console.log(err))
    },[])

    const handleTextChange = (e) => {
        setVamp({ ...vamp, [e.target.id]: e.target.value})
    }

    const handleCheckBoxChange = () => {
        setVamp({ ...vamp, is_dangerous: !vamp.is_dangerous })
    }

    const updateVamp = () => {
        fetch(`${API}/vampires/${id}`, {
            method: "PUT",
            body: JSON.stringify(vamp),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(navigate(`/vamps/${id}`))
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateVamp()
    } 

    return (
        <div className="vampireForm">
        <h2>Edit Vampire</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={vamp.name}
              onChange={handleTextChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date_turned">Date Turned:</label>
            <input
              type="date"
              id="date_turned"
              name="date_turned"
              value={vamp.date_turned}
              onChange={handleTextChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={vamp.location}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={vamp.age}
              onChange={handleTextChange}
              required
            />
          </div>
          <div>
            <label htmlFor="main_diet">Main Diet:</label>
            <input
              type="text"
              id="main_diet"
              name="main_diet"
              value={vamp.main_diet}
              onChange={handleTextChange}
              required
            />
          </div>
          <div>
            <label htmlFor="power">Power:</label>
            <input
              type="text"
              id="power"
              name="power"
              value={vamp.power}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="is_dangerous">
              <input
                type="checkbox"
                id="is_dangerous"
                name="is_dangerous"
                checked={vamp.is_dangerous}
                onChange={handleCheckBoxChange}
              />
              Dangerous
            </label>
          </div>
          <div>
            <label htmlFor="date_documented">Date Documented:</label>
            <input
              type="date"
              id="date_documented"
              name="date_documented"
              value={vamp.date_documented}
              onChange={handleTextChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default VampireEditForm