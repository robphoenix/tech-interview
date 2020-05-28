import React from "react";
import { gql } from "@apollo/client";

const query = gql`
  query($name: String!) {
    organization(login: $name) {
      repositories(first: 20) {
        nodes {
          id
          url
          name
          description
        }
      }
    }
  }
`;

const Repos = () => {
  const name = `utilitywarehouse`;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Repos;
