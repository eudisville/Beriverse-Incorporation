// src/components/Card.jsx
import React from "react";
import './Activity.css'

const Activity = ({ title, content }) => {
  return (
    <div className="activity">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Activity;
