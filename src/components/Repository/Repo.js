import React from "react";
import { Box, HStack, Text, VStack, Center } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading";

function Repo({ data, loading }) {
  console.log(data);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {data.search.edges.map((repo) => (
        <Link to={repo.node.nameWithOwner} key={repo.node.id}>
          <Box
            marginX="auto"
            minW="650px"
            maxW="1000px"
            my="1em"
            p=".2em"
            _hover={{ bg: "purple.50" }}
            rounded="md"
          >
            <Box p=".3em" display="flex" flexDir="row" flexWrap="wrap" w="100%">
              <Box
                textAlign="left"
                d="flex"
                flexDir="column"
                flexBasis="100%"
                flex={[10, 10]}
              >
                <VStack display="inline">
                  <Box>
                    <Text fontWeight="bold">{repo.node.nameWithOwner}</Text>
                    <Text fontSize="xs" fontWeight="light" color="gray.500">
                      {repo.node.description}
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box d="flex" flexDir="column" flexBasis="100%" flex="1">
                <Center>
                  <HStack m="1em">
                    <StarIcon />
                    <Text fontSize="xs">{repo.node.stargazers.totalCount}</Text>
                  </HStack>
                </Center>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </>
  );
}

export default Repo;
