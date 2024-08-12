import React from 'react'
import CNavbar from '../Components/CNavbar/CNavbar'
import CMiniCanvas from '../Components/CMiniCanvas/CMiniCanvas'
import CCanvas from '../Components/CCanvas/CCanvas'

const CHomePage = () => {
  return (
    <div>
      <CNavbar />
      <CCanvas />
      <CMiniCanvas />
    </div>
  )
}

export default CHomePage