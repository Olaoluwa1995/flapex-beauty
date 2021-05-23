import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BoxShadow, COLORS } from "../../styles/theme";
import AboutYouImage from "../../assets/images/welcome-page/about-you.jpg";

const AboutYou = () => {
	return (
		<Flex
			flexDir="row"
			justify="space-between"
			py="5rem"
			px="15%"
			h="40rem"
			bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex justify="space-between" flexDir="column" w="65%">
				<Text>
					At{" "}
					<Box fontWeight="bold" as="span" color={COLORS.PRIMARY_COLOR}>
						Park Row Hair & Beauty…
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
						Call us now on 01484 722220
					</Box>{" "}
					to book an appointment – or if you prefer, we’d love to offer a{" "}
					<Box as="span" fontWeight="bold">
						free
					</Box>{" "}
					15 minute initial consultation, to make you feel 100% confident in
					what we can do.
				</Text>
			</Flex>
			<Flex flexDir="column" w="30%" boxShadow={BoxShadow}>
				<Image src={AboutYouImage} h="100%" w="100%" />
			</Flex>
		</Flex>
	);
};

export default AboutYou;
