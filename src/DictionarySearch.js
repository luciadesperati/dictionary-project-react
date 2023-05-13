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

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "5qaBOpmVGcyhnzqNRlVpu33bUDcNM060FoWN7bgjUiHFO17nFlFPFtza";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type a word..."
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button className="search-button" type="submit">
                  Search
                </button>
              </div>
            </div>
            <small id="emailHelp" className="form-text text-muted">
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
