import "./Taskbar.css";
import { Cake } from "phosphor-react";
function Taskbar() {


    return (
      <div className="NavBar container-fluid row">
        <ul className="NavList">
          <li className="ImgNav NavItem">
            <Cake size={75} weight="light" color="white" className="NavLogo"/>
          </li>

          <li className="TitleNav NavItem">
            <p className="NavBrand">Birthday Remainder</p>
          </li>
        </ul>
      </div>
    );
}

export default Taskbar;
