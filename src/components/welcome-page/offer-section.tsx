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
			flexDir="row"
			justify="space-between"
			py="5rem"
			px="15%"
			h="35rem"
			bgColor="white">
			<Flex justify="space-between" flexDir="column" w="50%">
				<Text fontSize="2rem" color={COLORS.PRIMARY_COLOR}>
					Offering The Best Hair <br />
					Treatments
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
			<Flex flexDir="column" w="45%">
				<Image data-aos="zoom-in" src={OfferSectionImage} h="100%" w="100%" />
			</Flex>
		</Flex>
	);
};

export default OfferSection;
