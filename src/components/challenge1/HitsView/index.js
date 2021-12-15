import React from 'react';
import PropTypes from 'prop-types';
import { connectHits, Highlight } from 'react-instantsearch-dom';
import './index.css';

function Hit(props) {
  const { slug, name, image_url, size } = props;
  return (
    <a href={`https://www.ted.com/talks/${slug}`}>
      <article style={{ padding: 4, position: 'relative' }}>
        <img alt={name} src={image_url} width="100%" />
        <div style={{ position: 'absolute', bottom: 24, left: 16 }}>
          <p
            style={{
              color: '#FFF',
              fontSize: size === 'big' ? 20 : 18,
              margin: 0,
            }}
          >
            <Highlight attribute="speakers" hit={props} />
          </p>
          <h3
            style={{
              fontSize: size === 'big' ? 44 : 20,
              position: 'relative',
              color: '#FFF',
              margin: 0,
            }}
          >
            {name}
          </h3>
        </div>
      </article>
    </a>
  );
}

function HitsView({ hits }) {
  return (
    hits && (
      <div className="hits-container">
        <div className="hits-grid-row-1">
          <div className="hits-grid-row-1-item-1">
            {hits[0] && <Hit {...hits[0]} size="big" />}
          </div>
          <div className="hits-grid-row-1-item-2">
            {hits[1] && <Hit {...hits[1]} />}
            {hits[2] && <Hit {...hits[2]} />}
          </div>
        </div>
        <div className="hits-grid-row-2">
          <div className="hits-grid-row-2-item-1">
            {hits[3] && <Hit {...hits[3]} />}
          </div>
          <div className="hits-grid-row-2-item-2">
            {hits[4] && <Hit {...hits[4]} />}
          </div>
          <div className="hits-grid-row-2-item-2">
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
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default connectHits(HitsView);
