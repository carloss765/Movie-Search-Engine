import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { searchMovies } from "./api/api";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      const result = await searchMovies(query);
      setMovies(result);
    } catch (err) {
      setError("Error al buscar peliculas");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
      🎥Movie Search Engine🎞️
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}> {error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
