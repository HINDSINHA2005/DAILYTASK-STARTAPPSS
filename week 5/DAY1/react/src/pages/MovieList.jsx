import { useEffect, useState, useCallback, useMemo } from "react";
import MovieItem from "./MovieItems";
import "./MovieList.css";


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("avengers");
 const API_KEY="6b395f4";
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [search]);

  const handleSelect = useCallback((movie) => {
    alert(movie.Title);
  }, []);

  const movieCount = useMemo(() => movies.length, [movies]);

  return (
    <div>
      <h2>Total Movies: {movieCount}</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movie..."
      />

      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
