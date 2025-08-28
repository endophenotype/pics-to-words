import PropTypes from "prop-types";
import React from "react";

import { GAME_TYPES } from "../settings";

export function InitialPage({ onStart }) {
  const handleStart = (type) => {
    onStart(type);
  };
  const buttons = GAME_TYPES.map(({ icon, label, type }) => (
    <button
      key={icon}
      onClick={() => handleStart(type)}
      className={`ico-button ico-button-${icon}`}
      type="button"
    >
      {label}
    </button>
  ));
  return (
    <section className="rules">
      <img
        src={new URL("../img/pics-to-words.png", import.meta.url).toString()}
        width="340"
        height="48"
        alt="Pics to words"
      />
      <h2>Добро пожаловать!</h2>
      <h3>Правила игры</h3>
      <ul className="rules-list">
        <li>Игра предназначена для разучивания слов иностранного языка.</li>
        <li>В наборе есть пары карточек – со словом и рисунком.</li>
        <li>Нужно выбрать карточку с рисунком и подходящую ей со словом.</li>
        <li>Если карточки совпали — они становятся недоступными для выбора.</li>
      </ul>
      {buttons}
    </section>
  );
}

InitialPage.propTypes = {
  onStart: PropTypes.func.isRequired,
};
