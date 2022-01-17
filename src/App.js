import logo from './logo.svg';
import './App.css';
import Taskbar  from './Components/Taskbar';
import { useState } from 'react';
import PersonCard from './Components/PersonCard';
function App() {

   var Months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",  "Oct", "Nov", "Dec", ];

  const[BColor,setBColor] = useState("white")
    const Toggler =() =>
    {
      if(BColor === "Black")
      {
        setBColor("white")
      }
      if(BColor === "white")
      {
        setBColor("Black")
      }
    }
 
  return (
    <body className="App" style={{ backgroundColor: BColor }}>
      <Taskbar />
      <label className="switch">
        <input type="checkbox" onClick={Toggler} />
        <span className="slider round"></span>
      </label>
      <div className="container-fluid ContentItems row g-0">
        <div className="Main-Item col g-0">
          <PersonCard monthpass={Months} />
        </div>
      </div>
    </body>
  );
}

export default App;
