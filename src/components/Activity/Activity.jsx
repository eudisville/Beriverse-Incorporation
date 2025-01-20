import React from "react";
import './Activity.css';

const Activity = ({ backgroundImage, title, content, backgroundColor }) => {
  return (
    <div className="activity">
      <div
        className="activity-background"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundColor: backgroundColor || 'black',
        }}
      ></div>
      <div className="activity-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Activity;