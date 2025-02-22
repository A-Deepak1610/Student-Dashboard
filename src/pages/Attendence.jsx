import React from 'react'
import Underconstruction from "../assets/underconstruction.jpg"
import "../styles/Underconstructionpage.css"
export default function Attendence() {
  return (
      <>
        <h1 className='textundercondtruction'>Attendence Page </h1>
        <div className='construction'>
          <img src={Underconstruction} alt="Under Construction" className='Underconstruction' />
        </div>
        </>
  )
}
