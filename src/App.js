import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😪": "Sleepy",
  "😞": "Sad",
  "❤️": "Love",
  "😲": "Shocked",
  "😡": "Angry"
};

var emojisWeKnow = Object.keys(emojiDictionary);
// Converting our Object to an array.

export default function App() {
  var [meaning, setMeaning] = useState("");

  function handleUserInput(event) {
    // processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! this isn't in our Database yet!";
    }
    setMeaning(meaning); // React Call for displaying Output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // React Call for displaying Output
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>

      <input onChange={handleUserInput}></input>

      <div className="ouptut">{meaning}</div>
      {/* Actual ouptut set by React using useState */}

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
