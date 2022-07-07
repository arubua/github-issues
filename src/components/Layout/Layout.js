import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Input } from "@chakra-ui/react";

class Layout extends Component {
  render() {
    return (
      <Box minW="400px">
        <Header />
        {this.props.children}
        <Footer />
      </Box>
    );
  }
}

export default Layout;