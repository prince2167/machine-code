import React from "react";

const Checkbox = ({ item, handleCheckbox }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={item.name}
        checked={item?.isChecked || false}
        onChange={handleCheckbox}
      />
      <span>{item.name}</span>
    </label>
  );
};

export default Checkbox;
