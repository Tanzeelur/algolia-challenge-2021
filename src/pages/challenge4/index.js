import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Index,
  Configure,
} from 'react-instantsearch-dom';
import './index.css';
import StatsView from '../../components/StatsView';
import MultiSelectMenu from '../../components/MultiSelectMenu';
import GeoSearch from '../../components/challenge4/MapView';

const searchClient = algoliasearch(
  'SFQUZ851YD',
  '7f4177e06e638380583f99698fa38b4b'
);

function Challenge4() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Home</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="airports">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search for Airports..',
                }}
                searchAsYouType={true}
                showLoadingIndicator={true}
              />
              <div className="results-container">
                <div className="results-talks">
                  <Index indexName="airports">
                    <div className="talks-stats">
                      Airports <StatsView />
                    </div>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div className="filters-and-facets">
                        <div className="filters-hallenge4">
                          Filter by:
                          <div className="filter-country">
                            <MultiSelectMenu
                              title="Country"
                              attribute="country"
                              limit={1000}
                              operator="and"
                            />
                          </div>
                          <div className="filter-city">
                            <MultiSelectMenu
                              title="City"
                              attribute="city"
                              limit={1000}
                              operator="and"
                            />
                          </div>
                        </div>
                      </div>
                      <Configure
                        facets={['city', 'country']}
                        hitsPerPage={10}
                        getRankingInfo={true}
                        aroundLatLng="33.636719, -84.428067"
                        aroundRadius={130000}
                      />
                      <div
                        style={{
                          height: 500,
                          flex: 0.8,
                          alignSelf: 'flex-end',
                        }}
                      >
                        <GeoSearch attribute="location" />
                      </div>
                    </div>
                  </Index>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default Challenge4;
