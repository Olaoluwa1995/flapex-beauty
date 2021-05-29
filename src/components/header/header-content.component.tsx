import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Box,
	Icon,
	Image,
	Text,
	Flex,
	Menu,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

import { headerLinksData } from "./header.data";
import NavLinkItem from "../link-item/header-links.component";
import { COLORS } from "../../styles/theme";
import Logo from "../../assets/images/hair-dressing-logo.jpeg";

const HeaderContent = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<>
			<Flex px="10%" py="1rem" bgColor={COLORS.PRIMARY_COLOR} align="center">
				<Icon as={FaPhoneAlt} color="white" />
				<Text
					color="white"
					fontWeight="bold"
					fontStyle="italic"
					px="0.5rem"
					fontSize={{ base: "1rem", md: "1.2rem" }}>
					01484 722220
				</Text>
			</Flex>
			<Flex
				as="nav"
				w="100%"
				align="center"
				justify="space-between"
				px="10%"
				py="1rem">
				<Flex w="20%">
					<Image src={Logo} w="100%" h="4rem" />
				</Flex>
				<Flex w="70%" justify="space-between">
					{headerLinksData.map((headerLink: any) => {
						return (
							<Box key={headerLink.key}>
								<NavLinkItem aria-label={headerLink.title} url={headerLink.url}>
									{headerLink.title}
								</NavLinkItem>
							</Box>
						);
					})}
					<Text
						position="relative"
						as="span"
						onMouseOver={() => setIsOpen(true)}>
						<NavLinkItem aria-label="contact-us" url="/contact-us">
							Contact Us <ChevronDownIcon fontSize="30px" />
						</NavLinkItem>
					</Text>
					<Box
						onMouseLeave={() => setIsOpen(false)}
						zIndex={3}
						position="absolute"
						right="8%"
						mt="2rem">
						<Menu isOpen={isOpen}>
							<MenuList>
								<MenuItem>Download</MenuItem>
								<MenuItem>Create a Copy</MenuItem>
								<MenuItem>Mark as Draft</MenuItem>
								<MenuItem>Delete</MenuItem>
								<MenuItem>Attend a Workshop</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default HeaderContent;
