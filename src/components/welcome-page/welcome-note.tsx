import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BoxShadow, COLORS } from "../../styles/theme";
import WelcomeNoteImage from "../../assets/images/welcome-page/welcome-note.png";

const WelcomeNote = () => {
	return (
		<Flex
			flexDir={{ base: "column", lg: "row-reverse" }}
			justify="space-between"
			pb="3rem"
			px={{ base: "5%", md: "10%", lg: "15%" }}
			minH="35rem"
			bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex
				flexDir="column"
				w={{ base: "100%", lg: "35%", xl: "25%" }}
				boxShadow={BoxShadow}>
				<Image
					src={WelcomeNoteImage}
					h={{ base: "15rem", md: "20rem", lg: "100%" }}
					w="100%"
				/>
			</Flex>
			<Flex
				pt={{ base: "2rem", lg: "none" }}
				justify="space-between"
				flexDir="column"
				fontSize={{ base: "0.9rem", lg: "1rem" }}
				w={{ base: "100%", lg: "60%", xl: "70%" }}>
				<Text>
					Welcome to{" "}
					<Box fontWeight="bold" as="span" color={COLORS.PRIMARY_COLOR}>
						Park Row Hair & Beauty…
					</Box>{" "}
					a contemporary and professional, yet warm and friendly salon in the
					heart of Brighouse.
				</Text>
				<Text>
					Whether you already know the style you’re looking for, or need some
					ideas to find a new cut and colour that’s right for you… we’re here to
					listen and offer advice. We understand our customers are no longer
					happy to stick with just one style or colour.
				</Text>
				<Text>
					You want to experiment with different looks – and with our expertise
					we can help you find a look that suits your personality and your
					lifestyle.
				</Text>
				<Text>
					All our experienced and enthusiastic stylists work hard to keep up
					with all the latest techniques and training – and to stay ahead of all
					the upcoming styles and trends.
				</Text>
				<Text>
					We regularly attend hairdressing shows, events and competitions – and
					always return home excited and bursting with new styling and colouring
					ideas to share with our clients.
				</Text>
			</Flex>
		</Flex>
	);
};

export default WelcomeNote;
