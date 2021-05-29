import React from "react";
import { Button, Flex, Text, Box, Image } from "@chakra-ui/react";
import Aos from "aos";

import OnlineBookingsImage from "../../assets/images/welcome-page/welcome-note.png";
import AppointmentImage from "../../assets/images/online-bookings-page/appointment.jpg";
import BgImage from "../../assets/images/welcome-page/testimonials-background.jpg";
import LinkItem from "../../components/link-item/link-item.component";
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
				px="15%"
				pt="12rem"
				bgColor="white">
				<Flex flexDir="column" w="100%">
					<Text color={COLORS.PRIMARY_COLOR} fontSize="2rem">
						Contact Us
					</Text>
					<Flex w="100%" h="25rem" mt="2rem" justify="space-between">
						<Image
							src={AppointmentImage}
							w="50%"
							h="100%"
							boxShadow="0 8px 8px 0 gray"
						/>
						<Flex
							h="60%"
							mt="1%"
							flexDir="column"
							w="45%"
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
			<Flex pt="3rem" px="15%" h="45rem" bgColor="white">
				<Image src={MapImage} h="90%" w="100%" />
			</Flex>
		</>
	);
};

export default Content;
