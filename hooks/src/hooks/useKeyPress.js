import { useState, useEffect } from "react";

export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);
 
  const downHandler = ({key}) => {
    if (key === targetKey) setKeyPressed(true);
  };
  const upHandler = ({key}) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", downHandler);
    document.addEventListener("keyup", upHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};
