import React from "react";
import { Button, Flex, Text, ListItem, UnorderedList } from "@chakra-ui/react";

import LinkItem from "../../components/link-item/link-item.component";
import { BoxShadow, COLORS } from "../../styles/theme";
import { safetyMeasuresData } from "./safety-measures-data";

const SafetyMeasure = () => {
	return (
		<Flex
			py={{ base: "2rem", md: "3rem", lg: "5rem" }}
			px={{ base: "5%", md: "10%", lg: "15%" }}
			minH="40rem"
			bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex
				flexDir="column"
				w="100%"
				boxShadow={BoxShadow}
				border="3px solid grey"
				borderRadius="6px"
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				px="5%">
				<Text
					mt="1.5rem"
					fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
					fontWeight="bold"
					textAlign="center"
					color={COLORS.PRIMARY_COLOR}>
					Coronavirus Working Update
				</Text>
				<Text mt="1.5rem" mb="1rem">
					The health and safety of our clients and staff is at the forefront of
					what we do at all times and we ask that you kindly keep this in mind
					when both making and attending your appointment.
				</Text>
				<Text fontWeight="bold" my="1rem">
					Extra Health & Safety Measures We Are Taking
				</Text>
				<UnorderedList>
					{safetyMeasuresData.map((item) => (
						<ListItem key={item.key}>{item.text}</ListItem>
					))}
				</UnorderedList>
				<Text mt="1rem">
					Thank you for supporting us during this time and we look forward to
					seeing you soon 🙂
				</Text>
				<LinkItem
					my="1.5rem"
					color="white"
					_hover={{
						bgColor: "none",
					}}
					mx="auto"
					isAnchor
					url="https://parkrowhairandbeauty.com/appointment-enquiry/">
					<Button
						h={{ base: "2.3rem", md: "2.8rem", lg: "3.5rem" }}
						fontSize={{
							base: "0.8rem",
							sm: "0.9rem",
							md: "1.1rem",
							lg: "1.3rem",
						}}
						fontWeight="normal"
						_hover={{
							bgColor: "none",
						}}
						w={{ base: "12rem", sm: "15rem", lg: "20rem" }}
						bgColor={COLORS.PRIMARY_COLOR}>
						Appointment Enquiry
					</Button>
				</LinkItem>
			</Flex>
		</Flex>
	);
};

export default SafetyMeasure;
