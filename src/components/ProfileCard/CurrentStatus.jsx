import React from "react";
import { GiFishingBoat } from "react-icons/gi";

const CurrentStatus = ({ currentStatus, nextPort, eta }) => {
  return (
    <div className="current-status">
      <div className="currentStatus-header">
        <GiFishingBoat className="currentStatus-icon" />
        <h2>SGSIM-NOOSL</h2>
      </div>
      <h4>
        Statement of Facts <span>currentStatus</span>
      </h4>
      <p className="currentStatus-text">{currentStatus}</p>
      <div className="lastStatus">
        <div>
          <span>Next Port Call</span>
          <span>{nextPort}</span>
        </div>
        <div>
          <span>ETA</span>
          <span>{eta}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;
