import React, { useState } from 'react';
import image from '../../../src/profile-photo/profile.png'
import './Progress.css'
import{ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Progress = (props) => {
    const diffToast=()=>{
        toast("Activity Completed!")
    }
    const {singlecard}=props;
    let total=0;
    for(const card of singlecard){
        total=parseFloat((total + card.time));
    }
    const[breakTime,setBreakTime]=useState([])
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
    <h4 onClick={e=>setBreakTime(e.target.innerText)}>10m</h4>
    <h4 onClick={e=>setBreakTime(e.target.innerText)}>20m</h4>
    <h4 onClick={e=>setBreakTime(e.target.innerText)}>30m</h4>
    <h4 onClick={e=>setBreakTime(e.target.innerText)}>40m</h4>
    <h4 onClick={e=>setBreakTime(e.target.innerText)}>50m</h4>

</div>
<h2>Exercise Details</h2>
<div className='exercise'>
    <h3 className='exercise-detail'>
        Exercise time :{total}min
    </h3>
    <h3 className='exercise-detail'>
        Break time :{breakTime}
    </h3>
    
</div>
<button onClick={diffToast} className='complete'>Activity Completed</button>
<ToastContainer
position="top-center"

/>  
</div> 
 

         
    
        
    );
};

export default Progress;