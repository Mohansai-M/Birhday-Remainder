import "./Taskbar.css";
import "../App.css";
import { Cake } from "phosphor-react";
import { useState } from "react";
function Taskbar(props) {

  
  const [BColor, setBColor] = useState("White");

    const [bgc, setBgc] = useState("#58d673");



  const Toggler = (event) => {
    if (event.target.value === "Black") 
    {
      setBColor("White");
      setBgc("#58d673");
      props.onAddColors("white");
      props.onBackgroundChange("#58d673");
      props.onCardChange("#f0f0f0");
    }
    if (event.target.value === "White") {
      setBColor("Black");
      setBgc("#5da36c");
      props.onAddColors("Black");
      props.onBackgroundChange("#5da36c");
      props.onCardChange("#414345");
    }
  };

  const border = "5px solid " + BColor;


    return (
      <nav className="NavBar container-fluid row" style={{color:BColor,backgroundColor:bgc}}>
        <ul className="NavList">
          <li className="ImgNav NavItem">
            <Cake size={75} weight="light" color={BColor} className="NavLogo" />
          </li>

          <li className="TitleNav NavItem">
            <p className="NavBrand">Birthday Remainder</p>
          </li>

          <li className="CheckBoxy NavItem">
            <input className="checky" type="checkbox" value={BColor} onChange={Toggler} style={{border:border,background:bgc}}/>
          </li>
        </ul>
      </nav>
    );
}

export default Taskbar;
