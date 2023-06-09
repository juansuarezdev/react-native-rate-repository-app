import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = () => {
  
  const [repositories, setRepositories] = React.useState(null);

  const fetchRepositories = async () => {
    const response = await globalThis.fetch(
      "http://localhost:5000/api/repositories"
    );
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories: repositoriesNodes };
};
export default useRepositories;
