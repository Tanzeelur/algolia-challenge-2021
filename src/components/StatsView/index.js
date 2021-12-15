import React from 'react';
import PropTypes from 'prop-types';
import { connectStats } from 'react-instantsearch-dom';
import './index.css';

function StatsView({ nbHits, processingTimeMS }) {
  return (
    <div className="stats-container">
      <span> ({nbHits})</span>
      <div className="stats-description">Found in {processingTimeMS}ms</div>
    </div>
  );
}

StatsView.propTypes = {
  nbHits: PropTypes.number,
  processingTimeMS: PropTypes.number,
};

export default connectStats(StatsView);
