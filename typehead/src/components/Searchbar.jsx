import React, { useState } from "react";
import useFetch from "./useFetch";

const Searchbar = ({ listBox }) => {
  const [query, setQuery] = useState("");

  const [activeIndex, setActiveIndex] = useState(null);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const [data, setData, error, isLoading] = useFetch(query);

  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      // enter
      setQuery(data[activeIndex])
      setActiveIndex(null)
    } else if (keyCode === 40) {
      // move down
      if (activeIndex === null && activeIndex === data?.length - 1) {
        setActiveIndex(0);
      } else if (activeIndex === data?.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (keyCode === 38) {
      // press up
      if (activeIndex === 0) {
        setActiveIndex(data?.length - 1);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };
  return (
    <div className="container">
      <h1 className="heading">Searchbox</h1>
      <label htmlFor="person">Enter Person name</label>
      <br />
      <input
        placeholder="Enter your favourite star war char"
        id="person"
        value={query}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      {data?.length > 0 && listBox(data, isLoading, error, activeIndex)}
    </div>
  );
};

export default Searchbar;
