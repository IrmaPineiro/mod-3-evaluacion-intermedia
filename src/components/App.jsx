import "../scss/App.scss";
import ListCountries from "./ListCountries";
import dataCountries from "./services/data.json";
import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
        <ListCountries countries={dataCountries} />
      </main>
    </>
  );
}

export default App;
