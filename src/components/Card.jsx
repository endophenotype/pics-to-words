import PropTypes from "prop-types";
import React from "react";

export function Card({
  item,
  isSelected,
  isFinished,
  onCardClick,
  isChecking,
}) {
  const { type, url, word: text, id } = item;
  const content =
    type === "image" ? (
      <img src={url} className="card-image" alt="" />
    ) : (
      <span>{text}</span>
    );

  const showError = isChecking && isSelected && !isFinished;

  const className = `card ${isSelected ? "selected" : ""} ${
    isFinished ? "disabled" : ""
  } ${showError ? "error" : ""}`;

  const handleClick = () => {
    if (isFinished) {
      return;
    }
    onCardClick(id);
  };

  return (
    <li onClick={handleClick} className={className}>
      {content}
    </li>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string,
    word: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isChecking: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  isSelected: false,
  isFinished: false,
  isChecking: false,
};
