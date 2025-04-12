import React from "react";
import { FaSearch, FaShareAlt, FaDownload, FaHeart } from "react-icons/fa";
import Dropdown from './Dropdown'; // Ensure the path is correct
import "./App.css";

function App() {
  const downloads = [
    { name: "Document 1", size: "2 MB", time: "10:30 AM" },
    { name: "Document 2", size: "1.5 MB", time: "11:00 AM" },
    { name: "Document 3", size: "3 MB", time: "12:15 PM" },
    { name: "Document 4", size: "4.2 MB", time: "1:45 PM" },
  ];// Example list of downloads

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">ARCHIVES</div>
        <div className="nav-links">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#upload" className="nav-link">UPLOAD</a>
          <a href="#notification" className="nav-link">NOTIFICATION</a>
          <a href="#downloads" className="nav-link">DOWNLOADS</a>
        </div>
      </nav>

      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search documents..." />
          <button><FaSearch /></button>
        </div>
        <div className="filters">
          <select>
            <option value="">Select Level</option>
            <option value="certificate">Certificate</option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor</option>
            <option value="masters">Masters</option>
          </select>
          <select>
            <option value="">Select Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
          <select>
            <option value="">Select Semester</option>
            <option value="first">First</option>
            <option value="second">Second</option>
          </select>
          <select>
            <option value="">Select Program</option>
            <option value="coe">COE</option>
            <option value="it">IT</option>
            <option value="cs">CS</option>
          </select>
        </div>
      </div>

      <div className="documents-section">
        {Array.from({ length: 12 }, (_, index) => (
          <div className="document-card" key={index}>
            <div className="doc-image">📄</div>
            <div className="doc-name">Document {index + 1}</div>
            <div className="doc-footer">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="icons">
                <FaShareAlt /> <FaDownload /> <FaHeart />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="offline-downloads">
        <h3>My Downloads</h3>
        <div className="downloads-container">
        </div>
        <Dropdown downloads={downloads} /> {/* Pass the downloads array as a prop */}
      </div>
    </div>
  );
}

export default App;