import React from "react";
import { useQuery } from "@apollo/client";
import * as schema from "../Graphql/Schemas";
import { Box } from "@chakra-ui/layout";
import Comment from "../components/Comments/Comment";

const Comments = (props) => {
  console.log(props);
  const { name, owner, number } = props.match.params;

  const { loading, data } = useQuery(schema.GET_COMMENTS, {
    variables: {
      name: name,
      owner: owner,
      number: parseInt(number),
    },
  });

  return (
    <Box>
      <Comment loading={loading} data={data} name={name} owner={owner} />
    </Box>
  );
};

export default Comments;
