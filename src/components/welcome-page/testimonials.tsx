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
				px={{ base: "5%", md: "10%", lg: "15%" }}
				minH="50rem"
				bgColor="transparent">
				<Flex
					fontSize={{ base: "0.9rem", sm: "1rem", lg: "0.9rem", xl: "1rem" }}
					flexDir={{ base: "column", lg: "row" }}
					w="100%"
					py="5%"
					justify="space-between">
					<Flex
						pos="relative"
						mb={{ base: "1rem", lg: "none" }}
						bgColor="rgba(245,245,245,0.8)"
						height={{ base: "20rem", sm: "15rem", md: "13rem", lg: "25rem" }}
						w={{ base: "100%", lg: "30%" }}>
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex
							flexDir="column"
							justify="space-between"
							padding={{ base: "1rem", sm: "2rem" }}>
							<Text mt="2rem">
								I have been going to Flapex Beauty for my hair
								cutting for 17 years and, more recently, for my nails doing. I
								wouldn’t go anywhere else. The girls are not only very
								professional; they are so warm, welcoming and helpful. Wonderful
								atmosphere xxxx
							</Text>
							<Text
								textAlign={{ base: "center", lg: "justify" }}
								fontWeight="bold">
								Tinu Agunbiade
							</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						mb={{ base: "1rem", lg: "none" }}
						bgColor="rgba(245,245,245,0.8)"
						height={{ base: "20rem", sm: "16rem", md: "13rem", lg: "27rem" }}
						w={{ base: "100%", lg: "30%" }}>
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex
							flexDir="column"
							justify="space-between"
							padding={{ base: "1rem", sm: "2rem" }}>
							<Text mt="2rem">
								I have been a customer at Flapex for over twelve years and can
								honestly say that every visit is a time I look forward to.
								Fantastically friendly staff, great new premises and a real
								commitment to making every customer enjoy their ‘me’ time. Thank
								you Flapex – I’ll be back!
							</Text>
							<Text
								textAlign={{ base: "center", lg: "justify" }}
								fontWeight="bold">
								Sola Oyebola
							</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						mb={{ base: "1rem", lg: "none" }}
						bgColor="rgba(245,245,245,0.8)"
						height={{ base: "19rem", sm: "14rem", md: "13rem", lg: "25rem" }}
						w={{ base: "100%", lg: "30%" }}>
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex
							flexDir="column"
							justify="space-between"
							padding={{ base: "1rem", lg: "2rem" }}>
							<Text mt="2rem">
								I found Flapex on the internet as it was close to where we
								were staying for the wedding we attended. I have never been so
								pleased with my hair… my make up was lovely too and lasted all
								day, wish we could bring the girls down south with us. Once
								again many thanks
							</Text>
							<Text
								textAlign={{ base: "center", lg: "justify" }}
								fontWeight="bold">
								Yemi Ojo
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					flexDir={{ base: "column", lg: "row" }}
					w="100%"
					fontSize={{ base: "0.9rem", sm: "1rem", lg: "0.9rem", xl: "1rem" }}
					py={{ base: "none", lg: "5%" }}
					pb={{ base: "5%", lg: "none" }}
					justify="space-between">
					<Flex
						pos="relative"
						mb={{ base: "2rem", lg: "none" }}
						bgColor="rgba(245,245,245,0.8)"
						height={{ base: "20rem", sm: "15rem", md: "13rem", lg: "20rem" }}
						width={{ base: "100%", lg: "45%" }}>
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex
							flexDir="column"
							justify="space-between"
							padding={{ base: "1rem", lg: "2rem" }}>
							<Text mt="2rem">
								Lovely girls with a lovely service! Went in after a few years of
								not having my hair cut and was desperate to get it sorted. The
								girl who did my hair couldn’t of done a better job, I was so
								pleased I couldn’t thank her enough. Will definitely be going
								back!
							</Text>
							<Text fontWeight="bold">Laide Olabode</Text>
						</Flex>
					</Flex>
					<Flex
						pos="relative"
						bgColor="rgba(245,245,245,0.8)"
						height={{ base: "20rem", sm: "15rem", md: "13rem", lg: "20rem" }}
						width={{ base: "100%", lg: "45%" }}>
						<Flex pos="absolute" top="-10px" ml="45%">
							<Icon as={BsChatQuote} fontSize="2.2rem" />
						</Flex>
						<Flex
							flexDir="column"
							justify="space-between"
							padding={{ base: "1rem", lg: "2rem" }}>
							<Text mt="2rem">
								Fabulous place, really friendly & did a awesome job with my hair
								after a disastrous hair cut at… another hairdresser who we won't
								name here! I will definitely be using Flapex for me and my
								children from now on. Five stars from me!
							</Text>
							<Text fontWeight="bold">Tina Alfred</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default TestimonialSection;
