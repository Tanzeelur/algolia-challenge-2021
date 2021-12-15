import React from 'react';
import PropTypes from 'prop-types';
import { connectRange } from 'react-instantsearch-dom';
import moment from 'moment';
import './index.css';

function DateFilter({ currentRefinement, min, max, refine }) {
  return (
    <>
      <input
        type="date"
        min={moment(min).format('YYYY-MM-DD')}
        max={moment(max).format('YYYY-MM-DD')}
        value={moment(currentRefinement.min || '').format('YYYY-MM-DD')}
        style={{ height: 14 }}
        onChange={event =>
          refine({
            ...currentRefinement,
            min: moment(event.currentTarget.value).valueOf(),
          })
        }
      />
      <input
        type="date"
        min={moment(min).format('YYYY-MM-DD')}
        max={moment(max).format('YYYY-MM-DD')}
        style={{ height: 14 }}
        value={moment(currentRefinement.max || '').format('YYYY-MM-DD')}
        onChange={event =>
          refine({
            ...currentRefinement,
            max: moment(event.currentTarget.value).valueOf(),
          })
        }
      />
    </>
  );
}

DateFilter.propTypes = {
  currentRefinement: PropTypes.object.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  refine: PropTypes.func,
};

export default connectRange(DateFilter);
