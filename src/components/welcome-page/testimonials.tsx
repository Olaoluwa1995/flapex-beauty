import React from "react";
import { Icon, Flex, Text } from "@chakra-ui/react";
import { BsChatQuote } from "react-icons/bs";

import TestimonialBgImage from "../../assets/images/welcome-page/testimonials-background.jpg";

const TestimonialSection = () => {
	return (
		<>
			<Flex
				bgRepeat="no-repeat"
				position="fixed"
				bgPos="top"
				zIndex={-4}
				bgSize="cover"
				bgImage={`url(${TestimonialBgImage})`}
				minH="50rem"
				w="100%"
			/>
			<Flex
				flexDir="column"
				width="100%"
				px="15%"
				minH="50rem"
				bgColor="transparent">
				<Flex w="100%" py="5%" justify="space-between">
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height="25rem"
						width="30%">
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex flexDir="column" justify="space-between" padding="2rem">
							<Text mt="1rem">
								I have been going to Park Row Hair and Beauty for my hair
								cutting for 17 years and, more recently, for my nails doing. I
								wouldn’t go anywhere else. The girls are not only very
								professional; they are so warm, welcoming and helpful. Wonderful
								atmosphere xxxx
							</Text>
							<Text fontWeight="bold">Molly Varley</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height="27rem"
						width="30%">
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex flexDir="column" justify="space-between" padding="2rem">
							<Text mt="1rem">
								I have been a customer at Park Row for over twelve years and can
								honestly say that every visit is a time I look forward to.
								Fantastically friendly staff, great new premises and a real
								commitment to making every customer enjoy their ‘me’ time. Thank
								you Park Row – I’ll be back!
							</Text>
							<Text fontWeight="bold">Jill Wood</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height="25rem"
						width="30%">
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex flexDir="column" justify="space-between" padding="2rem">
							<Text mt="1rem">
								I found Park Row on the internet as it was close to where we
								were staying for the wedding we attended. I have never been so
								pleased with my hair… my make up was lovely too and lasted all
								day, wish we could bring the girls down south with us. Once
								again many thanks
							</Text>
							<Text fontWeight="bold">Maria Santaniello</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex w="100%" py="5%" justify="space-between">
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height="20rem"
						width="45%">
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex flexDir="column" justify="space-between" padding="2rem">
							<Text mt="2rem">
								Lovely girls with a lovely service! Went in after a few years of
								not having my hair cut and was desperate to get it sorted. The
								girl who did my hair couldn’t of done a better job, I was so
								pleased I couldn’t thank her enough. Will definitely be going
								back!
							</Text>
							<Text fontWeight="bold">Georgina Henley</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height="20rem"
						width="45%">
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex flexDir="column" justify="space-between" padding="2rem">
							<Text mt="2rem">
								Fabulous place, really friendly & did a awesome job with my hair
								after a disastrous hair cut at… another hairdresser who we wont
								name here ! I will definitely be using Park Row for me and my
								children from now on. Five stars from me!
							</Text>
							<Text fontWeight="bold">Sam Day</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default TestimonialSection;
