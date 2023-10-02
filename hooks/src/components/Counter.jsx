import React, { useState } from "react";
import useCount from "../hooks/useCounter";

const Counter = () => {
 const {count, increaseCount, decreaseCount, reset}= useCount(0)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Count: {count}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ cursor: "pointer" }} onClick={increaseCount}>Increase</button>
        <button style={{ cursor: "pointer" }} onClick={decreaseCount}>Decrease</button>
        <button style={{ cursor: "pointer" }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
