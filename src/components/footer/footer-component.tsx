import React from "react";
import {
	Box,
	Flex,
	Icon,
	Image,
	Text,
	UnorderedList,
	List,
	ListItem,
} from "@chakra-ui/react";

import LinkItem from "../link-item/link-item.component";
import { websitePagesData, timeData, contactData } from "./footer-data";
import OnlineStoreImage from "../../assets/images/welcome-page/online-store.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FollowUs from "./follow-us";

const Footer = () => {
	return (
		<>
			<FollowUs />
			<Flex flexDir="column" pt="3rem" bgColor="#515151" w="100%" minH="33rem">
				<Flex
					w="100%"
					px="15%"
					justify="space-between"
					pb="2rem"
					fontSize="1.1rem">
					<Flex flexDir="column" w="20%">
						<Text pb="1.5rem" fontSize="1.5rem" color="white">
							Website Pages
						</Text>
						<UnorderedList>
							{websitePagesData.map((item) => (
								<ListItem key={item.key} color="whiteAlpha.600" pb="0.6rem">
									<LinkItem
										color="white"
										fontSize="1.1rem"
										isAnchor
										url={item.url}>
										{item.title}
									</LinkItem>
								</ListItem>
							))}
						</UnorderedList>
					</Flex>
					<Flex flexDir="column" w="20%">
						<Text pb="1.5rem" fontSize="1.5rem" color="white">
							Opening Times
						</Text>
						<List>
							{timeData.map((item) => (
								<ListItem key={item.key} color="white" pb="1.5rem">
									<Text color="white">
										<Box as="span" fontWeight="bold">
											{item.day}
										</Box>{" "}
										- {item.time}
									</Text>
								</ListItem>
							))}
						</List>
					</Flex>
					<Flex flexDir="column" w="20%">
						<Text pb="1.5rem" fontSize="1.5rem" color="white">
							Online Store
						</Text>
						<Image w="100%" src={OnlineStoreImage} h="15rem" />
						<Text textAlign="center" color="white" fontSize="1rem" pt="1rem">
							We are delighted to offer a range of high quality{" "}
							<Box fontWeight="bold">Keune Hair and Beauty Products</Box> to
							purchase online.
						</Text>
					</Flex>
					<Flex flexDir="column" w="20%">
						<Text pb="1.5rem" fontSize="1.5rem" color="white">
							Contact Us
						</Text>
						<List>
							{contactData.map((item) => (
								<ListItem key={item.key} color="white" pb="1.5rem">
									<Text color="white">{item.text}</Text>
								</ListItem>
							))}
						</List>
					</Flex>
				</Flex>
				<Flex
					w="100%"
					px="15%"
					align="center"
					py="1rem"
					bgColor="rgba(0,0,0,.32)"
					color="whiteAlpha.400">
					<Flex w="80%">
						<Text>
							Copyright © 2011-21{" "}
							<Box as="span" fontWeight="bold">
								Park Row Hair & Beauty
							</Box>{" "}
							| Company No. 07795305 | Website by{" "}
							<Box as="span" fontWeight="bold">
								Customology
							</Box>
						</Text>
					</Flex>
					<Flex justify="space-around" w="15%" fontSize="1.7rem">
						<Icon as={FaFacebookF} />
						<Icon as={FaTwitter} />
						<Icon as={FaInstagram} />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Footer;
