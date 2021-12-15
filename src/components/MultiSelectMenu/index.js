import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList, Highlight } from 'react-instantsearch-dom';
import './index.css';

function MultiSelectMenu({
  title,
  items,
  refine,
  searchForItems,
  currentRefinement,
  createURL,
  isFromSearch,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const container = useRef('');
  const handleClick = e => {
    if (!container.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClick, false);
    return () => {
      window.removeEventListener('mousedown', handleClick, false);
    };
  }, []);
  return (
    <div ref={container}>
      <div
        onClick={() => setShowDropdown(true)}
        className="multiselect-container"
      >
        {title}{' '}
        {currentRefinement.length > 0 ? `(${currentRefinement.length})` : ''}
      </div>
      {showDropdown && (
        <div className="multiselect-dropdown-container">
          <ul className="multiselect-dropdown-list">
            <li className="multiselect-dropdown-list-item">
              <input
                type="search"
                autoFocus
                placeholder="Search"
                onChange={event => searchForItems(event.currentTarget.value)}
              />
            </li>
            {items.map(item => (
              <li key={item.label} className="multiselect-dropdown-list-item">
                <a
                  href={createURL(item.value)}
                  style={{
                    fontWeight: item.isRefined ? 'bold' : '',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                  onClick={event => {
                    event.preventDefault();
                    refine(item.value);
                    setShowDropdown(false);
                  }}
                >
                  {isFromSearch ? (
                    <Highlight attribute="label" hit={item} />
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {currentRefinement.indexOf(item.label) > -1 ? (
                    <span style={{ color: 'red' }}>X</span>
                  ) : (
                    `(${item.count})`
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

MultiSelectMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.array.isRequired,
    })
  ),
  refine: PropTypes.func,
  searchForItems: PropTypes.func,
  currentRefinement: PropTypes.array,
  createURL: PropTypes.func,
  isFromSearch: PropTypes.bool,
};

export default connectRefinementList(MultiSelectMenu);
