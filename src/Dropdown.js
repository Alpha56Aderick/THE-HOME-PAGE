import React, { useState } from 'react';
import './App.css'; // Ensure this file contains the dropdown styles

const Dropdown = ({ downloads }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadList, setDownloadList] = useState(downloads);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (index) => {
    const updatedList = downloadList.filter((_, i) => i !== index);
    setDownloadList(updatedList);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span id="dropdown-label">My Downloads</span>
        <span className="arrow">▼</span>
      </button>
      <ul className="dropdown-menu">
        {downloadList.length > 0 ? (
          downloadList.map((download, index) => (
            <li className="dropdown-item" key={index}>
              <div className="download-details">
                <span className="download-name">📄 {download.name}</span>
                <span className="download-size">{download.size}</span>
                <span className="download-time">{download.time}</span>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <li className="dropdown-item">No downloads available</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;