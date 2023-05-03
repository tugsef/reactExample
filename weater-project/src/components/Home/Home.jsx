

import Form from '../Form/Form'
import Weather from '../Weather/Weather'
import Navigate from '../Navigate/Navigate'
import '../Home/style.css'
import React from 'react'
import Social from '../Social/Social'






function Home() {
  
  
 
  return (
    <div className='ULSxyf'>

      <div className='Ww4FFb vt6azd obcontainer wDYxhc'>
        <div className='hometech'>
          <h2 className='Uo8X3b OhScic zsYMMe'>Hava Durumu Sonucu</h2>
          <div className="nawv0d">
            <Form/>
            <div style={{ height: "3vh" }}></div>
            <Navigate />
            <div style={{ height: "3vh" }}></div>
            <Weather />
            <div style={{ height: "3vh" }}></div>
            <Social/>

        
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default React.memo(Home);