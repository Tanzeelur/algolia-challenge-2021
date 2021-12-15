import React from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';
import './index.css';

function Hit(props) {
  const { year, title, image, rating, score } = props;

  return (
    <article className="hit-container">
      <img
        alt={title}
        src={image}
        width="50%"
        height={300}
        style={{ marginRight: 8 }}
      />
      <div>
        <h3 className="hit-title">{title}</h3>
        <h4 className="hit-title">{year}</h4>
        <div>Rating: {rating}</div>
        <div>Score: {score}</div>
      </div>
    </article>
  );
}

function HitsView({ hits }) {
  return (
    hits && (
      <div className="hits-container">
        <div className="hits-grid-row">
          <div className="hits-grid-item-1">
            {hits[0] && <Hit {...hits[0]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[1] && <Hit {...hits[1]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[2] && <Hit {...hits[2]} />}
          </div>
        </div>
        <div className="hits-grid-row">
          <div className="hits-grid-item-1">
            {hits[3] && <Hit {...hits[3]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[4] && <Hit {...hits[4]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[5] && <Hit {...hits[5]} />}
          </div>
        </div>
      </div>
    )
  );
}

HitsView.propTypes = {
  hits: PropTypes.arrayOf(Hit.propTypes),
};

Hit.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.number,
  rating: PropTypes.number,
  score: PropTypes.number,
};

export default connectHits(HitsView);
