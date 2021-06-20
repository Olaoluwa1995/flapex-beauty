import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Divider,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Icon,
	Image,
	Text,
	Flex,
	List,
	ListItem,
	Menu,
	MenuList,
	MenuItem,
	useDisclosure,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

import { headerLinksData, completeHeaderLinksData } from "./header.data";
import NavLinkItem from "../link-item/header-links.component";
import { COLORS } from "../../styles/theme";
import Logo from "../../assets/images/hair-dressing-logo.jpeg";

const HeaderContent = () => {
	const [isOpened, setIsOpen] = React.useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Flex
				px={{ base: "5%", xl: "10%" }}
				py={{ base: "0.5rem", lg: "1rem" }}
				bgColor={COLORS.PRIMARY_COLOR}
				align="center">
				<Icon as={FaPhoneAlt} color="white" />
				<Text
					color="white"
					fontWeight="bold"
					fontStyle="italic"
					px="0.5rem"
					fontSize={{ base: "1rem", md: "1.2rem" }}>
					+234 818 005 5097
				</Text>
			</Flex>
			<Flex
				as="nav"
				w="100%"
				align="center"
				justify="space-between"
				px={{ base: "5%", xl: "10%" }}
				py={{ base: "0.5rem", lg: "1rem" }}>
				<Flex w={{ base: "40%", md: "30%", lg: "20%" }}>
					<NavLinkItem
						_hover={{
							bgColor: "none",
						}}		
						url="/">
						<Image src={Logo} w="100%" h={{ base: "3rem", lg: "4rem" }} />
					</NavLinkItem>
				</Flex>
				<Box display={{ base: "flex", lg: "none" }}>
					<HamburgerIcon as="button" w={8} h={8} onClick={onOpen} />
					<Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
						<DrawerOverlay>
							<DrawerContent>
								<DrawerCloseButton
									_focus={{
										borderColor: "none",
										boxShadow: "none",
									}}
								/>
								<DrawerBody px="0" pt="3rem">
									<NavLinkItem
										_hover={{
											bgColor: "none",
										}}		
										url="/">
											<Image
												src={Logo}
												alt="logo"
												h="3rem"
												w="6rem"
												mb="1rem"
												ml="2rem"
											/>
									</NavLinkItem>
									<List>
										<Divider my="0.5rem" />
										{completeHeaderLinksData.map((headerLink: any) => {
											return (
												<ListItem key={headerLink.key}>
													<NavLinkItem
														pl="2rem"
														fontSize="0.8rem"
														textTransform="uppercase"
														color={COLORS.GREY_COLOR}
														aria-label={headerLink.title}
														onClick={onClose}
														url={headerLink.url}>
														{headerLink.title}
													</NavLinkItem>
													<Divider my="0.5rem" />
												</ListItem>
											);
										})}
									</List>
								</DrawerBody>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
				</Box>
				<Flex d={{ base: "none", lg: "flex" }} w="70%" justify="space-between">
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
						<Menu isOpen={isOpened}>
							<MenuList>
								<MenuItem>
									<NavLinkItem aria-label="terms" url="/terms">
										Website Terms <br />& Conditions
									</NavLinkItem>
								</MenuItem>
								<MenuItem>
									<NavLinkItem aria-label="privacy" url="/privacy">
										Our Privacy Policy
									</NavLinkItem>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default HeaderContent;
