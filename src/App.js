import './App.css';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=667b1b92';

const movie1 = 

  {
    "Title": "Taxi Driver",
    "Year": "1976",
    "imdbID": "tt0075314",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}




const App = () => {
  const [movies, setMovies] = useState([]);
  const [terms, setTerms] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('psycho');
  }, []);

  return (
    <div className="App">
      <h1>Movie Movie</h1>

      <div className='search'>
        <input placeholder="search here"
        value={terms} onChange={(e) =>setTerms(e.target.value)}></input>

      
        <button className="button" onClick={() => searchMovies(terms)}>
                            Search
                </button>
      </div>
        
      

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
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
