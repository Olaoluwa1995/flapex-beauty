import React from "react";
import {
	Flex,
	Text,
	Box,
	Image,
	Icon,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import { BsChatQuote } from "react-icons/bs";

import { COLORS, BoxShadow } from "../../styles/theme";
import PamperPartyImage from "../../assets/images/pamper-parties-page/pamper-party.jpg";
import SittingRoomImage from "../../assets/images/pamper-parties-page/sitting-room.jpg";
import LittleAngelsImage from "../../assets/images/pamper-parties-page/little-angels.jpg";
import WeddingPackagesImage from "../../assets/images/pamper-parties-page/wedding-packages.jpg";
import WeddingHairImage from "../../assets/images/pamper-parties-page/wedding-hair.jpg";
import PromPrincessImage from "../../assets/images/pamper-parties-page/prom-princess.png";

const Content = () => {
	return (
		<Flex
			flexDir="column"
			w="100%"
			justify="space-between"
			px="15%"
			pt="12rem"
			bgColor="white">
			<Flex
				flexDir="column"
				w="100%"
				boxShadow={BoxShadow}
				border="3px solid grey"
				borderRadius="6px"
				px="5%">
				<Text
					mt="2rem"
					fontSize="1.8rem"
					fontWeight="bold"
					textAlign="center"
					color={COLORS.PRIMARY_COLOR}>
					Continued COVID Restrictions
				</Text>
				<Text mt="1.5rem" mb="1rem">
					Unfortunately, despite being able to reopen for hairdressing services
					from 12th April, we are still currently unable to take bookings for
					Pamper Party events at this time due to requirements for social
					distancing.
				</Text>
				<Text mb="1rem">
					We are really sorry that this is the case but hopefully, we’ll be able
					to do so again very soon.
				</Text>
				<Text mb="2rem">Until then, take care.</Text>
			</Flex>
			<Flex flexDir="column" mt="3rem">
				<Text color={COLORS.PRIMARY_COLOR} fontSize="2rem">
					Pamper Parties
				</Text>
				<Flex w="100%" justify="space-between" h="25rem" align="center">
					<Flex w="45%" h="80%">
						<Image
							data-aos="zoom-in"
							src={PamperPartyImage}
							w="100%"
							h="100%"
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
					<Flex
						data-aos="zoom-in"
						flexDir="column"
						w="50%"
						h="100%"
						justify="space-between">
						<Text>
							Whether it’s to celebrate a birthday, or it’s just a extra special
							get together with friends before your big day – a{" "}
							<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
								Flapex Beauty Salon
							</Box>{" "}
							will be remembered and talked about by your guests for a long time
							to come.
						</Text>
						<Text>
							When you choose either of our special{" "}
							<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
								Little Angels… Prom Princess…
							</Box>{" "}
							or one of our{" "}
							<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
								Wedding Packages
							</Box>{" "}
							– our luxury Pamper Suite is decorated to suit your special day.
						</Text>
						<Text>
							We have a huge, warm and relaxing upstairs room at the salon which
							we use for our Pamper Parties.
						</Text>
						<Text>
							We pamper to your every need, providing Pink Fizz (non-alcoholic
							of course for our Little Angels), nibbles for the peckish and
							music – calming or otherwise, whichever you choose.
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				data-aos="fade-up"
				pos="relative"
				bgColor="#eac8c5"
				height="20rem"
				width="100%"
				mt="5rem">
				<Flex pos="absolute" top="-10px" ml="45%">
					<Icon as={BsChatQuote} fontSize="2.2rem" />
				</Flex>
				<Flex flexDir="column" justify="space-between" padding="2rem">
					<Flex flexDir="column">
						<Text>
							Just wanted to say thanks so much to the two ladies who looked
							after us at Olivia’s 6th birthday celebration this afternoon, they
							were lovely and very patient. The girls loved it.
						</Text>
						<Text mt="2rem">
							Would definitely recommend a Pampered Princess party at Park
							Row!…..
						</Text>
					</Flex>
					<Flex flexDir="column">
						<Text fontWeight="bold">Nicky Tyman (Olivia's Mum!)</Text>
						<Text>Brighouse</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				h="23rem"
				flexDir="row-reverse"
				w="100%"
				justify="space-between"
				mt="4rem">
				<Flex w="48%" h="100%">
					<Image
						data-aos="zoom-in"
						src={SittingRoomImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex flexDir="column" w="45%" h="100%" justify="space-between">
					<Text>
						With our{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Little Angels
						</Box>{" "}
						package we supply decorations, music, invites, drinks, nibbles and a
						choice of up to 3 treatments each.
					</Text>
					<Flex flexDir="column">
						<Text>Choose from…</Text>
						<UnorderedList>
							<ListItem>mini manicure</ListItem>
							<ListItem>mini bubble pedicure</ListItem>
							<ListItem>hair styled</ListItem>
							<ListItem>make-up applied</ListItem>
							<ListItem>finger nails painted</ListItem>
							<ListItem>toe nails painted</ListItem>
						</UnorderedList>
					</Flex>
				</Flex>
			</Flex>
			<Flex h="23rem" w="100%" justify="space-between" mt="4rem">
				<Flex w="48%" h="100%">
					<Image
						data-aos="zoom-in"
						src={LittleAngelsImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex flexDir="column" w="45%" h="100%" justify="space-between">
					<Text>
						We have hats, tiaras, feather boa’s – and an ideal spot for the
						perfect party pose and photo’s with all your friends when we’ve
						finished with you!
					</Text>
					<Text>
						We can provide a Chocolate Fountain with fresh bananas, strawberries
						and marshmallows for just an extra £20 – and sandwiches for £20.
					</Text>
					<Text>
						Our prices start from{" "}
						<Box as="span" fontWeight="bold">
							£100
						</Box>{" "}
						for up to 5 Little Angels. Extra guests are charged at{" "}
						<Box as="span" fontWeight="bold">
							£20
						</Box>{" "}
						per person. Each party lasts for approximately 90 mins.
					</Text>
					<Text fontWeight="bold">
						We will do our best to adapt to their every need!
					</Text>
				</Flex>
			</Flex>
			<Flex
				data-aos="fade-up"
				pos="relative"
				bgColor="#eac8c5"
				height="30rem"
				width="100%"
				mt="5rem">
				<Flex pos="absolute" top="-10px" ml="45%">
					<Icon as={BsChatQuote} fontSize="2.2rem" />
				</Flex>
				<Flex flexDir="column" justify="space-between" padding="2rem">
					<Flex flexDir="column">
						<Text>
							My daughter Mollie and seven of her friends had a wonderful
							celebrating Mollie’s 9th Birthday. The two ladies who ran the
							party and who ‘pampered’ the girls were fabulous. Nothing was too
							much trouble and they listened to what each child wanted.
						</Text>
						<Text mt="2rem">
							All of the girls had their hair and make-up done and I was
							relieved to see that it was make-up suitable for young children
							and not too heavy. They could also choose from pedicure and
							manicures – but most opted for a bubble pedicure. The chaperones
							were also looked after which made the whole afternoon even more
							enjoyable.
						</Text>
						<Text mt="2rem">
							Thank you ladies for making helping to make Mollie’s party so
							enjoyable.
						</Text>
					</Flex>
					<Flex flexDir="column">
						<Text fontWeight="bold">Justine Stevenson</Text>
						<Text>Director - Primo PR</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex justify="space-between" h="30rem" w="100%" mt="4rem">
				<Flex w="30%" h="100%">
					<Image
						data-aos="zoom-in"
						src={PromPrincessImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex flexDir="column" w="65%" justify="space-between">
					<Text>
						With our{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Prom Princess
						</Box>{" "}
						package, we make your prom just a little bit special by having your{" "}
						<Box as="span" fontWeight="bold">
							own room
						</Box>{" "}
						dedicated to you and your friends.
					</Text>
					<Text>
						We supply nibbles and drinks for groups of 3 or more having 3
						treatments each.
					</Text>
					<Flex flexDir="column">
						<Text>
							Choose 3 or more of the following treatments With our{" "}
							<Box as="span" color={COLORS.PRIMARY_COLOR}>
								(from the regular price menu)
							</Box>{" "}
							and we will discount your package by 10%.
						</Text>
						<UnorderedList>
							<ListItem>hair styled and put up (from dry)</ListItem>
							<ListItem>make up</ListItem>
							<ListItem>full body spray tan</ListItem>
							<ListItem>acrylic nails</ListItem>
							<ListItem>shellac nails</ListItem>
							<ListItem>file and polish nails</ListItem>
							<ListItem>party lashes</ListItem>
							<ListItem>individual lashes</ListItem>
						</UnorderedList>
					</Flex>
				</Flex>
			</Flex>
			<Flex justify="space-between" h="25rem" w="100%" mt="4rem">
				<Flex w="45%" h="100%">
					<Image
						data-aos="zoom-in"
						src={WeddingPackagesImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex flexDir="column" w="50%" justify="space-between">
					<Text>
						The first of our{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Wedding Packages
						</Box>{" "}
						is what we call our{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Gorgeous Gathering
						</Box>
						.
					</Text>
					<Text>
						Why not gather your hens for a last minute meeting about you and
						your big day and have all your finishing touches applied while we
						serve you nibbles and fizz!
					</Text>
					<Text>
						Get that gorgeous healthy glow with a spray tan and filed and
						polished fingers and toes all ready for the photos!
					</Text>
					<Text>
						Or, after all the hard work of the arranging, relax with a hot
						stones massage followed by a deluxe manicure and pedicure…
					</Text>
					<Text fontWeight="bold">Ah, bliss…</Text>
				</Flex>
			</Flex>
			<Flex
				justify="space-between"
				flexDir="row-reverse"
				h="30rem"
				w="100%"
				mt="4rem">
				<Flex w="30%" h="100%">
					<Image
						data-aos="zoom-in"
						src={WeddingHairImage}
						w="100%"
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex flexDir="column" w="65%" justify="space-between">
					<Text>
						And as the day gets closer, we can tailor make any{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Wedding Package
						</Box>{" "}
						that you desire, including hair and beauty appointments on your big
						day, discounts on block bookings leading up to your wedding and on
						the day itself.
					</Text>
					<Text>
						Book our luxury pamper suite for you and your wedding party – and
						get some fizz thrown in!!
						<br />
						If you have any questions about your special day and what we can do
						for you, please call the salon or email your requirements and we
						will do our utmost to accommodate.
					</Text>
					<Text>
						There are no fixed treatments for any of our{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Wedding Packages
						</Box>{" "}
						– so the pricing will depend on which treatments you would like to
						have.
					</Text>
                    <Text><Box as="span" fontWeight="bold" color="red">To Book Your Pamper Party</Box>, or for more information… simply <Box as="span" color={COLORS.PRIMARY_COLOR}>Contact Us</Box> now – everyone deserves a little pampering every now and then…</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Content;
