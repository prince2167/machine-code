import React, { useEffect } from "react";
import { useKeyPress } from "../hooks/useKeyPress";
import { toast } from "react-hot-toast";
const Press = () => {
  const shiftKey = useKeyPress("Shift");
  const enterKey = useKeyPress("Enter");

  useEffect(() => {
    if (shiftKey && enterKey) {
      showToast();
    }
  }, [shiftKey, enterKey]);

  const showToast = () => {
    toast.success("key pressed🔥");
  };
  return (
    <div>
      <div>
        <h1>Shift + Enter</h1>

        <p>Hit Shift + Enter to show a toast! 🎉</p>
        {/* Write your code here */}
      </div>
    </div>
  );
};

export default Press;
