import React from "react";
import {
	Flex,
	Text,
	Box,
	Image,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import Aos from "aos";

import PageImage from "../../assets/images/terms-and-conditions-page/page-image.jpg";
import { COLORS } from "../../styles/theme";
import { terms, notices } from "./terms-data";

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);
	return (
		<>
			<Flex
				w="100%"
				justify="space-between"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				pt={{ base: "8rem", md: "10rem", lg: "12rem" }}
				bgColor="white">
				<Flex flexDir="column" w="100%">
					<Text
						color={COLORS.PRIMARY_COLOR}
						fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}>
						Website Terms and Conditions
					</Text>
					<Flex
						flexDir={{ base: "column", lg: "row-reverse" }}
						w="100%"
						minH="25rem"
						mt="0.4rem"
						justify="space-between">
						<Image
							src={PageImage}
							w={{ base: "100%", lg: "50%" }}
							h={{ base: "100%", lg: "25rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
						<Flex
							mt="2rem"
							flexDir="column"
							w={{ base: "100%", lg: "45%" }}
							justify="space-between">
							<Text>
								<Box as="span" fontWeight="bold">
									Flapex Beauty
								</Box>{" "}
								Ltd is registered at 20 Bradford Road, Brighouse, West
								Yorkshire, HD6 1RW and operates from the same address. The term
								‘you’ refers to the user or viewer of our website.
							</Text>
							<Text>
								Welcome to our website. If you continue to browse & use our
								website you are agreeing to comply with & be bound by the
								following terms & conditions of use, which together with our
								privacy policy govern{" "}
								<Box as="span" fontWeight="bold">
									Flapex Beauty’s
								</Box>{" "}
								relationship with you in relation to this website. If you
								disagree with any part of these terms & conditions please do not
								use our website.
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDir="column"
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				px={{ base: "5%", md: "10%", lg: "15%" }}
				w={{ base: "100%", lg: "85%" }}
				bgColor="white">
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
						TERMS OF USE
					</Text>
					<Text>
						The Use Of This Website Is Subject To The Following Terms Of Use:
					</Text>
					<UnorderedList>
						{terms.map((term: any) => (
							<ListItem key={term.key}>{term.text}</ListItem>
						))}
					</UnorderedList>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
						COPYRIGHT NOTICE
					</Text>
					<Text my="1rem">
						This website & its content is copyright of{" "}
						<Box as="span" fontWeight="bold">
							Flapex Beauty Ltd – © Flapex Beauty Ltd
						</Box>
						. All rights reserved.
					</Text>
					<Text>
						Any redistribution or reproduction of part or all of the contents in
						any form is prohibited other than the following:
					</Text>
					<UnorderedList>
						{notices.map((notice: any) => (
							<ListItem key={notice.key}>{notice.text}</ListItem>
						))}
					</UnorderedList>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
						WEBSITE DISCLAIMER
					</Text>
					<Text mt="1rem">
						The information contained in this website is for general information
						purposes only. The information is provided by{" "}
						<Box as="span" fontWeight="bold">
							Flapex Beauty Ltd
						</Box>{" "}
						& while we endeavour to keep the information up to date & correct,
						we make no representations or warranties of any kind, express or
						implied, about the completeness, accuracy, reliability, suitability
						or availability with respect to the website or the information,
						products, services, or related graphics contained on the website for
						any purpose. Any reliance you place on such information is therefore
						strictly at your own risk.
					</Text>
					<Text mt="1rem">
						In no event will we be liable for any loss or damage including
						without limitation, indirect or consequential loss or damage, or any
						loss or damage whatsoever arising from loss of data or profits
						arising out of, or in connection with, the use of this website.
					</Text>
					<Text mt="1rem">
						Through this website you are able to link to other websites which
						are not under the control of{" "}
						<Box as="span" fontWeight="bold">
							Flapex Beauty Ltd.
						</Box>{" "}
						We have no control over the nature, content & availability of those
						sites. The inclusion of any links does not necessarily imply a
						recommendation or endorse the views expressed within them.
					</Text>
					<Text mt="1rem">
						Every effort is made to keep the website up & running smoothly.
						However,{" "}
						<Box as="span" fontWeight="bold">
							Flapex Beauty Ltd
						</Box>{" "}
						takes no responsibility for, & will not be liable for, the website
						being temporarily unavailable due to technical issues beyond our
						control.
					</Text>
					<Text mt="1rem">Details last updated: 01/06/2018</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Content;
