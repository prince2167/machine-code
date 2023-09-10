import { toast } from "react-hot-toast";
import { useOutsideClick } from "../hooks/useOutsideClick";
import React from "react";

const ClickOutside = () => {
    const domNode= useOutsideClick(()=>{
        toast("clicked outside🔥")
    })
  return <div className="conatiner">
    <div className="box" ref={domNode}>Click outSide</div>
  </div>;
};

export default ClickOutside;
