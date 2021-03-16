import React, { Component } from "react";
import { Box, HStack, Text, VStack, Center } from "@chakra-ui/react";
import { WarningIcon, ChatIcon } from "@chakra-ui/icons";
import moment from "moment";

const Issue = ({ data, loading }) => {
  return (
    <>
      {data.viewer.issues.edges.map((issue) => (
        <Box
          marginX="auto"
          minW="650px"
          maxW="1000px"
          my="1em"
          p=".2em"
          bg="purple.50"
          rounded="md"
          key={issue.node.id}
        >
          <Box display="flex" flexDir="row" flexWrap="wrap" w="100%">
            <Box
              justifyContent="flex-end"
              d="flex"
              flexDir="row"
              flexBasis="100%"
              flex="1"
            >
              {issue.node.state === "OPEN" ? (
                <WarningIcon m=".2em .5em" fontSize="xl" color="green.500" />
              ) : (
                <WarningIcon m=".2em .5em" fontSize="xl" color="red.500" />
              )}
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
                  <Text fontWeight="bold">{issue.node.title}</Text>
                  {issue.node.state === "OPEN" ? (
                    <Text fontSize="xs" fontWeight="light" color="gray.500">
                      #{issue.node.number} opened{" "}
                      {moment(issue.node.createdAt, "YYYYMMDD").fromNow()} by{" "}
                      {issue.node.author.login}
                    </Text>
                  ) : (
                    <Text fontSize="xs" fontWeight="light" color="gray.500">
                      #{issue.node.number} closed{" "}
                      {moment(issue.node.closedAt, "YYYYMMDD").fromNow()}
                    </Text>
                  )}
                </Box>
              </VStack>
            </Box>
            <Box d="flex" flexDir="column" flexBasis="100%" flex="1">
              <Center>
                <HStack m="1em">
                  <ChatIcon />
                  <Text fontSize="xs">{issue.node.comments.totalCount}</Text>
                </HStack>
              </Center>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Issue;
