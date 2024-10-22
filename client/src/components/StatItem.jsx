import React from "react";
import Wrapper from "../assets/Wrappers/StatItem";

const StatItem = ({ value, color, title, icon, bcg }) => {
  return (
    <>
      <Wrapper color={color} bcg={bcg}>
        <div className="wrapper-stats">
          <h2 className="stat-num">{value}</h2>
          <div className="stat-icon">{icon}</div>
        </div>
        <div>
          <h2 className="stat-title">{title}</h2>
        </div>
      </Wrapper>
    </>
  );
};

export default StatItem;
