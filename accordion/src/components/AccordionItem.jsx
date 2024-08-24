import React from "react";

const AccordionItem = ({ item, openIndex, setOpenIndex }) => {
  return (
    <div>
      <header className="header" onClick={setOpenIndex}>
        <p>{item.title}</p> <button>{openIndex ? "-" : "+"}</button>
      </header>
      {openIndex && <p className="text">{item.text}</p>}
    </div>
  );
};

export default AccordionItem;
