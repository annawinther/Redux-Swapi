import React from "react";

import Character from "./Character";
const characters = [1, 2, 3];

const CharacterList = props => {
  return (
    <ul>
      {characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
