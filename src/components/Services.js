import React from 'react'
import Card from './Card'
import  card2  from "../image/card2.webp";
import genai from "../image/genai.png";
import webdesign from "../image/webdesign.png"

const Services = () => {
  return (
  <>
    <div id='services' className='flex'>

      <Card className="w-fit " style={{ width: '33%' }} img={card2} title="Web development"/>
      <Card className="w-fit" style={{ width: '33%' }} img={webdesign} title="Web design"/>
      <Card className="w-fit" style={{ width: '33%' }} img={genai} title="Gen AI"/>
    </div>
  </>
  )
}

export default Services
