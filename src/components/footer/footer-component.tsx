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
			<Flex
				flexDir="column"
				pt={{ base: "1rem", md: "2rem", lg: "3rem" }}
				bgColor="#515151"
				w="100%"
				minH="33rem">
				<Flex
					h="100%"
					w="100%"
					flexDir={{ base: "column", lg: "row" }}
					px={{ base: "5%", lg: "15%" }}
					justify="space-between"
					pb={{ base: "1rem", lg: "2rem" }}
					fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem", xl: "1rem" }}>
					<Flex
						justify={{ base: "space-between", lg: "space-around" }}
						w={{ base: "100%", lg: "50%" }}>
						<Flex flexDir="column" w={{ base: "100%", lg: "45%" }}>
							<Text
								pb={{ base: "1rem", lg: "1.5rem" }}
								fontSize={{
									base: "1.1rem",
									sm: "1.3rem",
									lg: "1.5rem",
								}}
								color="white">
								Website Pages
							</Text>
							<UnorderedList>
								{websitePagesData.map((item) => (
									<ListItem key={item.key} color="whiteAlpha.600" pb="0.6rem">
										<LinkItem color="white" isAnchor url={item.url}>
											{item.title}
										</LinkItem>
									</ListItem>
								))}
							</UnorderedList>
						</Flex>
						<Flex flexDir="column" w={{ base: "100%", lg: "45%" }}>
							<Text
								pb={{ base: "1rem", lg: "1.5rem" }}
								fontSize={{
									base: "1.1rem",
									sm: "1.3rem",
									lg: "1.5rem",
								}}
								color="white">
								Opening Times
							</Text>
							<List>
								{timeData.map((item) => (
									<ListItem
										key={item.key}
										color="white"
										pb={{ base: "1rem", md: "1.3rem", lg: "1.5rem" }}>
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
					</Flex>
					<Flex
						mt={{ base: "1rem", lg: "0" }}
						justify={{ base: "space-between", lg: "space-around" }}
						w={{ base: "100%", lg: "50%" }}>
						<Flex flexDir="column" w={{ base: "100%", lg: "45%" }}>
							<Text
								pb={{ base: "1rem", lg: "1.5rem" }}
								fontSize={{
									base: "1.1rem",
									sm: "1.3rem",
									lg: "1.5rem",
								}}
								color="white">
								Online Store
							</Text>
							<Image
								w={{ base: "80%", lg: "100%" }}
								src={OnlineStoreImage}
								h={{ base: "10rem", lg: "15rem" }}
							/>
							<Text
								w={{ base: "80%", lg: "100%" }}
								textAlign={{ base: "justify", lg: "center" }}
								color="white"
								pt={{ base: "0.5rem", lg: "1rem" }}>
								We are delighted to offer a range of high quality{" "}
								<Box fontWeight="bold">Keune Hair and Beauty Products</Box> to
								purchase online.
							</Text>
						</Flex>
						<Flex flexDir="column" w={{ base: "100%", lg: "45%" }}>
							<Text
								pb={{ base: "1rem", lg: "1.5rem" }}
								fontSize={{
									base: "1.1rem",
									sm: "1.3rem",
									lg: "1.5rem",
								}}
								color="white">
								Contact Us
							</Text>
							<List>
								{contactData.map((item) => (
									<ListItem
										key={item.key}
										color="white"
										pb={{ base: "1rem", md: "1.3rem", lg: "1.5rem" }}>
										<Text color="white">{item.text}</Text>
									</ListItem>
								))}
							</List>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					h="5rem"
					w="100%"
					px={{ base: "5%", md: "10%", lg: "15%" }}
					align="center"
					fontSize={{
						base: "0.6rem",
						sm: "0.65rem",
						md: "0.7rem",
						lg: "0.75rem",
						xl: "0.85rem",
					}}
					py={{ base: "0.8rem", lg: "1rem" }}
					bgColor="black"
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
					<Flex
						justify="space-around"
						w="15%"
						fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.7rem" }}>
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
