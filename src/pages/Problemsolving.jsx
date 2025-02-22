import React from 'react'
import Underconstruction from "../assets/underconstruction.jpg"
import "../styles/Underconstructionpage.css"
export default function Problemsolving() {
  return (
     <>
            <h1 className='textundercondtruction'>Problem Solving Page </h1>
            <div className='construction'>
              <img src={Underconstruction} alt="Under Construction" className='Underconstruction' />
            </div>
            </>
  )
}
