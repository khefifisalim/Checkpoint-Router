import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ MovieData, rate, search }) => {
  const filter = () => {
    if (rate > 0 && search.trim()) {
      return MovieData.filter(
        (movie) =>
          movie.Title.toLowerCase().includes(search.toLowerCase()) &&
          movie.rate == rate
      );
    }
    if (rate > 0) {
      return MovieData.filter((movie) => movie.rate == rate);
    }
    if (search.trim()) {
      return MovieData.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return MovieData;
  };
  return (
    <div className="container">
      {filter().map((movie, i) => {
        return (
          <div key={i}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
