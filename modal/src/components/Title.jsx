import React from "react";

const Title = ({ setShowModal }) => {
  return (
    <div className="title">
      <p>
        The only end-to-end front end interview preparation platform. Brought to
        you by big tech Senior / Staff Front End Engineers.
      </p>
      <button onClick={() => setShowModal(false)} className="cancel-btn">
        Cancel
      </button>
    </div>
  );
};

export default Title;
