const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovies = async (query) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodedQuery}&type=movie`;
    
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    
    const data = await response.json();
    
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};