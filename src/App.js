import logo from './logo.svg';
import './App.css';
import Taskbar  from './Components/Taskbar';
import { useState } from 'react';
import PersonCard from './Components/PersonCard';
function App() {

   var Months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",  "Oct", "Nov", "Dec", ];

  const[BColor,setBColor] = useState("")
  const [bgc, setBgc] = useState("#58d673");
  const [cardcolor, setCardcolor] = useState("");
  
 function colorChanger(Tempcolor)
 {
   setBColor(Tempcolor);
 }

 function BgChanger(TempBg)
 {
    setBgc(TempBg)
 }

  function CardChanger(TempCard) {
    setCardcolor(TempCard);
  }



  return (
    <body
      className="App"
      style={{ backgroundColor: BColor, transition: "0.5s" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Taskbar onAddColors={colorChanger} onBackgroundChange={BgChanger}  onCardChange={CardChanger}/>
          </div>
        </div>
        <div className="container-fluid MainITems">
          <div className="row">
            <div className="col">
              <PersonCard monthpass={Months} MainColor={BColor} FontColor={bgc} Cardcolour={cardcolor}/>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
