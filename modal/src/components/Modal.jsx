import React from "react";

const Modal = ({ children, setShowModal, showModal }) => {
  return (
    <>
      {showModal && (
        <div>
          <div className="modal-bg" onClick={() => setShowModal(false)}></div>

          <div className="modal">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
