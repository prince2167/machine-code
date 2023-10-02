import { useState } from "react";

const useCount = (value) => {
  const [count, setCount] = useState(value);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return { count, increaseCount, decreaseCount, reset };
};

export default useCount