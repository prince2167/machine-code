import React, { useState } from "react";
import { data } from "../utils/data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-item">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          openIndex={openIndex === index ? true : false}
          setOpenIndex={() =>
            openIndex === index ? setOpenIndex(null) : setOpenIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default Accordion;
