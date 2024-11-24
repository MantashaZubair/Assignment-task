import React, { useState } from "react";
import "../styles/Sidebar.css";
import { IoHome } from "react-icons/io5";
import { VscLayoutPanelRight } from "react-icons/vsc";
import { LuHeartPulse } from "react-icons/lu";
import { FaBookJournalWhills } from "react-icons/fa6";
import { IoPieChart } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const navigate=useNavigate()
  const menuItems = [
    { lable: "Home", icon: <IoHome /> },
    { lable: "Workspace", icon: <VscLayoutPanelRight /> },
    { lable: "MARPOL", icon: <FaBookJournalWhills /> },
    { lable: "OH&S", icon: <LuHeartPulse /> },
    { lable: "Insights", icon: <IoPieChart /> },
    { lable: "History", icon: <MdHistory /> },
    { lable: "Apps", icon: <RiAppsLine /> },
    { lable: "Setting", icon: <CiSettings /> },
  ];
  const handleChangeMenu = (menu) => {
    setActiveMenu(menu);
    navigate(`/${menu}`)
  };
  return (
    <div className="sidebar">
      <ul className="menu-list">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className={`menu-item ${activeMenu === menu.lable ? "active" : ""}`}
            onClick={() => handleChangeMenu(menu.lable)}
          >
            <span className="icon">{menu.icon}</span>
            <span className="lable">{menu.lable}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
