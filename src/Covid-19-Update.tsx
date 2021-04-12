import React from "react";
import "./App.css";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { GrFormNext } from "react-icons/gr";

const Covid19Update: React.FC<any> = ({ children }) => {
	return (
		<Flex ml="0.7rem" width="100%" mb="1rem">
			<Icon as={GrFormNext} mr="0.3rem" mt="3px" />
			<Box as="p">{children}</Box>
		</Flex>
	);
};

export default Covid19Update;
