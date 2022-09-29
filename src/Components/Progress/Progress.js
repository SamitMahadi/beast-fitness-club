import React from 'react';
import image from '../../../src/profile-photo/profile.png'
import './Progress.css'
const Progress = () => {
    
    return (

<div className='progress-info'>
    <div className='profile'>
    <img className='profile-img' src={image} alt="" />
    <h3>Neymar. jr <br />Brasilia,Brazil</h3>
   </div>
   <div className='info'>
     <div className='info-info'>
       <h2>70kg</h2>
       <p>weight</p>
     </div>

     <div className='info-info'>
      <h2>5.9</h2>
      <p>height</p>
     </div>

     <div className='info-info'>
      <h2>26</h2>
      <p>Years</p>
     </div>
   </div>

<h2>
    Add A Break
</h2>
<div className='break-time'>
    <h4>10m</h4>
    <h4>20m</h4>
    <h4>30m</h4>
    <h4>40m</h4>
    <h4>50m</h4>

</div>
<h2>Exercise Details</h2>
<div className='exercise'>
    <h3 className='exercise-detail'>
        Exercise time :
    </h3>
    <h3 className='exercise-detail'>
        Break time :
    </h3>
    
</div>
<button className='complete'>Activity Completed</button>

</div>    

         
    
        
    );
};

export default Progress;