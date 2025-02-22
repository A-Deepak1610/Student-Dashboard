import React from 'react'
import Underconstruction from "../assets/underconstruction.jpg"
import "../styles/Underconstructionpage.css"
export default function CoursesPage () {
  return (
    <>
    <h1 className='textundercondtruction'>Course Page </h1>
    <div className='construction'>
      <img src={Underconstruction} alt="Under Construction" className='Underconstruction' />
    </div>
    </>

  )
}
