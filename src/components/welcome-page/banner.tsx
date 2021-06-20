import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { COLORS } from "../../styles/theme";
import TopBackgroundImage from "../../assets/images/welcome-page/top-background.jpg";

const Banner = () => {
	return (
		<Flex
			h={{ base: "30rem", md: "40rem", lg: "50rem" }}
			w="100%"
			pos="relative"
			overflow="hidden">
			<Image
				className="background-image"
				src={TopBackgroundImage}
				h="100%"
				w="100%"
			/>
			<Box
				pos="absolute"
				zIndex={3}
				backgroundColor="rgba(0,0,0,0.3)"
				w="100%"
				h="100%">
				<Flex
					w="100%"
					h="100%"
					flexDir="column"
					align="center"
					justify="center">
					<Text
						letterSpacing="widest"
						fontSize={{ base: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }}
						fontWeight="bold"
						color="white">
						FLAPEX BEAUTY
					</Text>
					<Text
						letterSpacing="widest"
						fontSize={{
							base: "1.5rem",
							sm: "1.8rem",
							md: "2rem",
							lg: "2.2rem",
						}}
						fontWeight="bold"
						color={COLORS.PRIMARY_COLOR}>
						HAIR & BEAUTY
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Banner;
