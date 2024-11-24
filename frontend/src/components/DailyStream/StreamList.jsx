import React from "react";
import { RiAttachment2 } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
const StreamList = ({ streams }) => {
  return (
    <div className="stream-list">
      {streams.map((stream, index) => (
        <div key={index} className="stream-card">
          {stream.type === "important" && (
            <div className="stream-header">
              <p className="important-notice">Important Notice</p>
              <RiAttachment2 className="important-icon" />
            </div>
          )}
          <p
            className={
              stream.type === "important"
                ? "stream-notice-Imp"
                : "stream-notice"
            }
          >
            <span>{stream.highlight}</span> {stream.notice}
          </p>
          {stream.type === "important" ? (
            <div className="stream-footer-imp">
              <span>
                <FaRegEye className="important-icon" /> 1
              </span>
              <button className="read-btn">Read</button>
            </div>
          ) : (
            <div className="stream-footer">
              <span>
                {stream.utcTime} | {stream.localTime}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StreamList;
