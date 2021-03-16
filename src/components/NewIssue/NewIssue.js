import React, { Component } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

export class NewIssue extends Component {
  render() {
    return (
      <div>
        <Box
          mx="auto"
          my="1em"
          p="2em"
          minW="600px"
          maxW="1000px"
          borderColor="cyan.700"
          borderWidth="1px"
        >
          <FormControl id="title">
            <Input type="text" placeholder="Enter your Title" />
          </FormControl>
          <Flex my="1em">
            <FormControl id="priority" w="40%" mx="auto">
              <Select placeholder="Select priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="urgent">Urgent</option>
              </Select>
            </FormControl>
            <FormControl id="priority" w="40%" mx="auto">
              <Select placeholder="Label">
                <option value="bug">Bug</option>
                <option value="enhancement">Enhancement</option>
                <option value="question">Question</option>
                <option value="duplicate">Duplicate</option>
              </Select>
            </FormControl>
          </Flex>
          <FormControl my="1em" display="flex" id="assignee">
            <FormLabel minW="80px">Assign To:</FormLabel>
            <Input type="text" placeholder="Enter assignee" />
          </FormControl>
          <FormControl id="description">
            <Textarea placeholder="Enter assignee" />
          </FormControl>
          <Button colorScheme="red" variant="solid">
            Save to Issues
          </Button>
        </Box>
      </div>
    );
  }
}

export default NewIssue;
