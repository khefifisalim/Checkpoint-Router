import React, { useState } from "react";
import { movieData } from "./Component/MovieData";
import MovieList from "./Component/MovieList";
import Modal from "./Component/Model";
import StarsRating from "./Component/StarsRating";
import Search from "./Component/Search";
import Trailer from "./Component/Trailer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
function App() {
  const [rate, setRate] = useState(0);
  const [search, setSearch] = useState("");
  const [MovieData, setMovies] = useState(movieData);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <StarsRating rate={rate} setRate={setRate} />
            <Search search={search} setSearch={setSearch} />
            <div className="modal">
              <Modal MovieData={MovieData} setMovies={setMovies} />
            </div>
            <MovieList rate={rate} search={search} MovieData={MovieData} />
          </div>
        </Route>
        <Route exact path="/trailer/:id">
          <Trailer MovieData={MovieData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
