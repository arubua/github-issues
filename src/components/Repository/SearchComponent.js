import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import * as schema from "../../Graphql/Schemas";
import SearchBar from "./SearchBar";
import Repo from "./Repo";
import { Box } from "@chakra-ui/react";

export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, data } = useQuery(schema.SEARCH_REPO, {
    variables: { query: searchQuery },
  });

  return (
    <Box>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Repo data={data} loading={loading} />
    </Box>
  );
}
