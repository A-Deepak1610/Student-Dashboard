import React from 'react'
import Underconstruction from "../assets/underconstruction.jpg"
import "../styles/Underconstructionpage.css"
export default function Mcq() {
  return (
      <>
        <h1 className='textundercondtruction'>MCQ Page </h1>
        <div className='construction'>
          <img src={Underconstruction} alt="Under Construction" className='Underconstruction' />
        </div>
        </>
  )
}
