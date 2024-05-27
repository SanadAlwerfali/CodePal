/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // Add your logo file to the src folder

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('Language');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleExplain = async () => {
    const response = await fetch('/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    setResult(data.explanation);
  };

  const handleFix = async () => {
    const response = await fetch('/api/fix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    setResult(data.fix);
  };

  const handleStyle = async () => {
    const response = await fetch('/api/style', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    setResult(data.style);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here"
        />
        <div className="buttons-container">
        <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
            <button className="dropbtn" onClick={toggleDropdown}>{language}</button>
            <div className="dropdown-content">
              <a onClick={() => handleLanguageChange('Python')}>Python</a>
              <a onClick={() => handleLanguageChange('JavaScript')}>JavaScript</a>
              <a onClick={() => handleLanguageChange('Java')}>Java</a>
              <a onClick={() => handleLanguageChange('C++')}>C++</a>
              <a onClick={() => handleLanguageChange('Ruby')}>Ruby</a>
              <a onClick={() => handleLanguageChange('Go')}>Go</a>
              <a onClick={() => handleLanguageChange('Swift')}>Swift</a>
            </div>
          </div>
          <button onClick={handleExplain}>Explain</button>
          <button onClick={handleFix}>Fix</button>
          <button onClick={handleStyle}>Style</button>
        </div>
        <textarea
          className="result-output"
          value={result}
          readOnly
          placeholder="Results will be shown here"
        />
      </div>
    </div>
  );
}

export default App;
