import React from 'react'
import { FaPlaystation } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";



const Footer = () => {
  return (
    <div className="footer row row-cols-md-3 m-0 row-cols-sm-1">
      <div className='d-flex justify-content-center align-items-center'>
        <FaPlaystation size={120}/>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        Created by: Jhon Estiven Guelpaz Muñoz
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <RiInstagramFill size={60} className='minlogos'/>
        <RiFacebookCircleFill size={60} className='minlogos'/>
        <RiYoutubeFill size={60} className='minlogos'/>
      </div>
    </div>
  )
}

export default Footer