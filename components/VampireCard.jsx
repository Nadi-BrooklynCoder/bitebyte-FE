import React, {useEffect, useState}from 'react'

const API = import.meta.env.VITE_BASE_URL;


function VampireCard() {
    const [details,setDetails] = useState({
        name:"",
        date_turned:"",
        location:"",
        age:"",
        main_diet:"",
        power:"",
        is_dangerous:"",
        date_documented:""

    })

    useEffect(() => {
        fetch(`${API}/vampires/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);setDetails(res);
     })
        .catch(err => console.error(err))
    },[])
  return (

    <div>
      
    </div>
  )
}

export default VampireCard
