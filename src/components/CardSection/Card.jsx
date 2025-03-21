import React from 'react'
import './Card.scss'

const Card = ({name='Ferrari LaFerrari' , imgsrc='/assets/Ferrari.jpg' , price =9000000 }) => {
  return (
    <div className='card'>
        <div className='img-sec'>
            <img src={imgsrc} alt={name + " image"} />
        </div>
        <div className='card-title'>
            <p>{name}</p>
        <div className='design-sec1'></div>
        <div className='design-sec2'></div>
        </div>
        <div className='pricing'>
            <p>{'$ ' + price + ' /-'}</p>
        </div>
    </div>
  )
}

export default Card