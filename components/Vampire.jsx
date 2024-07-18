import React, { useState } from 'react'

function Vampire() {
 const [vamp,setVamp] = useState([]) ;

  return (
    <div className='vampireCard'>
       <div className='vampireDetails'>
        <p>Vampire Name: {vampire.name}</p>
        <p>Date Bitten: {vampire.date_turned}</p>
        <p>Location: {vampire.location}</p>
        <p>Age: {vampire.age} </p>
        <p>Main Die: {vampire.main_diet}t</p>
        <p>Ability: {vampire.power}</p>
        <p>Dangerous: {vampire.dangerous}</p>
        <p>Date Documented: {vampire.date_documented}</p>

       </div>
    </div>
  )
}

export default Vampire
