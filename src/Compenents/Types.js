import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Colors = {
  BUG: "#ab2",
  DARK: "#754",
  DRAGON: "#76e",
  ELECTRIC: "#fc3",
  FAIRY: "#e9e",
  FIGHTING: "#b54",
  FIRE: "#f42",
  FLYING: "#89f",
  GHOST: "#66b",
  GRASS: "#7c5",
  GROUND: "#db5",
  ICE: "#6cf",
  NORMAL: "#aa9",
  POISON: "#a59",
  PSYCHIC: "#f59",
  ROCK: "#ba6",
  STEEL: "#aab",
  WATER: "#39f",
};
const Types = () => {
  const [types, setTypes] = useState([
    "BUG",
    "DARK",
    "DRAGON",
    "ELECTRIC",
    "FAIRY",
    "FIGHTING",
    "FIRE",
    "FLYING",
    "GHOST",
    "GRASS",
    "GROUND",
    "ICE",
    "NORMAL",
    "POISON",
    "PSYCHIC",
    "ROCK",
    "STEEL",
    "WATER",
  ]);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {types.map((item, i) => (
        <Link
          key={i}
          style={{
            textAlign: "center",
            width: 90,
            backgroundColor: Colors[item],
            color: "white",
            marginLeft: 10,
            padding: 10,
            borderRadius: 15,
          }}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Types;
