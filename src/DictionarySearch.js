import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import SearchResult from "./SearchResult";

export default function DictionarySearch() {
  let [word, setWord] = useState(" ");
  let [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <main>
      <div className="row start">
        <div className="col">
          <h1 className="app-title">Dictionary</h1>

          <form onSubmit={handleSearch}>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type a word..."
                onChange={handleChange}
              />
              <div class="input-group-append">
                <button class="search-button" type="submit">
                  Search
                </button>
              </div>
            </div>
            <small id="emailHelp" class="form-text text-muted">
              Search words like sunset, yoga, dance, hello, etc.
            </small>
          </form>
          <SearchResult
            definition={searchResults}
            className="overflow-y-auto"
          />
        </div>
      </div>
    </main>
  );
}
