import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '80vh',
        flexDirection: 'column',
        marginTop: 100,
      }}
    >
      <h2>Algolia Coding Challenge - Dec, 2021</h2>
      <ol>
        <li>
          <Link to="/challenge1">Challenge 1</Link>
        </li>
        <li>
          <Link to="/challenge2">Challenge 2</Link>
        </li>
        <li>
          <Link to="/challenge3">Challenge 3</Link>
        </li>
        <li>
          <Link to="/challenge4">Challenge 4</Link>
        </li>
        <li>
          <Link to="/challenge5">Challenge 5</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
