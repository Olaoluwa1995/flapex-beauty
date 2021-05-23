import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import MapImage from "../../assets/images/welcome-page/map.png";
import { COLORS } from "../../styles/theme";

const Location = () => {
	return (
		<Flex
			flexDir="row"
			justify="space-between"
			py="3rem"
			px="15%"
			h="45rem"
			bgColor="white">
			<Flex flexDir="column">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.8rem" mb="2rem">
					Location
				</Text>
				<Image src={MapImage} h="90%" w="100%" />
			</Flex>
		</Flex>
	);
};

export default Location;
