import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import SearchResult from "./SearchResult";

export default function DictionarySearch() {
  let [word, setWord] = useState(" ");
  let [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setSearchResults(response.data[0]);
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
      <SearchResult definition={searchResults} />
    </div>
  );
}
