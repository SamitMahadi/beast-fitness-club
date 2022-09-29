import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'
import Progress from '../Progress/Progress';

import './Activity.css'

const Activity = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('Fitness.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    const handleAddToList=(card)=>{
      console.log(card);
    }

    return (
        <div>
        <div className='header'>
          <h2>BEAST-FITNESS-CLUB</h2>
          <h3>Select Your Activity</h3>
        </div>
   <div className='full-container'>

      <div className='activites-container'>
          {
            cards.map(card=><Card 
              key={card.id}
              card={card}
              handleAddToList={handleAddToList}
              ></Card>)
          }

        </div>

        <div className='progress-container'>
           <Progress></Progress>

        </div>
   </div>

        
    </div>
    )
        
}

export default Activity;