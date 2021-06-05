import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import MapImage from "../../assets/images/welcome-page/map.png";
import { COLORS } from "../../styles/theme";

const Location = () => {
	return (
		<Flex
			flexDir="row"
			justify="space-between"
			py={{ base: "1rem", md: "2rem", lg: "3rem" }}
			w="100%"
			px={{ base: "5%", md: "10%", lg: "15%" }}
			h={{ base: "30rem", lg: "45rem" }}
			bgColor="white">
			<Flex flexDir="column">
				<Text
					color={COLORS.PRIMARY_COLOR}
					fontSize="1.8rem"
					mb={{ base: "1rem", lg: "2rem" }}>
					Location
				</Text>
				<Image src={MapImage} h="90%" w="100%" />
			</Flex>
		</Flex>
	);
};

export default Location;
