import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Aos from "aos";

import { COLORS } from "../../styles/theme";
import OfferSectionImage from "../../assets/images/welcome-page/offer-section.png";

const OfferSection = () => {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<Flex
			flexDir={{ base: "column", lg: "row-reverse" }}
			justify="space-between"
			py={{ base: "2rem", md: "3.5rem", lg: "5rem" }}
			px={{ base: "5%", md: "10%", lg: "15%" }}
			minH="35rem"
			bgColor="white">
			<Flex w={{ base: "100%", lg: "45%" }}>
				<Image
					data-aos="zoom-in"
					src={OfferSectionImage}
					h={{ base: "15rem", md: "20rem", lg: "100%" }}
					w="100%"
				/>
			</Flex>
			<Flex
				justify="space-between"
				flexDir="column"
				fontSize={{ base: "0.9rem", lg: "1rem" }}
				w={{ base: "100%", lg: "50%" }}>
				<Text
					d={{ base: "none", lg: "flex" }}
					fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
					color={COLORS.PRIMARY_COLOR}>
					Offering The Best Hair <br />
					Treatments
				</Text>
				<Text
					d={{ base: "flex", lg: "none" }}
					fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
					color={COLORS.PRIMARY_COLOR}>
					Offering The Best Hair Treatments
				</Text>
				<Text>
					<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
						OLAPLEX™
					</Box>{" "}
					is a breakthrough treatment for repairing damaged hair and
					particularly through colouring.
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
				<Text>
					<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
						Call us now
					</Box>{" "}
					for more details, or make sure you ask us about OLAPLEX™ when you next
					come in for your haircut.
				</Text>
			</Flex>
		</Flex>
	);
};

export default OfferSection;
