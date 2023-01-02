import { bgcolor } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#5f5f9f" : "#308fe8",
  },
}));
const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const ImageUrl = "https://img.pokemondb.net/artwork/";
  React.useEffect(() => {
    setPokemon({
      id,
      Name: "bulbasaur",
      Type: ["grass", "poison"],
      Total: 318,
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45,
      Ability: [
        {
          Abilities_Name: "Overgrow",
          Abilities_Description: "Ups GRASS moves in a pinch.",
        },
      ],
    });
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <img
              src={`${ImageUrl}${pokemon?.Name}.jpg`}
              style={{
                width: 350,
                height: 350,
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
              }}
            >
              <h2>Pokédex data</h2>
              <div style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)" }}>
                <span style={{ color: "grey" }}>Pokedex No : </span>{" "}
                {pokemon?.id}
              </div>
              <div
                style={{
                  borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <span style={{ color: "grey" }}>Type :</span>{" "}
                <div>
                  {pokemon?.Type.map((item) => (
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        marginLeft: 10,
                        padding: 5,
                        backgroundColor: "lightgreen",
                        borderRadius: 5,
                      }}
                    >
                      {item.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)" }}>
                <span style={{ color: "grey" }}>Pokedex No : </span>{" "}
                {pokemon?.id}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <div style={{
           display:"flex",
           flex:1,
            flexDirection:"row",
            justifyContent:"center",
            justifyItems:"center",
            alignItems:"center"
          }}>
            <div style={{
              width:"5%"
            }}>  HP:</div>
            <div style={{
              width:"95%",
            }}>
                <BorderLinearProgress
                variant="determinate"
                value={(45 * 100) / 230}
              />
              </div>
          
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
