import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <DictionarySearch />
      </div>

      <footer className="footer mt-auto text-center py-3">
        <span className="footer-text">
          Coded by{" "}
          <a
            href="https://luciadesperati.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Lucia Desperati
          </a>
          ,{" "}
          <a
            href="https://github.com/luciadesperati/dictionary-project-react"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            open-sourced.
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
