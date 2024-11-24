import React from "react";
import "../styles/Header.css";
import { MdOutlineHouseboat } from "react-icons/md";
import { CiPower } from "react-icons/ci";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <MdOutlineHouseboat className="header-icon" />
        <div className="header-info">
          <p className="header-title">Dev Vessel</p>
          <p className="header-subtitle">
            16 Crewmates <span className="active-count"> 09 Active</span>
          </p>
        </div>
      </div>
      <div className="header-right">
        <p className="gmt-info">GMT +9:00</p>
        <CiPower className="header-powericon" />
      </div>
    </div>
  );
};

export default Header;
