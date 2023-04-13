import {Routes , Route , NavLink} from "react-router-dom"
import './App.css';
import Home from "./components/Home/index";

import NoMatch from "./components/NoMatch";

import Otelroute from "./components/Otels/Otelroute";
import "./components/style.css"
import About from "./components/About";



function App() {
  const colorNavLink = ({isActive})=>({color: isActive ? "green" : "red"})
  return (
    <>
    <h1>Basic Example React Router</h1>
    <nav>
      <ul>
        <li>
          <NavLink style={colorNavLink}  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={colorNavLink} to="/otels">Otels</NavLink>
        </li>
        <li>
          <NavLink style={colorNavLink} to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
    
    <Routes >
      <Route path="/about" element = {<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/otels/*" element = {<Otelroute />}/>
        

      {/*<Route path="/otels" element={<OtelList />} />
        <Route path="/otels/:id" element={<Otel />} />
  <Route path="/otels/new" element={<Newotel />} />*/}
      <Route path="*" element={<NoMatch />}/>
      
    </Routes>
    </>
  );
}

export default App;
