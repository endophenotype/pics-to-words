import PropTypes from "prop-types";
import React from "react";

export function Progress({ value, max }) {
  return (
    <div className="progress-wrapper">
      <div
        className="progress"
        style={{ width: `${((max - value) / max) * 100}%` }}
      ></div>
    </div>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
