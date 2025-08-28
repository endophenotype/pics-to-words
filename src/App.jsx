import React from "react";

import { GamePage } from "./components/GamePage.jsx";
import { InitialPage } from "./components/InitialPage.jsx";
import { ResultsPage } from "./components/ResultsPage.jsx";
import { AppRoute } from "./settings.js";

function App({ getWords, results = [] }) {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [words, setWords] = React.useState([]);
  const showResults = (wordsCount) => {
    setResult(wordsCount);
    setPage(AppRoute.Results);
  };
  const handleReset = () => {
    setPage(AppRoute.Initial);
  };
  const handleStart = (type) => {
    const words = getWords(type);
    setWords(words);
    setPage(AppRoute.Game);
  };
  const getPage = (route) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStart={handleStart} />;
      case AppRoute.Game:
        return <GamePage words={words} onShowResults={showResults} />;
      case AppRoute.Results:
        return (
          <ResultsPage
            current={result}
            onResetGame={handleReset}
            results={results}
          />
        );
      default:
        return null;
    }
  };
  return getPage(page);
}

export default App;
