import React from 'react'
import { Link } from 'react-router-dom'

function Vampire({ vamp, id} ) {

  return (
    <div className='vampireCard'>
      <div className='vampireDetails'>
        <Link to={`/vamps/${id}`}>
          <p>{vamp.name}</p>
        </Link>
        <p>Turned {vamp.time_since_turned}</p>
        
      </div>
    </div>
  )
}

export default Vampire
