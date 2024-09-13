// src/jikan.js

const BASE_URL = "https://api.jikan.moe/v4";

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
};

const jikan = {
  searchAnime: async (searchTerm) => {
    try {
      const response = await getResource(
        `${BASE_URL}/anime?q=${encodeURIComponent(searchTerm)}`
      );
      return response;
    } catch (error) {
      console.error("Search Anime Error:", error);
      throw error;
    }
  },

  getAnimeById: async (id) => {
    try {
      const response = await getResource(`${BASE_URL}/anime/${id}`);
      return response;
    } catch (error) {
      console.error("Get Anime by ID Error:", error);
      throw error;
    }
  },
};

export default jikan;
