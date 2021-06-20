import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BoxShadow, COLORS } from "../../styles/theme";
import AboutYouImage from "../../assets/images/welcome-page/about-you.jpg";

const AboutYou = () => {
	return (
		<Flex
			flexDir={{ base: "column", lg: "row-reverse" }}
			justify="space-between"
			py={{ base: "2rem", md: "3.5rem", lg: "5rem" }}
			px={{ base: "5%", md: "10%", lg: "15%" }}
			minH="40rem"
			bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex
				flexDir="column"
				w={{ base: "100%", lg: "40%", xl: "30%" }}
				boxShadow={BoxShadow}>
				<Image src={AboutYouImage} h={{ base: "25rem", lg: "100%" }} w="100%" />
			</Flex>
			<Flex
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				justify="space-between"
				flexDir="column"
				mt={{ base: "1rem", lg: "none" }}
				w={{ base: "100%", lg: "55%", xl: "65%" }}>
				<Text>
					At{" "}
					<Box fontWeight="bold" as="span" color={COLORS.PRIMARY_COLOR}>
						Flapex Beauty…
					</Box>{" "}
					it’s all about you…
				</Text>
				<Text>
					We understand whilst you may come to a hairdresser’s for a “haircut” –
					that’s not what you walk away with. When you leave our salon we want
					you to feel{" "}
					<Box as="span" fontWeight="bold">
						more
					</Box>{" "}
					than just happy with your new look.
				</Text>
				<Text>
					We want you to feel more positive… more confident… more happy in your
					own skin… a different person to who you were before you walked through
					our door.
				</Text>
				<Text>That’s what a great haircut should do.</Text>
				<Text>
					<Box as="span" fontWeight="bold">
						Call us now on +234 818 005 5097
					</Box>{" "}
					to book an appointment – or if you prefer, we’d love to offer a{" "}
					<Box as="span" fontWeight="bold">
						free
					</Box>{" "}
					15 minute initial consultation, to make you feel 100% confident in
					what we can do.
				</Text>
			</Flex>
		</Flex>
	);
};

export default AboutYou;
