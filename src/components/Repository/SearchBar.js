import React from "react";
import {
  Box,
  Button,
  Input,
  ReactRouterLink,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { SearchIcon } from "@chakra-ui/icons";

function SearchBar({ searchQuery, setSearchQuery, repos }) {
  return (
    <Box>
      <Box
        marginX="auto"
        minW="650px"
        maxW="1200px"
        my=".5em"
        p=".5em"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="gray.300"
        rounded="md"
      >
        <Flex>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="gray.400" />} />
            <Input
              type="text"
              onChange={(event) => setSearchQuery(event.target.value)}
              value={searchQuery}
              w="xs"
              name="searchQuery"
              rounded="3xl"
            />
          </InputGroup>

          <Spacer />
          <Link to="issues/new">
            <Button
              as={ReactRouterLink}
              rounded="lg"
              colorScheme="red"
              variant="solid"
              color="#fff"
            >
              <p>New Issue</p>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default SearchBar;
