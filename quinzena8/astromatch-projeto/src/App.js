import React, { useState} from "react";
import Home from "./Components/Home";
import Match from "./Components/Match";


export default function App(props) {
  const [page, setPage] = useState("Home");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () => {
    if (page === "Home") {
      return <Home change={changePage} />;
    } else if (page === "Match") {
      return <Match change={changePage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}
