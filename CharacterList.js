// CharacterList.js
import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({data}) {
  const characters=[...data]

  return (
    <>
      <h1>Character List</h1><br />
      <div className='cardsSection'>
          {characters.map(character=>{
          return <CharacterCard key={character.id} data={character}/>
        })}
    </div>
    </>
  );
}

export default CharacterList;
