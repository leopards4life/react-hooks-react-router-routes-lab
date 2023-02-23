import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)

  const actorsList = actors.map(actor => {
    <div>
      {actor.name}
      <ul>
        {actor.movies}
      </ul>
    </div>
  })
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
