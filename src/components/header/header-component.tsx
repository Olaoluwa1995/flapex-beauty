import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Icon, Image, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

import { headerLinksData } from "./header.data";
import NavLinkItem from "../link-item/header-links.component";
import { COLORS } from "../../styles/theme";
import "./header.css";
import Logo from "../../assets/images/hair-dressing-logo.jpeg";

type HeaderProps = {
	animate: boolean;
};

const Header: React.FC<HeaderProps> = ({ animate }) => {
	console.log(animate);
	return (
		<>
			<Box
				zIndex={5}
				as="header"
				className={animate === true ? "header" : ""}
				bgColor="white"
				position="fixed"
				width="100%">
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
									<NavLinkItem
										aria-label={headerLink.title}
										url={headerLink.url}>
										{headerLink.title}
									</NavLinkItem>
								</Box>
							);
						})}
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default Header;
