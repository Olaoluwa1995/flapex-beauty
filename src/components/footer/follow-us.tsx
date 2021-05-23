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
			py="3rem"
			px="15%"
			h="15rem"
			bgColor="white">
			<Flex flexDir="column" w="100%">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.8rem" mb="2rem">
					Follow us on...
				</Text>
				<Flex justify="space-between" w="70%">
					<Flex
						w="17rem"
						h="3rem"
						bgColor="facebook.800"
						align="center"
						color="white"
						borderRadius="5px">
						<Icon as={AiFillFacebook} h="100%" w="20%" left="0" />
						<Text w="80%" textAlign="center" fontSize="0.95rem">
							<Box as="span" fontWeight="bold">
								Facebook 1.4k
							</Box>{" "}
							followers
						</Text>
					</Flex>
					<Flex
						w="15rem"
						h="3rem"
						bgColor="twitter.700"
						align="center"
						color="white"
						borderRadius="5px">
						<Icon as={AiFillTwitterSquare} h="100%" w="20%" left="0" />
						<Text w="80%" textAlign="center" fontSize="0.95rem">
							<Box as="span" fontWeight="bold">
								Twitter 1.4k
							</Box>{" "}
							followers
						</Text>
					</Flex>
					<Flex
						w="17rem"
						h="3rem"
						bgColor="facebook.600"
						align="center"
						color="white"
						borderRadius="5px">
						<Icon as={AiFillInstagram} h="100%" w="20%" left="0" />
						<Text w="80%" textAlign="center" fontSize="0.95rem">
							<Box as="span" fontWeight="bold">
								Instagram 1.4k
							</Box>{" "}
							followers
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default FollowUs;
