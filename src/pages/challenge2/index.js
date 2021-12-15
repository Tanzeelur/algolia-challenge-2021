import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Index,
  Pagination,
  Configure,
  SortBy,
} from 'react-instantsearch-dom';
import './index.css';
import StatsView from '../../components/StatsView';
import MultiSelectMenu from '../../components/MultiSelectMenu';
import HitsView from '../../components/challenge2/HitsView';

const searchClient = algoliasearch(
  'latency',
  '56f24e4276091e774e8157fe4b8b11f6'
);

function Challenge2() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Home</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="movies">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search for Movies..',
                }}
                searchAsYouType={true}
                showLoadingIndicator={true}
              />
              <div className="results-container">
                <div className="results-talks">
                  <Index indexName="movies">
                    <div className="talks-stats">
                      Movies <StatsView />
                    </div>
                    <hr />
                    <div className="filters-and-facets">
                      <div className="filters">
                        Filter by:
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Actors"
                            attribute="actors"
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
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Genre"
                            attribute="genre"
                            limit={1000}
                            operator="and"
                          />
                        </div>
                        <div className="sort-by">
                          <span style={{ marginRight: 8 }}>Sort by:</span>
                          <SortBy
                            defaultRefinement="movies"
                            items={[{ value: 'rating', label: 'Most Rated' }]}
                          />
                        </div>
                      </div>
                    </div>
                    <Configure
                      facets={['actors', 'year', 'genre']}
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

export default Challenge2;
