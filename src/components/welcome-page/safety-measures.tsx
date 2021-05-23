import React from "react";
import { Button, Flex, Text, ListItem, UnorderedList } from "@chakra-ui/react";

import LinkItem from "../../components/link-item/link-item.component";
import { BoxShadow, COLORS } from "../../styles/theme";
import { safetyMeasuresData } from "./safety-measures-data";

const SafetyMeasure = () => {
	return (
		<Flex py="5rem" px="15%" minH="40rem" bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex
				flexDir="column"
				w="100%"
				boxShadow={BoxShadow}
				border="3px solid grey"
				borderRadius="6px"
				px="5%">
				<Text
					mt="1.5rem"
					fontSize="1.8rem"
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
						h="3.5rem"
						fontSize="1.3rem"
						fontWeight="normal"
						_hover={{
							bgColor: "none",
						}}
						w="20rem"
						bgColor={COLORS.PRIMARY_COLOR}>
						Appointment Enquiry
					</Button>
				</LinkItem>
			</Flex>
		</Flex>
	);
};

export default SafetyMeasure;
