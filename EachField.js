import React from 'react'

const EachField = ({name,value}) =>{
    let objUrl=null;
    if(typeof(value) === 'object'){
        objUrl=value.url
    }
    return (
        <>
        <div className="row">
             <div className="col-sm-3">
             <p className="mb-0">{name}</p>
             </div>
             <div className="col-sm-9">
             {objUrl ? <a href={objUrl}>{value.name}</a> : <p className="mb-0">{value}</p>}
             </div>
         </div>
         <hr />
        </>
    )
}

export default EachField