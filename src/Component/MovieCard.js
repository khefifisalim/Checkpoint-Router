import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const { Title, imgUrl, Rate, id } = movie;
  return (
    <div style={{ margin: "5px" }}>
      <Card style={{ width: "16rem", height: "22rem" }}>
        <Link to={`/trailer/${id}`}>
          <Card.Img
            style={{ height: "70%", width: "100%" }}
            variant="top"
            src={imgUrl}
          />
        </Link>
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <p>
            <StarRatings
              rating={Rate}
              starDimension="20px"
              numberOfStars={5}
              name="rating"
            />
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
