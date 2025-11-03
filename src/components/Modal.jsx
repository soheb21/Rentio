import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="w-full max-h-96 max-w-md rounded-lg bg-white p-6 shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
