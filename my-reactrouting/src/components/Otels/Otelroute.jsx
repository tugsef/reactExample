import React from 'react'
import {Route , Routes} from 'react-router-dom'
import OtelList from './OtelList'
import Otel from './Otel'
import Newotel from './Newotel'
import Otellayout from './Otellayout'


function Otelroute() {
  return (
    <>
    
    <Routes>
      <Route element={<Otellayout />}>
       <Route index element = {<OtelList />} />
        <Route path=":id" element = {<Otel />} />
        <Route path="new" element={<Newotel />} />
        </Route>
       
    </Routes>
    </>
    
  )
  
}

export default Otelroute