import React from "react";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";
import "../App.css";

const GetCharcters = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const CharactersList = () => {
  const { data, error, loading } = useQuery(GetCharcters);
  console.log(error, loading, data);

  return (
    <div className="container">
      {!loading
        ? data.characters.results.map((ele) => (
            <div key={ele.id}>
              <h1>
                {ele.id} {ele.name}
              </h1>
              <img src={ele.image} alt={ele.name} />
            </div>
          ))
        : "Loading............"}
    </div>
  );
};
