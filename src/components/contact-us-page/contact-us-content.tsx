import React from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Aos from "aos";

import AppointmentImage from "../../assets/images/online-bookings-page/appointment.jpg";
import { COLORS } from "../../styles/theme";
import MapImage from "../../assets/images/welcome-page/map.png";

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
						Contact Us
					</Text>
					<Flex
						w="100%"
						flexDir={{ base: "column", lg: "row" }}
						minH="25rem"
						mt={{ base: "1rem", lg: "2rem" }}
						justify="space-between">
						<Image
							src={AppointmentImage}
							w={{ base: "100%", lg: "50%" }}
							h={{ base: "25rem", lg: "100%" }}
							boxShadow="0 8px 8px 0 gray"
						/>
						<Flex
							h="60%"
							mt="2rem"
							flexDir="column"
							w={{ base: "100%", lg: "45%" }}
							justify="space-between">
							<Flex flexDir="column">
								<Text>20 Bradford Road,</Text>
								<Text>Brighouse,</Text>
								<Text>West Yorkshire.</Text>
								<Text>HD6 1RW</Text>
							</Flex>
							<Text>
								Tel:{" "}
								<Box as="span" color={COLORS.PRIMARY_COLOR}>
									01484 722220
								</Box>
							</Text>
							<Text>
								Email:{" "}
								<Box as="span" color={COLORS.PRIMARY_COLOR}>
									park-row@hotmail.com
								</Box>
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				pt="3rem"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				h={{ base: "20rem", md: "30rem", lg: "45rem" }}
				bgColor="white">
				<Image src={MapImage} h="90%" w="100%" />
			</Flex>
		</>
	);
};

export default Content;
