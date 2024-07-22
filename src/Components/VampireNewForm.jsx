import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./VampireNewForm.css"

const API = import.meta.env.VITE_BASE_URL;

function CreateVampire() {
  const navigate = useNavigate();

  const [newVampire, setNewVampire] = useState({
    name: '',
    date_turned: '',
    location: '',
    age: '',
    main_diet: '',
    power: '',
    is_dangerous: false,
    date_documented: ''
  })

  const addVampire = () => {
    fetch(`${API}/vampires`, {
      method: 'POST',
      body: JSON.stringify(newVampire),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newVamp => navigate(`/vamps/${newVamp.id}`))
    .catch(err => console.error(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addVampire();
  }

  const handleInputChange = (e) => {
    setNewVampire((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    })
  }

  const handleCheckBoxChange = () => {
    setNewVampire((prevState) => {
      return { ...prevState, is_dangerous: !prevState.is_dangerous };
    })
  }

  return (
    <div className="vampireForm">
      <h2>Add a New Vampire</h2>
      <form className="formmm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newVampire.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date_turned">Date Turned:</label>
          <input
            type="date"
            id="date_turned"
            name="date_turned"
            value={newVampire.date_turned}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newVampire.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={newVampire.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="main_diet">Main Diet:</label>
          <input
            type="text"
            id="main_diet"
            name="main_diet"
            value={newVampire.main_diet}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="power">Power:</label>
          <input
            type="text"
            id="power"
            name="power"
            value={newVampire.power}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="is_dangerous">
            <input
              type="checkbox"
              id="is_dangerous"
              name="is_dangerous"
              checked={newVampire.is_dangerous}
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
            value={newVampire.date_documented}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateVampire