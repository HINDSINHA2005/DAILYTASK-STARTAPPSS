import React from "react";
import "./MovieList.css";
const MovieItem = React.memo(({ movie, onSelect }) => {
  console.log("MovieItem rendered:", movie.Title);

  return (
    <li
      onClick={() => onSelect(movie)}
      style={{
        listStyle: "none",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
        cursor: "pointer"
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.Title}
        width="200"
        height="300"
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </li>
  );
});

export default MovieItem;
