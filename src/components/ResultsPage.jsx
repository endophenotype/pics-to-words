import PropTypes from "prop-types";
import React from "react";

export function ResultsPage({ results, current, onResetGame }) {
  const sortedResults = [
    ...results,
    { name: "Ваш результат", steps: current },
  ].sort((a, b) => b.steps - a.steps);
  const resultsRows = sortedResults.map(({ name, steps }, index) => (
    <tr
      key={name}
      className={`result-table-row ${steps === current ? "active" : ""}`}
    >
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{steps}</td>
    </tr>
  ));
  return (
    <section className="result">
      <img
        src={new URL("../img/pics-to-words.png", import.meta.url).toString()}
        width="340"
        height="48"
        alt="Pics to words"
      />
      <h2>Лучшие результаты</h2>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>{resultsRows}</tbody>
      </table>
      <button onClick={onResetGame} className="button" type="button">
        Новая игра
      </button>
    </section>
  );
}

ResultsPage.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      steps: PropTypes.number.isRequired,
    }),
  ).isRequired,
  current: PropTypes.number.isRequired,
  onResetGame: PropTypes.func.isRequired,
};
