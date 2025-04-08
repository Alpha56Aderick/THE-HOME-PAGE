import React from "react";
import { FaSearch, FaShareAlt, FaDownload, FaHeart } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">ARCHIVES</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Upload</a>
          <a href="#">Notification</a>
          <a href="#">More</a>
        </div>
      </nav>

      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search documents..." />
          <button><FaSearch /></button>
        </div>
        <div className="filters">
          <select><option>Year</option></select>
          <select><option>Semester</option></select>
          <select><option>Program</option></select>
        </div>
      </div>

      <div className="card-section">
        <div className="info-card">Card 1</div>
        <div className="info-card">Card 2</div>
        <div className="info-card">Card 3</div>
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
        <h3>My Downloads </h3>
        <p>Documents saved for offline access will appear here.</p>
      </div>
    </div>
  );
}

export default App;