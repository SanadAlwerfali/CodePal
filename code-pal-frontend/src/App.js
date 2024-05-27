/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';
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
    try {
      const response = await axios.post('http://localhost:5001/api/explain', {
        code,
        language
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult('An error occurred while explaining the code.');
    }
  };

  const handleFix = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/fix', {
        code,
        language
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult('An error occurred while fixing the code.');
    }
  };

  const handleStyle = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/style', {
        code,
        language
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setResult('An error occurred while styling the code.');
    }
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
