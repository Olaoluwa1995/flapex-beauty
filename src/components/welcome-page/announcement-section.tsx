import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { COLORS, BoxShadow } from "../../styles/theme";

const AnnouncementSection = () => {
	return (
		<Flex
			pb="3rem"
			px={{ base: "5%", md: "10%", lg: "15%" }}
			minH="35rem"
			bgColor={COLORS.BACKGROUND_COLOR}>
			<Flex
				flexDir="column"
				w="100%"
				justify="space-between"
				boxShadow={BoxShadow}
				border="4px solid grey"
				borderRadius="4px"
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				py="2rem"
				px="5%">
				<Text
					fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
					color={COLORS.PRIMARY_COLOR}>
					Beauty Treatments: An Announcement
				</Text>
				<Text>
					It is with huge sadness and a heavy heart that we have to announce we
					will not be reopening for Beauty Treatments as we reopen for hair
					appointments after the latest lockdown (April 2021). This will be for
					the foreseeable future and, in all honesty, it is unlikely that we
					will ever reopen this side of the business again.
				</Text>
				<Text>
					We would like to say a HUGE thank you to all the Beauty clients we’ve
					had the pleasure of providing treatments for since moving to our
					current address and becoming Park Row Hair & Beauty, nearly 10 years
					ago now. However, we do hope that we will continue to see the majority
					of you for your hairdressing.
				</Text>
				<Text>
					We are still thinking that we would like to offer Pamper Parties again
					at some time in the future, but this will depend upon sufficient
					relaxation of social distancing restrictions.
				</Text>
				<Text>
					Any vouchers you may have can be redeemed in the hair salon or for
					hair and/or beauty products.
				</Text>
				<Text>
					Many thanks for your understanding and please do get in touch if you
					have any questions whatsoever.
				</Text>
			</Flex>
		</Flex>
	);
};

export default AnnouncementSection;
