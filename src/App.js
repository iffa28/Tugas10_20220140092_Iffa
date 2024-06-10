import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showMembers, setShowMembers] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  const toggleAlbums = () => {
    setShowAlbums(!showAlbums);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2><b>StrayKids Everywhere All around the world</b></h2>
        <div className="button-container">
          <div className='row'>
              <button onClick={toggleMembers}>
                {showMembers ? 'Hide Members' : 'Show Members'}
              </button>
              <button onClick={toggleAlbums}>
                {showAlbums ? 'Hide Albums' : 'Show Albums'}
              </button>
            </div>
        </div>

        <div className="lists-container">
          <div className='col'>
            {showMembers && (
              <ul className="members-list">
                <li>Bang Chan</li>
                <li>Lee Know</li>
                <li>Changbin</li>
                <li>Hyunjin</li>
                <li>Han</li>
                <li>Felix</li>
                <li>Seungmin</li>
                <li>I.N</li>
              </ul>
              )}
          </div>
          <div className='col'>
              {showAlbums && (
                <ul className="albums-list">
                  <li>I Am NOT (2018)</li>
                  <li>I Am WHO (2018)</li>
                  <li>I Am YOU (2018)</li>
                  <li>Clé 1: MIROH (2019)</li>
                  <li>Clé 2: Yellow Wood (2019)</li>
                  <li>Clé: LEVANTER (2019)</li>
                  <li>GO生 (Go Live) (2020)</li>
                  <li>IN生 (In Life) (2020)</li>
                  <li>NOEASY (2021)</li>
                  <li>ODDINARY (2022)</li>
                  <li>CIRCUS (2022)</li>
                  <li>MAXIDENT (2022)</li>
                </ul>
                )}
          </div>
        </div>

        <a
          className="App-link"
          href="https://straykids.jype.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official StrayKids Website
        </a>
        <a
          className="App-link"
          href="https://iffa28.github.io/Exe2_20220140092_Iffatuz_Zahra/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official SKZ FanStore
        </a>
      </header>
    </div>
  );
}

export default App;
