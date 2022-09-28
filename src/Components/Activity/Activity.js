import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'

import './Activity.css'

const Activity = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('Fitness.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
        <div className='header'>
          <h2>BEAST-FITNESS-CLUB</h2>
          <h3>Select Your Activity</h3>
        </div>
   <div className='full-container'>

      <div className='activites-container'>
          {
            cards.map(card=><Card key={card.id}></Card>)
          }

        </div>
        <div className='progress-container'>
           <h2>this is progress</h2>

        </div>
   </div>

        
    </div>
    )
        
}

export default Activity;