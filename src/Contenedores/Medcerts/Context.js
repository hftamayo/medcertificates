import React, { createContext, useState } from 'react';

export const MedcertsContext = createContext();

function MedcertsProvider(props) {
  // const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState({});

  return (
    <MedcertsContext.Provider
      value={{
        // movies: [movies, setMovies],
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </MedcertsContext.Provider>
  );
}

export default MedcertsProvider;
