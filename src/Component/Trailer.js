import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Trailer = ({ MovieData }) => {
  const { id } = useParams();
  const movie = MovieData.filter((movie) => movie.id == id)[0];
  console.log("movie=", movie);
  return (
    <div>
      <ReactPlayer controls={true} url={movie.trailer} />
      <p>Description: {movie.Description}</p>
    </div>
  );
};

export default Trailer;
