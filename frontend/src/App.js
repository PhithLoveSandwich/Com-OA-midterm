import myPicture from "./unnamed.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myPicture} className="App-logo" alt="logo" />
        <h1></h1>
        <p>Made by Thanawat Srisaeng</p>
        <a
          className="App-link"
          href="http://localhost:3000/api/hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing hello Api.
        </a>
      </header>
    </div>
  );
}

export default App;
