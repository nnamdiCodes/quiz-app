import React from 'react'
import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoAccessibilityOutline } from 'react-icons/io5'

const Home = () => {
  return (
    <main className="Home">
      
        <section className='firstSection'>
          <h1>Welcome to the Frontend Quiz!</h1>
          <p>Pick a subject to get started.</p>
        </section>

        <section className='secondSection'>

          <div>
            <div className="special">
              <FaHtml5 />
            </div>
            <p>HTML</p>
          </div>

          <div>
            <div className="special">
              <FaCss3Alt />
            </div>
            <p>CSS</p>
          </div>

          <div>
            <div className="special">
              <IoLogoJavascript />
            </div>
            <p>Javascript</p>
          </div>

            <div>
              <Link to={'quiz'}>
                <div className='special'>
                  <IoAccessibilityOutline />
                </div>
                <p>Accessibility</p>
              </Link>
            </div>

        </section>
    </main>
  )
}

export default Home