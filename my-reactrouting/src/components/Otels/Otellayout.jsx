import React from 'react'
import axios from 'axios';
import {useState , useEffect} from 'react'
import {NavLink , Outlet} from "react-router-dom"

function Otellayout() {
  const [loading , setLoading] = useState(true);
  const colorNavLink = ({isActive})=>({color: isActive ? "green" : "red"})
  const [otels , setOtels] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/api/otel")
    .then(res => setOtels(res.data))
    .catch(e => console.log(e))
    .finally(()=>setLoading(false))
  })

  return (
    <div>
      <h2>Otel List</h2>
      
      {loading&&<div>loading...</div>}
    <ul>
       
           { otels.map((otel) =>(
                <li key={otel.id}>
                    
                    <NavLink style={colorNavLink} to={`/otels/${otel.id}`}>{otel.name}</NavLink>
                </li>
            ))} 
       <li>
        <NavLink style={colorNavLink} to={"/otels/new"} >New Otel</NavLink>
       </li>
    </ul>   
    <Outlet context={{hello:"World"}} />
    </div>
      
      
   
  )
}

export default Otellayout