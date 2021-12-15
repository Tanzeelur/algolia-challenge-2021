import React from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';
import './index.css';

function Hit(props) {
  const { year, name, domain, price, image, quality, type } = props;

  return (
    <article className="hit-container">
      <img
        alt={name}
        src={image}
        width="50%"
        height={300}
        style={{ marginRight: 8 }}
      />
      <div>
        <h3 className="hit-title">{name}</h3>
        <div className="hit-title">
          {domain}, {year}
        </div>
        <div>Type: {type}</div>
        <div>Quality: {quality}</div>
        <div>{`Price: $${price}`}</div>
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  type: PropTypes.string,
  year: PropTypes.number,
  price: PropTypes.number,
  quality: PropTypes.number,
};

export default connectHits(HitsView);
