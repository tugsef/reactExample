
import './App.css';
import Home from './components/Home/Home';
import { WeaterProvider } from './context/WeaterContext';


function App() {
  return (
    <div className='App'>
      <WeaterProvider>
        <Home/>
      </WeaterProvider> 
         
     
    
    </div>
  );
}

export default App;
