import React from 'react'

function Card(porops) {
  return (
    <div className="card">
    <img src={porops.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className='card-title'>
        {porops.title}
      </h5>
      <p className="card-text">{porops.content}</p>
    </div>
  </div>
  )
}

export default Card