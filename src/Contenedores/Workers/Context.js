import React, { createContext, useState } from 'react';

export const WorkersContext = createContext();

function WorkersProvider(props) {
  // const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState({});

  return (
    <WorkersContext.Provider
      value={{
        // movies: [movies, setMovies],
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </WorkersContext.Provider>
  );
}

export default WorkersProvider;
