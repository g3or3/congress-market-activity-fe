import React from 'react'
import Navbar from './Navbar'
import stocks from '../../images/stocks.jpeg'

function LandingPage(props) {
  return (
    <>
      <Navbar />
      <div>
        <img
          style={{ width: '100%', height: '100vh' }}
          src={stocks}
          alt="people"
        />
      </div>
    </>
  )
}

export default LandingPage
