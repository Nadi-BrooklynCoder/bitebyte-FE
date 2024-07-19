import React from 'react'
import './Home.css'
import picture from '../assets/vampcheeky.png'


function Home() {
    
  return (
 
    <div className='home'>
      <div className='homeCard'>
      <h1>
        BiteByte
        </h1> 
        <h3>Keeping Tabs on the Night's Bites!</h3>
        <img src={picture} alt=''/>
        </div>
    </div>
  )
}

export default Home
