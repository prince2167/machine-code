import React, { useState } from "react";

const Rating = ({
  totalItems,
  rating,
  onItemClick,
  ratingItem,
  loader,
  isLoading,
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const isFilled = (index) =>
    hoverIndex !== null ? index <= hoverIndex : index < rating;
  return (
    <div className="rating-conatiner">
      {Array.from({ length: totalItems }).map((item, index) => (
        <span
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => onItemClick(index + 1)}
        >
          {ratingItem(isFilled(index))}
        </span>
      ))}
      {isLoading && loader()}
    </div>
  );
};

export default Rating;
