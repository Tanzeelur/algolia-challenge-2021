import React from 'react';
import PropTypes from 'prop-types';
import { connectHits, Highlight } from 'react-instantsearch-dom';
import './index.css';

function SpeakerHits({ hits }) {
  return (
    <>
      {hits.map(prop => (
        <div key={prop.name} className="speaker-container">
          <img
            src={prop.image_url}
            alt={prop.name}
            width="90px"
            height="90px"
            className="speaker-img"
          />
          <div>
            <p className="speaker-name">
              <Highlight attribute="name" hit={prop} />
            </p>
            <p className="speaker-description">{prop.description}</p>
            <p className="speaker-stats">{prop.nbTalks} talks</p>
          </div>
        </div>
      ))}
    </>
  );
}

SpeakerHits.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nbTalks: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default connectHits(SpeakerHits);
