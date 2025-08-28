import PropTypes from "prop-types";
import React from "react";

import { LIVES_COUNT } from "../settings";

import { Hearts } from "./Hearts.jsx";
import { Progress } from "./Progress.jsx";

export function GameHeader({ value, max, errorsCount }) {
  return (
    <>
      <img
        src={new URL("../img/pics-to-words.png", import.meta.url).toString()}
        width="112"
        height="16"
        alt="Pics to words"
      />
      <Progress value={value} max={max} />
      <Hearts count={LIVES_COUNT} value={errorsCount} />
    </>
  );
}

GameHeader.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
};

GameHeader.defaultProps = {
  value: 0,
  max: 100,
  errorsCount: 0,
};
