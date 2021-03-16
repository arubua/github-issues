import React from "react";
import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Issue from "../Repository/Issue";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const UserSummary = (props) => {
  const user = props.data.viewer;
  return (
    <Box maxW="900px" mx="auto" overflow="hidden">
      <Box display="flex" flexDir="row" flexWrap="wrap" w="100%">
        <Center display="flex" flexDir="column" flexBasis="100%" flex="1">
          <Image
            src={user.avatarUrl}
            width="150px"
            height="150px"
            alt="Avatar"
            p=".2em"
            m=".5em"
            backgroundColor="teal.400"
          />
          <Box p="3">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {user.name}
            </Box>
            <Box>{user.bio}</Box>
          </Box>
        </Center>
        <Center display="flex" flexDir="column" flexBasis="100%" flex="1">
          <HStack>
            <VStack>
              <Box fontSize="9xl">{user.openIssues.totalCount}</Box>
              <Box p="1em" fontSize="2xl">
                open
              </Box>
            </VStack>
            <VStack>
              <Box fontSize="9xl">{user.closedIssues.totalCount}</Box>
              <Box p="1em" fontSize="2xl">
                closed
              </Box>
            </VStack>
            <VStack>
              <Box fontSize="9xl">{user.issues.totalCount}</Box>
              <Box p="1em" fontSize="2xl">
                total
              </Box>
            </VStack>
          </HStack>
        </Center>
      </Box>
      <Box>
        <Issue data={props.data} {...props} />
      </Box>
    </Box>
  );
};

export default UserSummary;
