import React from 'react'
import { Link } from 'react-router-dom'

const QuizPage = () => {
  return (
    <main className='QuizPage'>
      <section className="firstSection">
        <p>Question 6 of 10</p>
        <h1>
          Which of these contrast color ratios defines the minimun WCAG 2.1 level AA requirement for normal text?
        </h1>
        {/* <Link to={'/'}>
          <div>Home</div>
        </Link> */}
      </section>

      <section className="secondSection">
        <div>
          <div className='option'>A</div>
          <p>4.5:1</p>
        </div>

        <div>
          <div className='option'>B</div>
          <p>3:1</p>
        </div>

        <div>
          <div className='option'>C</div>
          <p>2.5:1</p>
        </div>

        <div>
          <div className='option'>D</div>
          <p>5:1</p>
        </div>

        <Link to={'/score'}>
          <div className='submit'>Submit answer</div>
        </Link>

      </section>
    </main>
  )
}

export default QuizPage