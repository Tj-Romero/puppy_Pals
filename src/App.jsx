import React, { useState } from 'react';
import './App.css'; // Importing the CSS
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handlePuppyClick = (id) => {
    setFeatPupId(id);
  };

  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  return (
    <div className="App"> {/* Assuming 'App' class is styled appropriately */}
      <header>
        <img src="path-to-logo.png" className="logo" alt="Logo" /> {/* Logo with animation */}
      </header>

      <div className="card"> {/* Card container for the puppies list */}
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handlePuppyClick(puppy.id)} className="puppy-item">
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && (
        <div className="card"> {/* Applying card style to the details section */}
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      <p className="read-the-docs">Read more about this application</p> {/* Documentation or additional information */}
    </div>
  );
}

export default App;
