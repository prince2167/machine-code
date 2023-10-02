import React from "react";

const Listbox = ({ items, isLoading, error,activeIndex }) => {
  if (isLoading) return <h1>Loading...</h1>;
//   console.log(activeIndex);
  return (
    <div>
      <ul className="listbox-container">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li
              className={`listboxItem ${
                activeIndex === index ? "activeItem" : ""
              }`}
              key={index}
            >
              {item}
            </li>
          ))
        ) : (
          <h1>not match found</h1>
        )}
      </ul>
    </div>
  );
};

export default Listbox;
