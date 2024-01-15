import React from "react";

interface IProps {
  color: string;
}

const DownArrowIcon = ({ color }: IProps) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 13.25L1.5 5.75L16.5 5.75L9 13.25Z" fill={color} />
    </svg>
  );
};

export default DownArrowIcon;
