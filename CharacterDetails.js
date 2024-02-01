// CharacterDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fields from './Fields';

function CharacterDetails({url}) {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

  return (
    <>
      <h1>Character Details</h1>
      {character && <Fields character={character}/>}
    </>
  );
}

export default CharacterDetails;
