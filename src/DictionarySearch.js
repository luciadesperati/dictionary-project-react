import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(" ");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary-search">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
    </div>
  );
}
