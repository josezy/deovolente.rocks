import React from 'react';
import logo from './assets/image/fist_nobg.png';
// import bgVideo from './assets/video/anim.mp4';
import './App.css';

function App() {
  return (
    <>
      {/* <video autoPlay muted loop playsInline id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    </>
  );
}

export default App;
