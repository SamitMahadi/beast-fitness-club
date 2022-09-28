import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activites = () => {
    const [activites,setActivites] = useState([])
    useEffect(()=>{
        fetch('Fitness.json')
        .then(res=>res.json())
        .then(data=>setActivites(data))
    },[])
    return (
        <div>
            <div className='header'>
              <h2>BEAST-FITNESS-CLUB</h2>
              <h3>Select Your Activity</h3>
            </div>
       <div className='full-container'>
          <div className='activites-container'>
               <h2>this is activity:{activites.length}</h2>
            </div>
            <div className='progress-container'>
               <h2>this is progress</h2>

            </div>
       </div>

            
        </div>
    );
};

export default Activites;