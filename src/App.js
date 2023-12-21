import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=667b1b92';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [terms, setTerms] = useState("");

  const searchMovies = async (title) => {
    try {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log("API Response:", data);

    setMovies(data.Search);
  } catch (error) {
    console.error("API Error:", error);
  }
  };

  useEffect(() => {
    searchMovies('psycho');
  }, []);

  return (
    <div className="App">
      <h1>Movie Movie</h1>

      <div className='search'>
        <input
          placeholder="search here"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
        <button className="button" onClick={() => searchMovies(terms)}>
          Search
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
