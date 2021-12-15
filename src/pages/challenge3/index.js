import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Index,
  Pagination,
  Configure,
  SortBy,
  RangeInput,
} from 'react-instantsearch-dom';
import './index.css';
import StatsView from '../../components/StatsView';
import MultiSelectMenu from '../../components/MultiSelectMenu';
import HitsView from '../../components/challenge3/HitsView';

const searchClient = algoliasearch(
  'SFQUZ851YD',
  '7f4177e06e638380583f99698fa38b4b'
);

function Challenge3() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Home</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="challenge3">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search for Wine..',
                }}
                searchAsYouType={true}
                showLoadingIndicator={true}
              />
              <div className="results-container">
                <div className="results-talks">
                  <Index indexName="challenge3">
                    <div className="talks-stats">
                      Wine <StatsView />
                    </div>
                    <hr />
                    <div className="filters-and-facets">
                      <div className="filters">
                        Filter by:
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Domain"
                            attribute="domain"
                            limit={1000}
                            operator="and"
                          />
                        </div>
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Year"
                            attribute="year"
                            limit={1000}
                            operator="and"
                          />
                        </div>
                        <div
                          className="filter-topics"
                          style={{ display: 'flex' }}
                        >
                          <span className="filter-rating">Price: </span>
                          <RangeInput attribute="price" />
                        </div>
                        <div className="sort-by">
                          <span style={{ marginRight: 8 }}>Sort by:</span>
                          <SortBy
                            defaultRefinement="challenge3"
                            items={[{ value: 'quality', label: 'Most Rated' }]}
                          />
                        </div>
                      </div>
                    </div>
                    <Configure
                      facets={['domain', 'year', 'quality']}
                      hitsPerPage={6}
                    />
                    <HitsView />
                    {/* </div> */}
                  </Index>
                </div>
              </div>

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default Challenge3;
