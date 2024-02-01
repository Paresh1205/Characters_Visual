import React from 'react'
import EachField from './EachField'

function Fields({character}) {
    //console.log(typeof(character))
  return (
    <>
        <div className="card mb-4 w-100">
        <div className="card-body row text-center justify-content-center">
            <div className="col-md-5 col-sm-12">
              
              <img alt="avatar" className="rounded-circle img-fluid" src={character.image}/>
              <h5 className="my-3">{}</h5>
              <div className="section d-grid">
                <span className="text-gray">Last known location:</span>
                <a href={character.location.url} rel="noopener noreferrer" target="_blank">{character.location.name}</a>
              </div>
            </div>
            <div className="col-md-7 col-sm-12" >
              
              {Object.keys(character).map(key => {
                return <EachField key={key} name={key} value={character[key]}/>
                })}

            </div>
        </div>
      </div>
    
    </>
  )
}

export default Fields