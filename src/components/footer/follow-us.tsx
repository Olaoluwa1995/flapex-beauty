import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
} from "react-icons/ai";

import { COLORS } from "../../styles/theme";

const FollowUs = () => {
	return (
		<Flex
			flexDir="row"
			justify="space-between"
			py={{ base: "1rem", md: "2rem", lg: "3rem" }}
			px={{ base: "5%", md: "10%", lg: "15%" }}
			fontSize={{ base: "0.6rem", md: "0.8rem" }}
			minH="10rem"
			bgColor="white">
			<Flex flexDir="column" w="100%">
				<Text
					color={COLORS.PRIMARY_COLOR}
					fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
					mb={{ base: "1rem", lg: "2rem" }}>
					Follow us on...
				</Text>
				<Flex
					w={{ base: "7rem", sm: "10rem", md: "12.3rem" }}
					h={{ base: "2.5rem", md: "3rem" }}
					bgColor="facebook.800"
					align="center"
					color="white"
					borderRadius="5px">
					<Icon as={AiFillFacebook} h="100%" w="20%" left="0" />
					<Text w="80%" textAlign="center">
						<Box as="span" fontWeight="bold">
							Facebook 1.4k
						</Box>{" "}
						followers
					</Text>
				</Flex>
				<Flex
					w={{ base: "6rem", sm: "8rem", md: "10.3rem" }}
					h={{ base: "2.5rem", md: "3rem" }}
					bgColor="twitter.700"
					ml="0.5rem"
					align="center"
					color="white"
					borderRadius="5px">
					<Icon as={AiFillTwitterSquare} h="100%" w="20%" left="0" />
					<Text w="80%" textAlign="center">
						<Box as="span" fontWeight="bold">
							Twitter 1.4k
						</Box>{" "}
						followers
					</Text>
				</Flex>
				<Flex
					w={{ base: "7rem", sm: "10rem", md: "12.3rem" }}
					h={{ base: "2.5rem", md: "3rem" }}
					bgColor="facebook.600"
					ml="0.5rem"
					align="center"
					color="white"
					borderRadius="5px">
					<Icon as={AiFillInstagram} h="100%" w="20%" left="0" />
					<Text w="80%" textAlign="center">
						<Box as="span" fontWeight="bold">
							Instagram 1.4k
						</Box>{" "}
						followers
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default FollowUs;
