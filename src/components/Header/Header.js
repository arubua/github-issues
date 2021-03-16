import { Button } from "@chakra-ui/button";
import { Box, HStack, UnorderedList } from "@chakra-ui/layout";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    //const {isAuthenticated, login, logout, userHasScopes} = this.props.auth;
    return (
      <Box as="nav" p="1em" bg="gray.400">
        <HStack
          overflow="hidden"
          color="white"
          m="0"
          p="0"
          listStyleType="none"
        >
          <Box mx="1em">
            <Link to="/">Home</Link>
          </Box>
          <Box mx="1em">
            <Link to="/search">Search for repository</Link>
          </Box>
        </HStack>
      </Box>
    );
  }
}

export default Nav;
