
const API_URL = `https://rickandmortyapi.com/api/episode`;

export const getEpisode = (EpisodeId) => fetch(`${API_URL}/${EpisodeId}`);

export const getEpisodeName = (episodeUrl) => fetch(episodeUrl);

