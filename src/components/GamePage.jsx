import getDeclensionMin from "@dubaua/get-declension";
import PropTypes from "prop-types";
import React from "react";

import { useGame } from "../hooks/useGame.jsx";

import { GameHeader } from "./GameHeader.jsx";
import { Grid } from "./Grid.jsx";
import { Modal } from "./Modal.jsx";

export function GamePage({ words = [], onShowResults }) {
  const { finishedItems, checkItems, errorsCount, isGameOver, isWin } =
    useGame(words);

  const wordsDeclension = getDeclensionMin({
    count: finishedItems.length / 2,
    one: "слово",
    few: "слова",
    many: "слов",
  });

  const modalClassName = isWin ? "" : "modal-box-lose";
  const modalCaption = isWin ? "Победа" : "Поражение";
  const modalDescription = `Вы нашли ${wordsDeclension}`;

  const handleResultsClick = () => {
    onShowResults(finishedItems.length / 2);
  };

  return (
    <section className="game">
      <GameHeader
        value={finishedItems.length}
        max={words.length}
        errorsCount={errorsCount}
      />
      <Grid
        words={words}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {isGameOver && (
        <Modal className={modalClassName}>
          <h3 className="modal-caption">{modalCaption}</h3>
          <p className="modal-description">{modalDescription}</p>
          <button onClick={handleResultsClick} className="button" type="button">
            Результаты
          </button>
        </Modal>
      )}
    </section>
  );
}

GamePage.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      word: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onShowResults: PropTypes.func.isRequired,
};
