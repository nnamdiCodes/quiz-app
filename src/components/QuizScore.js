import React from 'react'
import { Link } from 'react-router-dom'
import { IoAccessibilityOutline } from 'react-icons/io5'

const QuizScore = () => {
  return (
    <main className="QuizScore">

      <section className="firstSection">
        <p className='quiz'>Quiz completed</p>
        <h1>You scored...</h1>
      </section>
      
      <section className="secondSection">

        <div className="scoreSheet">
          <div className='accessibility'>
            <div className='accessibilityIcon'>
              <IoAccessibilityOutline/>
            </div>
            <p>Accessibility</p>
          </div>
          <h2 className='score'>8</h2>
          <p className='total'>out of 10</p>
        </div>

        <div className='playAgain'>Play Again</div>

        <Link to={'/'}>
          <div className='homeLink'>Home</div>
        </Link>

      </section>
    </main>
  )
}

export default QuizScore