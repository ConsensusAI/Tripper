import React, { useState } from 'react'
import axios from 'axios'
import "./SearchBar"
import { ResultList } from '../ResultList/ResultList';

export const SearchBar = () => {

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");

  const resultsSet = (data) => {
    const infoAll = [];
    data.forEach(item => {
      const infoItem = {
        name: item.name,
        rating: item.rating,
        latitude: item.coordinates.latitude,
        longitude: item.coordinates.longitude,
        review: item.review_count,
      }
      infoAll.push(infoItem);
    });
    console.log("infoAll", infoAll);
    setResults(prevState => infoAll)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios.get(`http://localhost:8080/api/events/${keyword}/${location}`)
    //   .then(res => {
    //     resultsSet(res.data)
    //     console.log("results:", results);
    //   })
    //   .catch(err => console.log(err));
    try {
      const resp = await axios.get(`http://localhost:8080/api/events/${keyword}/${location}`);
      resultsSet(resp.data)
      console.log("results:", results);
    } catch (error) {
      console.log(error);
    }

  }

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const handleChangeLocation = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div className='searchbar'>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type here ..." id="keyword" value={keyword} onChange={(e) => handleChangeKeyword(e)}></input>
        <input type="text" placeholder="type here ..." id="location" value={location} onChange={(e) => handleChangeLocation(e)}></input>
        <button>Search</button>
        <h3>Results:</h3>
        {/* <p>Name: {result.name} </p>
        <p>Rating: {result.rating}</p>
        <p>Lat: {result.latitude}</p>
        <p>Long: {result.longitude}</p> */}

        {/* Loop through results. Should I save in a state to render? */}
        <ResultList results={results}/>

      </form>
    </div>
  )
}
