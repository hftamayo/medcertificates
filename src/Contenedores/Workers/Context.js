import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

function MoviesProvider(props) {
  // const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState({});

  return (
    <MoviesContext.Provider
      value={{
        // movies: [movies, setMovies],
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;
