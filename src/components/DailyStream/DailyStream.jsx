import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import "../../styles/DailyStream.css";
import StreamList from "./StreamList";
const DailyStream = () => {
  const sampleStreams = [
    {
      type: "important",
      notice: "Captain’s Bridge Order dated Nov 27, 2020",
      highlight: "",
      utcTime: "UTC 1105",
      localTime: "LT +06:30",
    },
    {
      type: "normal",
      notice:
        "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
      highlight: "Second Officer Oliver",
      utcTime: "UTC 1055",
      localTime: "LT +06:30",
    },
    {
      type: "normal",
      notice:
        "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
      highlight: "Third Engineer Edward",
      utcTime: "UTC 1055",
      localTime: "LT +06:30",
    },
    {
      type: "normal",
      notice: "",
      highlight: "",
      utcTime: "",
      localTime: "",
    },
  ];
  return (
    <div className="dailystream">
      <div className="deilyStream-header">
        <div>
          <h3>Daily Stream</h3>
          <p>Last updated - 4 minutes ago</p>
        </div>
        <FiRefreshCw className="refresh-icon" />
      </div>
      <StreamList streams={sampleStreams} />
    </div>
  );
};

export default DailyStream;
