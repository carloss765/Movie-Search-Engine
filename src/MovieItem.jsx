import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          alt={movie.Title}
          //style={{ maxWidth: '200px' }}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
        <p className="text-gray-400 text-sm mb-4">Year: {movie.Year}</p>
        <p className="text-yellow-400 font-semibold">Type: {movie.Type}</p>
        <p>IMDb ID: {movie.imdbID}</p>
      </div>
    </div>
  );
};

export default MovieItem;
