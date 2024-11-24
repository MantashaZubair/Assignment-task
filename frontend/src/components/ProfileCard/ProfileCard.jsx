import React from "react";
import CurrentStatus from "./CurrentStatus";
import "../../styles/ProfileCard.css";
import { TbArrowBigRightFilled } from "react-icons/tb";
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-top">
        <div className="currentStatus-header">
          <p className="currentStatus-icon">👋</p>
          <TbArrowBigRightFilled className="profileCard-icon" />
        </div>
        {/* top section */}
        <div className="profile-header">
          <h4>Second Officer</h4>
          <h2>
            Abdul <span>Ghani</span>
          </h2>
          <p>Crew ID: 86526</p>
        </div>
        {/* Last Activity */}
        <div className="last-Activity">
          <h4>My Last Activity</h4>
          <p>
            Submitted the Deck Log for <span>1200-1600 Watch</span> 08:16 UTC
          </p>
        </div>
      </div>
      {/* Bottom Section  */}
      <div className="profile-top">
        <CurrentStatus
          currentStatus="Cargo First Lift"
          nextPort="INVTZ1"
          eta="Nov 27, 1450 UTC"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
