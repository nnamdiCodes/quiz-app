import React from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

const Nav = ({ handleClick, isDarkMode }) => {
  return (
    <nav className="Nav">
      <div className="navImg">
        <FiSun
            className='lightMood'
        />
        <div onClick={handleClick}>
            { isDarkMode ?
                <FaToggleOn 
                    className='toggle'
                /> :
                <FaToggleOff
                className='toggle'
                />
             }
        </div>
        <FiMoon
            className='darkMode'
         />
      </div>
      <div className="navMenu">
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'quiz'}>Quiz-page</Link></p>
      </div>
    </nav>
  )
}

export default Nav