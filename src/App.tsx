import React from 'react';
import logo from './assets/image/fist_nobg.svg';
import bgVideo from './assets/video/anim.mp4';
import './App.css';

function App() {
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
    }}>
      <video autoPlay muted loop playsInline id="myVideo" style={{
        position: "absolute",
        width: "100%",
        top: "50%",
        transform: "translateY(-50%)",
      }}>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;
