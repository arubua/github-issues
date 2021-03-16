import React from "react";
import { Box, HStack, Text, VStack, Center, Avatar } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading";
import moment from "moment";

const Comment = ({ loading, data }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Box
        marginX="auto"
        minW="650px"
        maxW="1000px"
        my="1em"
        p=".2em"
        bg="purple.50"
        rounded="md"
      >
        <Box display="flex" flexDir="row" flexWrap="wrap" w="100%">
          <Center bg="fff" d="flex" flexDir="row" flexBasis="100%" flex="1">
            <Avatar
              name={data.repository.issue.author.login}
              src={data.repository.issue.author.avatarUrl}
            />
          </Center>
          <Box
            textAlign="left"
            d="flex"
            flexDir="column"
            flexBasis="100%"
            flex="10"
          >
            <VStack display="inline">
              <Box key="1">
                <Text fontWeight="bold">
                  {data.repository.issue.author.login}
                </Text>

                <Text fontSize="xs" fontWeight="light" color="gray.500">
                  {data.repository.issue.author.login} posted issue {""}
                  {moment(
                    data.repository.issue.createdAt,
                    "YYYYMMDD"
                  ).fromNow()}{" "}
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box
          m="1em"
          fontWeight="bold"
          d="flex"
          flexDir="column"
          flexBasis="100%"
        >
          {data.repository.issue.bodyText}
        </Box>
      </Box>
      {data.repository.issue.comments.edges.map((comment) => (
        <Box
          marginX="auto"
          minW="650px"
          maxW="1000px"
          my="1em"
          p=".2em"
          bg="purple.50"
          rounded="md"
          key={comment.node.id}
        >
          <Box display="flex" flexDir="row" flexWrap="wrap" w="100%">
            <Box bg="fff" d="flex" flexDir="row" flexBasis="100%" flex="1">
              <Avatar
                name={comment.node.author.login}
                src={comment.node.author.avatarUrl}
              />
            </Box>
            <Box
              textAlign="left"
              d="flex"
              flexDir="column"
              flexBasis="100%"
              flex="10"
            >
              <VStack display="inline">
                <Box>
                  <Text fontWeight="bold">{comment.node.bodyText}</Text>

                  <Text fontSize="xs" fontWeight="light" color="gray.500">
                    {comment.node.author.login} commented {""}
                    {moment(comment.node.createdAt, "YYYYMMDD").fromNow()}{" "}
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Comment;
