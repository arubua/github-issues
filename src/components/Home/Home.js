import { Box, Badge, Image, Text, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "@apollo/client";
import * as schema from "../../Graphql/Schemas";
import Loading from "../shared/Loading";
import UserSummary from "./UserSummary";

const Home = () => {
  const { loading, data } = useQuery(schema.GET_USER);

  if (loading) {
    return <Loading />;
  }
  return <UserSummary data={data} width="100%" />;
};

export default Home;
