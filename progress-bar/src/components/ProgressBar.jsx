import React, { useEffect, useState } from "react";
import { MIN, MAX } from "../constant";

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);
  
  return (
    <div className="progress">
      <span
        className="bar"
        style={{ color: percentage > 49 ? "white" : "black" }}
      >
        {percentage.toFixed()}%
      </span>
      <div
        style={{
          transform: `scaleX(${percentage / MAX})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
