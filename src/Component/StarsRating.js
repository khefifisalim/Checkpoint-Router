import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const StarsRating = ({ rate, setRate }) => {
  const changeRating = (newRate) => {
    setRate(newRate);
  };
  return (
    <div>
      <StarRatings
        rating={rate}
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
      <button onClick={() => setRate(0)}>Reset</button>
    </div>
  );
};

export default StarsRating;
