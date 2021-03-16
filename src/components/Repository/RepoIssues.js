import React from "react";
import { useQuery } from "@apollo/client";
import * as schema from "../../Graphql/Schemas";
import { Box } from "@chakra-ui/layout";
import RepoIssue from "./RepoIssue";

const RepoIssues = (props) => {
  const { name, owner } = props.match.params;

  const { loading, data } = useQuery(schema.GET_REPO_ISSUES, {
    variables: {
      name: name,
      owner: owner,
    },
  });

  return (
    <Box>
      <RepoIssue loading={loading} data={data} name={name} owner={owner} />
    </Box>
  );
};

export default RepoIssues;
