import React from "react";
import "../styles/Dashboard.css";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import DailyStream from "../components/DailyStream/DailyStream";
import TaskList from "../components/TaskList/TaskList";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Header />
      </div>
      <div className="dashboard-content">
        <ProfileCard />
        <DailyStream />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
