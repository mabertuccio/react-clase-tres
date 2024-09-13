// src/components/Anime.jsx

import { useInstantFetch } from "../hooks/useFetchWithCache";
import jikan from "../jikan";
import { NavLink, useParams } from "react-router-dom";
import Loading from "./Loading";

const withoutAutoplay = (url) =>
  url
    .split("&")
    .filter((component) => !component.includes("autoplay"))
    .join("&");

const Anime = () => {
  const { id } = useParams();
  const { data, loading, error } = useInstantFetch(jikan.getAnimeById, id);

  if (loading) return <Loading />;

  if (error) return <div>{error.message || "Something went wrong"}</div>;

  if (data && data.data)
    return (
      <>
        <h1>{data.data.title}</h1>
        <img src={data.data.images.jpg.image_url} alt={data.data.title} />
        <div>Score: {data.data.score}</div>
        <div>Episodes: {data.data.episodes}</div>
        {data.data.source === "Original" ? (
          <div>Original anime</div>
        ) : (
          <div>Based on a {data.data.source.toLowerCase()}</div>
        )}
        <a href={data.data.url} target="_blank" rel="noopener noreferrer">
          Check it out on MAL!
        </a>
        <p>{data.data.synopsis}</p>
        {data.data.trailer_url && (
          <iframe
            title={`Trailer for ${data.data.title}`}
            width="560"
            height="315"
            src={withoutAutoplay(data.data.trailer_url)}
            frameBorder="0"
            allowFullScreen
          />
        )}
        <NavLink to={`/anime/${Number(id) + 1}`}>Next</NavLink>
      </>
    );

  return null;
};

export default Anime;
