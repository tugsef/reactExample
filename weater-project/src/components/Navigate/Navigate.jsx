import React from 'react'

import './style.css'
import NavLeft from './NavLeft/NavLeft'
import NavRight from './NavRight/NavRight'
function Navigate() {
  return (
    <div className='nave'>
        <NavLeft/>
        <NavRight/>
    </div>

  )
}

export default Navigate