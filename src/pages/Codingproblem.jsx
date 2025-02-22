import React from 'react'
import Underconstruction from "../assets/underconstruction.jpg"
import "../styles/Underconstructionpage.css"
export default function Codingproblem() {
  return (
      <>
        <h1 className='textundercondtruction'>Coding Page </h1>
        <div className='construction'>
          <img src={Underconstruction} alt="Under Construction" className='Underconstruction' />
        </div>
        </>
  )
}
