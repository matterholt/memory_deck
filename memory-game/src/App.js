import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function Cards({ cards }) {
  const card = cards.map(x => {
    return <p key={x.code}>{x.suit}</p>;
  });
  return <div>{card}</div>;
}

function App() {
  const [deck, updateDeck] = useState([]);

  // fetch six cards
  useEffect(async () => {
    const res = await fetch(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=6"
    );
    const json = await res.json();
    updateDeck(json.cards);
  }, []);

  useEffect(() => {
    console.log(deck);
  }, [deck]);

  return (
    <div className="App">
      <h1> testing</h1>
      <Cards cards={deck} />
    </div>
  );
}

export default App;
