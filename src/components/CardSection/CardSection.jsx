import React from 'react'
import './cardSection.scss'
import Card from './Card'

const CardSection = () => {
  return (
    <div className='cardSection'>
        <Card name='Lamborghini' imgsrc='/assets/Lamborghini.jpg' price={95000000}/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardSection