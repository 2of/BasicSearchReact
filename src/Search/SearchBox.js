import React from "react";
import { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";

const axios = require("axios").default;
const ref_url = "https://dummyjson.com/products/search";

const SearchBox = ({ query_freq }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [numQueries, setNumQueries] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const searchstyle = {};

  var typingTimer;

  function handleSearch(e) {
    clearTimeout(typingTimer);
    setSearchTerm(e.target.value);

    if (!e.target.value) {
      setSearchTerm("");
      setSearchResults([]);
      return;
    }

    typingTimer = setTimeout(() => {
      axios.get(ref_url, { params: { q: e.target.value } }).then((res) => {
        setNumQueries(numQueries + 1);
        setSearchResults(res.data.products);
      });
    }, parseInt(query_freq));
  }



  return (
    <>
      Just a simple search implementation for
      https://dummyjson.com/products/search Queries done every ~ {query_freq} ms
      <div className="SearchContainer" style={searchstyle}>
        <div className="SearchBarRow">
          <form className="searchForm">
            <input
              className="search"
              type="text"
              name="name"
              placeholder="Try searching for 'shirts'"
              onChange={(e) => handleSearch(e)}
            />
            <input type="submit" className="submit" value="See all" />
          </form>
        </div>

        <div className="details">
          {searchTerm ? (
            <div className="SearchResultsInfo card">{`Showing ${searchResults.length} results for ${searchTerm}`}</div>
          ) : (
            ""
          )}
        </div>

        <SearchResults products={searchResults}></SearchResults>
      </div>
    </>
  );
};

export default SearchBox;
