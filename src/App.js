import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <DictionarySearch />
        </div>

        <footer className="footer mt-auto text-center py-3">
          <span className="footer-text">
            coded by{" "}
            <a
              href="https://luciadesperati.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Lucia Desperati
            </a>
          </span>
        </footer>
      </body>
    </div>
  );
}

export default App;
