import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [word, setWord] = useState(" ");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    // alert(`Searching for ${word}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(handleResponse);
    return <p>Loading notifications..</p>;
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary-search">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
