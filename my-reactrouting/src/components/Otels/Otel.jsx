import axios from 'axios';
import {useState , useEffect} from 'react'
import {useParams , useOutletContext} from 'react-router-dom'
import {NavLink } from 'react-router-dom'

function Otel() {
  const colorNavLink = ({isActive})=>({color: isActive ? "green" : "red"})
  const [loading , setLoading] = useState(true);
  const {id} = useParams();
  const obj = useOutletContext();
  const [otel , setOtel] = useState({}) 
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/otel/${id}`)
    .then(res=> setOtel(res.data))
    .catch((e)=>console.log(e))
    .finally(()=>setLoading(false))
  })

  return (
    <div>
      <h2>Otel Details {obj.hello}</h2>
        {loading&&<div>loading...</div>}
        <table border={2}>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Star</td>
          </tr>
          <tr>
          <td>{otel.name}</td>
            <td>{otel.type}</td>
            <td>{otel.star}</td>
          </tr>
        </table>
        <br />
        <br />

        <NavLink style={colorNavLink} to={`/otels/${parseInt(id)+1}`}>Next Otel({id})</NavLink>

    </div>
  )
}

export default Otel