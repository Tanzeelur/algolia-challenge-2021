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
import HitsView from '../../components/challenge5/HitsView';
import DateFilter from '../../components/challenge5/DateFilter';

const searchClient = algoliasearch(
  'latency',
  '059c79ddd276568e990286944276464a'
);

function Challenge5() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Home</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch
          searchClient={searchClient}
          indexName="concert_events_instantsearchjs"
        >
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search for Concert..',
                }}
                searchAsYouType={true}
                showLoadingIndicator={true}
              />
              <div className="results-container">
                <div className="results-talks">
                  <Index indexName="concert_events_instantsearchjs">
                    <div className="talks-stats">
                      Concerts <StatsView />
                    </div>
                    <hr />
                    <div className="filters-and-facets">
                      <div className="filters">
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Location"
                            attribute="location"
                            limit={1000}
                            operator="and"
                          />
                        </div>
                        <div
                          className="filter-topics"
                          style={{ display: 'flex', width: 'auto' }}
                        >
                          <span className="filter-date">Date: </span>
                          <DateFilter attribute="date" />
                        </div>
                        <div className="sort-by">
                          <span style={{ marginRight: 8 }}>Sort by:</span>
                          <SortBy
                            defaultRefinement="concert_events_instantsearchjs"
                            items={[
                              { value: 'location', label: 'Most Recent' },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <Configure facets={['location']} hitsPerPage={9} />
                    <HitsView />
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

export default Challenge5;
