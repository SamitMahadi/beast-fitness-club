import React from 'react';
import './Card.css'

const Card = (props) => {
  const{name,img,age,time}=props.card
    return (
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div className='card-body'>
             <h2>{name}</h2>
             <h4>For Age: {age}years</h4>
             <h4>Time Required :{time}min</h4>
            </div>
            <div>
                <button className='btn-list'>Add to list</button>
            </div>
        </div>
    );
};

export default Card;