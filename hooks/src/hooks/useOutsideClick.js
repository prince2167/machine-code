import { useEffect, useRef } from "react";

export const useOutsideClick = (callback) => {
  const domNode = useRef();
  const handleClick = (event) => {
    if (domNode.current && !domNode.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return domNode;
};
