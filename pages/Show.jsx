import React, { useState } from 'react'
import VampireCard from '../components/VampireCard'

function Show() {
    const [card,setCard] = useState()
  return (
    <div>
      <h2>Show Vampire</h2>
      <VampireCard/>
    </div>
  )
}

export default Show
