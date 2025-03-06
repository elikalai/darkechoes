import React, { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails () {
    if (!selectedEpisode) {
      return (
        <section>
          <h2>Episode Details</h2>
          <p>Select episode to learn more</p>
        </section>
      );
    }
    return (
      <section>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.details}</p>
      </section>
    );
  }

  function EpisodeL () {
    return (
      <section>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
      </section>
    );
  }

    return (
      <>
      <header>Dark Echoes</header>
      <main>
        <EpisodeL/>
        <EpisodeDetails/>
      </main>
      </>
    );
  }

