import PropTypes from "prop-types";
import React from "react";

export function Modal({ children, className }) {
  return (
    <div className="modal">
      <div className={`modal-box ${className}`}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
