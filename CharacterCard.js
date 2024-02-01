import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ data }) => {
  return (
    <div className="card">
      
      <Link to={`/character/${data.id}`}>
      <img className='w-100' src={data.image}/>
        <h3>{data.name}</h3>
        
        {/* Add other data details as needed */}
      </Link>
    </div>
  );
};

export default CharacterCard;
