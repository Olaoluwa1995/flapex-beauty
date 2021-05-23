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
			{/* <Flex px="15%" pt="12rem" flexDir="column" w="100%" bgColor="white"> */}
			<Flex
				w="100%"
				justify="space-between"
				px="15%"
				pt="12rem"
				bgColor="white">
				<Flex flexDir="column" w="68%">
					<Text color={COLORS.PRIMARY_COLOR} fontSize="2rem">
						Online Appointment Bookings
					</Text>
					<Flex w="100%" h="15rem" mt="2rem" justify="space-between">
						<Flex flexDir="column" w="50%" justify="space-between">
							<Text>
								If you’d like to make a hairdressing appointment then please
								complete the{" "}
								<Box as="span" fontWeight="bold">
									Online Booking Form
								</Box>{" "}
								below.
							</Text>
							<Text>
								If it is your first time making an appointment online then you
								will be asked to{" "}
								<Box as="span" fontWeight="bold">
									‘Sign Up‘
								</Box>{" "}
								which only involves adding your name, email and phone number.
							</Text>
						</Flex>
						<Image
							src={AppointmentImage}
							w="45%"
							h="100%"
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Text mt="2rem">
						When you first create an online account we will send a one-time
						passcode to your phone to confirm your details and then you’re all
						set up!
					</Text>
					<Text mt="2rem">
						You can then select the hair service you’d like by clicking on the{" "}
						<Box as="span" fontWeight="bold">
							‘Add Service‘
						</Box>{" "}
						button and then go on to select your preferred stylist and book an
						available time.
					</Text>
					<Text mt="2rem">
						If you have any problems whatsoever with the online booking form
						then please do{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							get in touch.
						</Box>
					</Text>
					<Text mt="2rem">
						If you’re flexible and would like an appointment sooner than is
						currently available (if possible) then we also offer a{" "}
						<Box as="span" fontWeight="bold">
							WAIT LIST
						</Box>
						. If you add your details{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							HERE
						</Box>{" "}
						we will text or email you if we have a cancellation.
					</Text>
					<Text mt="2rem" pb="4rem">
						Many thanks for booking your next hair appointment with us here at{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Flapex Beauty Salon
						</Box>{" "}
						in Brighouse and we look forward to seeing you again soon.
					</Text>
				</Flex>
				<Flex w="25%" h="25rem">
					<Image
						src={OnlineBookingsImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
			</Flex>
			<Flex
				bgRepeat="no-repeat"
				position="fixed"
				bgPos="top"
				zIndex={-4}
				bgSize="cover"
				bgImage={`url(${BgImage})`}
				minH="50rem"
				w="100%"
			/>
			<Flex
				flexDir="column"
				w="100%"
				px="15%"
				minH="25rem"
				justify="center"
				bgColor="transparent">
				<Flex data-aos="zoom-in" flexDir="column" h="15rem" bgColor="rgba(125,5,63,0.8)" w="100%" py="5%" align="center">
					<Text fontSize="2rem" color="white">Book Your Next Hair Appointment Now!</Text>
					<LinkItem
					my="1.5rem"
					color="white"
					_hover={{
						bgColor: "none",
					}}
					mx="auto"
					isAnchor
					url="https://book.thesalon.app/salon/fa75b62e-1382-43e3-adf0-3853f2bf7038">
					<Button
						h="3.5rem"
						fontSize="1.3rem"
						border="1px solid white"
						fontWeight="normal"
						_hover={{
							bgColor: "none",
						}}
						w="20rem"
						bgColor="#5e5e5e">
						Appointment Enquiry
					</Button>
				</LinkItem>
				</Flex>
			</Flex>
			<Flex
			pt="3rem"
			px="15%"
			h="45rem"
			bgColor="white">
				<Image src={MapImage} h="90%" w="100%" />
		</Flex>
		</>
		// </Flex>
	);
};

export default Content;
