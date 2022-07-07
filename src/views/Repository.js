import React from "react";

import { useQuery } from "@apollo/client";
import * as schema from "../Graphql/Schemas";
import Loading from "../components/shared/Loading";
import SearchComponent from "../components/Repository/SearchComponent";

const Repository = () => {
  const { loading, data } = useQuery(schema.GET_ISSUES);
  console.log(data);

  if (loading) {
    return <Loading />;
  }
  return <SearchComponent data={data} />;
};

export default Repository;
