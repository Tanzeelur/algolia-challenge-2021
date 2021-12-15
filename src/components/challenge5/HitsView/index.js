import React from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';
import moment from 'moment';
import './index.css';

function Hit(props) {
  const { name, date, location } = props;

  return (
    <article className="hit-container">
      <div>
        <h3 className="hit-title">{name}</h3>
        <div className="hit-title">
          Date: {moment(date).format('Do ddd, MMM YYYY')}
        </div>
        <div>Location: {location}</div>
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
        <div className="hits-grid-row">
          <div className="hits-grid-item-1">
            {hits[6] && <Hit {...hits[6]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[7] && <Hit {...hits[7]} />}
          </div>
          <div className="hits-grid-item-2">
            {hits[8] && <Hit {...hits[8]} />}
          </div>
        </div>
      </div>
    )
  );
}

HitsView.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape(Hit.propTypes)),
};

Hit.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default connectHits(HitsView);
