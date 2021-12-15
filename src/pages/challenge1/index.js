import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Index,
  Pagination,
  SortBy,
  RangeInput,
} from 'react-instantsearch-dom';
import './index.css';
import SpeakerView from '../../components/challenge1/SpeakerView';
import HitsView from '../../components/challenge1/HitsView';
import StatsView from '../../components/StatsView';
import MultiSelectMenu from '../../components/MultiSelectMenu';

const searchClient = algoliasearch(
  'SFQUZ851YD',
  '7f4177e06e638380583f99698fa38b4b'
);

function Challenge1() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Home</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="talks">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search for Talks, Speakers..',
                }}
                searchAsYouType={true}
                showLoadingIndicator={true}
              />
              <div className="results-container">
                <div className="results-talks">
                  <Index indexName="talks">
                    <div className="talks-stats">
                      Talks <StatsView />
                    </div>
                    <hr />
                    <div className="filters-and-facets">
                      <div className="filters">
                        Filter by:
                        <div className="filter-topics">
                          <MultiSelectMenu
                            title="Topics"
                            attribute="tags"
                            limit={1000}
                            operator="and"
                          />
                        </div>
                        <span className="filter-rating">
                          Inspiring Rating:{' '}
                        </span>
                        <RangeInput attribute="inspiring_rating" />
                        <div className="sort-by">
                          <span style={{ marginRight: 8 }}>Sort by:</span>
                          <SortBy
                            defaultRefinement="talks"
                            items={[
                              { value: 'viewed_count', label: 'Most Viewed' },
                            ]}
                          />
                        </div>
                      </div>
                      <Configure
                        facets={['tags', 'inspiring_rating']}
                        hitsPerPage={6}
                      />
                      <HitsView />
                    </div>
                  </Index>
                </div>
                <div className="results-speaker">
                  <div style={{ height: '66%' }}>
                    Speakers
                    <hr />
                    <Index indexName="speakers">
                      <Configure facets={['*']} hitsPerPage={4} />
                      <SpeakerView />
                    </Index>
                  </div>
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

export default Challenge1;
