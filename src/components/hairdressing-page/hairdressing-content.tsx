import React from "react";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Aos from "aos";
import { BsChatQuote } from "react-icons/bs";

import { COLORS } from "../../styles/theme";
import HairdressingImage from "../../assets/images/hairdressing-page/hairdressing.jpg";
import StylingImage from "../../assets/images/hairdressing-page/styling.jpg";
import TreatmentImage from "../../assets/images/hairdressing-page/treatment.jpg";
import HairCuttingImage from "../../assets/images/hairdressing-page/haircutting.jpg";
import LittleAngelsImage from "../../assets/images/hairdressing-page/little-angels.jpg";
import WeddingImage from "../../assets/images/hairdressing-page/wedding.jpg";
import PromImage from "../../assets/images/hairdressing-page/prom.jpg";
import SpecialEventImage from "../../assets/images/hairdressing-page/special-event.png";
import ColouringImage from "../../assets/images/hairdressing-page/colouring.jpg";

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);

	return (
		<Flex
			px={{ base: "5%", md: "10%", lg: "15%" }}
			pt={{ base: "8rem", lg: "12rem" }}
			fontSize={{ base: "0.9rem", md: "1rem", lg: "1.1rem" }}
			flexDir="column"
			w="100%">
			<Flex flexDir="column">
				<Text
					color={COLORS.PRIMARY_COLOR}
					fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}>
					Hairdressing
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row" }}
					w="100%"
					mt={{ base: "1rem", lg: "none" }}
					justify="space-between"
					minH="30rem"
					align="center">
					<Flex
						w={{ base: "100%", lg: "45%" }}
						h={{ base: "80%", lg: "30rem" }}>
						<Image
							data-aos="zoom-in"
							src={HairdressingImage}
							w="100%"
							h="100%"
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						data-aos="zoom-in"
						flexDir="column"
						w={{ base: "100%", lg: "50%" }}
						h={{ base: "100%", lg: "30rem" }}
						mt={{ base: "1rem", lg: "none" }}
						justify="space-between">
						<Text>
							All services include an initial consultation, hair and scalp
							analysis, use of only the very best quality shampoo’s &
							conditioners and{" "}
							<Box as="span" fontWeight="bold">
								KEUNE
							</Box>{" "}
							colours, a liquid refreshment and the obligatory chat about where
							you are going for your holidays…
						</Text>
						<Text>
							We now also offer the incredible new{" "}
							<Box as="span" fontWeight="bold">
								OLAPLEX
							</Box>{" "}
							treatment which will dramatically reduce breakage in your hair and
							make any colour last longer.
						</Text>
						<Text>
							See below for more details about all our treatments, or{" "}
							<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
								Contact Us Now
							</Box>{" "}
							to find out more…
						</Text>
						<Text>
							<Box as="span" fontWeight="bold">
								Cancellations:
							</Box>{" "}
							Please note – 24 hours notice is required to cancel an
							appointment. Missed appointments will be charged at 50% on your
							next visit.
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Text
				color={COLORS.PRIMARY_COLOR}
				fontStyle="italic"
				mt={{ base: "1rem", md: "2rem", lg: "3rem" }}
				mb={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}>
				All our hairdressing prices are based on having short to medium length
				hair. We do charge more for long hair depending upon time and product
				used. This can be discussed with your stylist in the salon. If booking
				by phone, please let us know so we can allow extra time if needed.
			</Text>
			<Flex flexDir="column" mt="2rem">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.5rem" mb="1rem">
					ladies cuts & styling
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row" }}
					w="100%"
					justify="space-between"
					minH="22rem">
					<Flex w={{ base: "100%", lg: "45%" }} h="90%">
						<Image
							data-aos="zoom-in"
							src={StylingImage}
							w="100%"
							h={{ base: "100%", lg: "25rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						flexDir="column"
						w={{ base: "100%", lg: "50%" }}
						mt={{ base: "1rem", lg: "none" }}
						h="100%">
						<Text>restyle – £43</Text>
						<Text>cut & blow-dry – £39</Text>
						<Text>dry cut – £20</Text>
						<Text>longer hair cut & blow – £45</Text>
						<Text>blow dry – £19</Text>
						<Text>blow dry with curl – £25</Text>
						<Text>longer hair blow-dry – from £21</Text>
						<Text>
							<Box as="span" color={COLORS.PRIMARY_COLOR}>
								Olaplex™
							</Box>{" "}
							in-salon treatment – £20longer hair cut & blow – £45
						</Text>
						<Text>hair up – from £25</Text>
						<Text>French plait – £8</Text>
						<Text>
							<Box as="span" color={COLORS.PRIMARY_COLOR}>
								KeraStraight
							</Box>{" "}
							treatments – POC
						</Text>
						<Text mt="1rem">perm – £35</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" mt="2rem">
				<Text
					color={COLORS.PRIMARY_COLOR}
					ml={{ base: "none", lg: "auto" }}
					fontSize="1.5rem"
					mb="1rem">
					colouring*
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row-reverse" }}
					w="100%"
					justify="space-between"
					minH="25rem">
					<Flex w={{ base: "100%", lg: "45%" }} h="100%">
						<Image
							data-aos="zoom-in"
							src={ColouringImage}
							w="100%"
							h={{ base: "100%", lg: "25rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						flexDir="column"
						mt={{ base: "1rem", lg: "none" }}
						justify="space-between"
						w={{ base: "100%", lg: "50%" }}
						h="100%">
						<Flex h="100%" flexDir="column" justify="space-between">
							<Text>full head – £35</Text>
							<Text>roots – £26</Text>
							<Text>foils full head – £42</Text>
							<Text>foils half head – £35</Text>
							<Text>foils t-section – £25</Text>
							<Text>semi-permanent – £30</Text>
							<Text>de-colour – £15</Text>
							<Text>Olaplex™ colour treatment – £20 extra</Text>
						</Flex>
						<Text mt={{ base: "1rem", lg: "2rem" }}>
							* With any colouring service the price does not include Cut or
							Blow Dry and we advise you to have a skin test 48 hours before any
							tinting process
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" mt="2rem">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.5rem" mb="1rem">
					OLAPLEX™ treatments
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row-reverse" }}
					w="100%"
					justify="space-between"
					minH="20rem">
					<Flex w={{ base: "100%", lg: "45%" }} h="90%">
						<Image
							src={TreatmentImage}
							w="100%"
							h={{ base: "100%", lg: "20rem" }}
						/>
					</Flex>
					<Flex
						flexDir="column"
						mt={{ base: "1rem", lg: "none" }}
						justify="space-between"
						w={{ base: "100%", lg: "50%" }}
						h="100%">
						<Text>
							<Box as="span" color={COLORS.PRIMARY_COLOR} fontWeight="bold">
								OLAPLEX™
							</Box>{" "}
							is a brand new, breakthrough treatment for repairing damaged hair
							and particularly through colouring.
						</Text>
						<Text>
							It’s unique formula dramatically reduces breakage of your hair and
							makes your colour last longer.
						</Text>
						<Text>
							“OLAPLEX™ will relink the bonds that are broken during a chemical
							service and strengthen your hair immediately. It will make a huge
							difference in the health of your hair.”
						</Text>
						<Text>Treatments – from £20</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" mt="3rem">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.5rem" mb="1rem">
					men's haircutting
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row" }}
					w="100%"
					justify="space-between"
					minH="22rem">
					<Flex w={{ base: "100%", lg: "45%" }} h="100%">
						<Image
							data-aos="zoom-in"
							src={HairCuttingImage}
							w="100%"
							h={{ base: "100%", lg: "25rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						flexDir="column"
						w={{ base: "100%", lg: "50%" }}
						mt={{ base: "1rem", lg: "none" }}
						h="100%">
						<Text my="1rem">wash & cut – £13</Text>
						<Text mb="1rem">dry cut – £10</Text>
						<Text mb="1rem">colour – from £30</Text>
						<Text>scalp massage and conditioning treatment – £6.5</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" mt="3rem">
				<Text
					color={COLORS.PRIMARY_COLOR}
					ml={{ base: "none", lg: "auto" }}
					fontSize="1.5rem"
					mb="1rem">
					little angels
				</Text>
				<Flex
					flexDir={{ base: "column", lg: "row-reverse" }}
					w="100%"
					justify="space-between"
					minH="22rem">
					<Flex w={{ base: "100%", lg: "45%" }} h="100%">
						<Image
							data-aos="zoom-in"
							src={LittleAngelsImage}
							w="100%"
							h={{ base: "100%", lg: "25rem" }}
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						flexDir="column"
						mt={{ base: "1rem", lg: "none" }}
						w={{ base: "100%", lg: "50%" }}
						h="100%">
						<Text mb="1.5rem">0 -5 years wet cut – £8</Text>
						<Text mb="1.5rem">6 – 12 years wet cut – £10</Text>
						<Text mb="1.5rem">cut and blow dry – £30</Text>
						<Text mb="1.5rem">13 years and up – adult prices</Text>
						<Text mb="1.5rem">colouring – adult prices</Text>
						<Text>curled with cloud nine – £15</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" mt="5rem">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="1.7rem" mb="1rem">
					Hairstyling for Weddings, Proms and Special Events
				</Text>
				<Text my="1rem">
					Park Row are here for all your special event and party needs…
				</Text>
				<Flex
					w="100%"
					flexDir={{ base: "column", lg: "row" }}
					justify="space-between"
					minH="20rem">
					<Image
						data-aos="fade-right"
						src={WeddingImage}
						w={{ base: "100%", lg: "30%" }}
						mt={{ base: "1rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
					<Image
						data-aos="fade-down"
						src={PromImage}
						w={{ base: "100%", lg: "30%" }}
						mt={{ base: "1rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
					<Image
						data-aos="fade-left"
						src={SpecialEventImage}
						w={{ base: "100%", lg: "30%" }}
						mt={{ base: "1rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
			</Flex>
			<Text py="3rem">
				<Box as="span" fontWeight="bold">
					Contact us now on 01484 722220
				</Box>{" "}
				to make an appointment – and find out for yourself why at{" "}
				<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
					Flapex Beauty
				</Box>
				, we say…{" "}
				<Box as="span" fontWeight="bold" fontStyle="italic">
					it’s all about you…
				</Box>
			</Text>
			<Flex
				w="100%"
				flexDir={{ base: "column", lg: "row" }}
				fontSize={{ base: "0.9rem", md: "1rem", lg: "0.9rem", xl: "1rem" }}
				py="5%"
				justify="space-between"
				bgColor="white">
				<Flex
					pos="relative"
					mt={{ base: "1rem", lg: "none" }}
					bgColor="#eac8c5"
					height={{ base: "18rem", sm: "15rem", md: "13rem", lg: "25rem" }}
					w={{ base: "100%", lg: "30%" }}>
					<Flex pos="absolute" top="-10px" ml="45%">
						<Icon as={BsChatQuote} fontSize="2.2rem" />
					</Flex>
					<Flex
						flexDir="column"
						justify="space-between"
						p={{ base: "1rem", sm: "2rem", lg: "1rem", xl: "2rem" }}>
						<Text mt="1rem">
							This place is amazing!! I’ve had my hair cut by Beckie and she’s
							done an amazing job with my hair! I’ve got really fine hair but
							she knows exactly how to work it so it won’t look thinner than it
							already is! Thank you all of you at this amazing place in never
							ever going anywhere else!
						</Text>
						<Text fontWeight="bold">Marie Sallis</Text>
					</Flex>
				</Flex>
				<Flex
					pos="relative"
					mt={{ base: "1rem", lg: "none" }}
					bgColor="#eac8c5"
					height={{ base: "21rem", sm: "17rem", md: "17rem", lg: "27rem" }}
					w={{ base: "100%", lg: "30%" }}>
					<Flex pos="absolute" top="-10px" ml="45%">
						<Icon as={BsChatQuote} fontSize="2.2rem" />
					</Flex>
					<Flex
						flexDir="column"
						justify="space-between"
						p={{ base: "1rem", sm: "2rem", lg: "1rem", xl: "2rem" }}>
						<Text my="1rem">
							Great haircuts, colours and beauty treatments – at a reasonable
							price. Also lovely friendly helpful staff.
						</Text>
						<Text fontWeight="bold">Michelle Clayton</Text>
						<Text my="1rem">
							I have been going to Park Row for longer than I care to remember.
							Lovely people, excellent service. I always feel better when I come
							out.
						</Text>
						<Text fontWeight="bold">Pam Fellows</Text>
					</Flex>
				</Flex>
				<Flex
					pos="relative"
					mt={{ base: "1rem", lg: "none" }}
					bgColor="#eac8c5"
					height={{ base: "18rem", sm: "15rem", md: "13rem", lg: "25rem" }}
					w={{ base: "100%", lg: "30%" }}>
					<Flex pos="absolute" top="-10px" ml="45%">
						<Icon as={BsChatQuote} fontSize="2.2rem" />
					</Flex>
					<Flex
						flexDir="column"
						justify="space-between"
						p={{ base: "1rem", sm: "2rem", lg: "1rem", xl: "2rem" }}>
						<Text mt="1rem">
							First time I visited today, I walked through the door (no appt!)
							and literally said “help me” to the poor hairdresser! Well help me
							she did. Amy – what a star you are. I shall be back to see you in
							4 weeks. This Cinderella will go the ball after all – and it’s all
							thanks to you.
						</Text>
						<Text fontWeight="bold">Laura Stone</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Content;
