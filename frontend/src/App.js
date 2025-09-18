import React, { useState } from "react";
import myPicture from "./unnamed.jpg";
import "./App.css";

function App() {
  const [apiResult, setApiResult] = useState("");

  const callApi = async (endpoint) => {
    try {
      const res = await fetch(endpoint);
      const text = await res.text(); // รับเป็น text ก่อน
      try {
        const json = JSON.parse(text); // แปลงเป็น JSON
        setApiResult(JSON.stringify(json, null, 2));
      } catch {
        setApiResult(text); // ถ้าไม่ใช่ JSON ก็โชว์ text
      }
    } catch (err) {
      setApiResult("Error: " + err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* รูปโปรไฟล์ */}
        <img src={myPicture} className="App-logo" alt="logo" />
        <h1>🚀 Thanawat Srisaeng</h1>
        <p>Fullstack Dev Wannabe 💻</p>

        {/* ปุ่มเรียก API */}
        <div className="button-group">
          <button className="api-button" onClick={() => callApi("/api/hello")}>
            👋 Hello API
          </button>
          <button
            className="api-button"
            onClick={() => callApi("/api/myprofile")}
          >
            🙋‍♂️ My Profile
          </button>
          <button className="api-button" onClick={() => callApi("/api/time")}>
            ⏰ Server Time
          </button>
          <button className="api-button" onClick={() => callApi("/api/random")}>
            🎲 Random Number
          </button>
        </div>

        {/* แสดงผล API */}
        {apiResult && <pre className="api-result">{apiResult}</pre>}

        {/* Footer */}
        <footer className="footer">
          <p>Made with ❤️ by Thanawat Srisaeng</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
