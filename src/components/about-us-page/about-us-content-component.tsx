import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Aos from "aos";

import { COLORS } from "../../styles/theme";
import JanetImage from "../../assets/images/about-us/Janet.jpg";
import LynzieImage from "../../assets/images/about-us/Lynzie.jpg";
import AmyImage from "../../assets/images/about-us/Amy.jpg";
import BeckieImage from "../../assets/images/about-us/Becky.jpg";
import JennyImage from "../../assets/images/about-us/Jenny.jpg";
import ChloeImage from "../../assets/images/about-us/Chloe.jpg";
import AliciaImage from "../../assets/images/about-us/Alicia.jpg";
import KatelynImage from "../../assets/images/about-us/Katelyn.jpg";

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);

	return (
		<Flex
			px={{ base: "5%", md: "10%", lg: "15%" }}
			pt="12rem"
			flexDir="column"
			fontSize={{ base: "0.9rem", sm: "1rem" }}
			w="100%"
			bgColor="#fdfdfd">
			<Text
				color={COLORS.PRIMARY_COLOR}
				fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}>
				About Us
			</Text>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				mt="1rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						src={JanetImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						Hi, I’m Janet and welcome to our About Us page where you can find
						out a little bit more about the brilliant girls who work at the
						Salon.
					</Text>
					<Text>
						Although we moved and changed our name to{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Flapex Beauty
						</Box>{" "}
						in Nov 2011, I have been the owner at{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Flapex Beauty Salon
						</Box>{" "}
						in Brighouse since 1998. Yes, I{" "}
						<Box as="span" fontWeight="bold">
							was VERY
						</Box>{" "}
						young when I first took over!
					</Text>
					<Text>
						Since then my hard-working staff and I have built up a reputation as
						a busy, fun and unpretentious salon – where the personal touch{" "}
						<Box as="span" fontWeight="bold">
							always
						</Box>{" "}
						comes first.
					</Text>
					<Text>
						Hi, I’m Janet and welcome to our About Us page where you can find
						out a little bit more about the brilliant girls who work at the
						Salon.
					</Text>
					And speaking of my “hard-working staff” – I’d like to take a moment to
					introduce them all to you…
				</Flex>
			</Flex>
			<Flex
				w="100%"
				flexDir={{ base: "column", lg: "row" }}
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={LynzieImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						First up is{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Lynzie
						</Box>{" "}
						who has been at Flapex Beauty for longer than she wants to admit –
						joining us straight out of hairdressing college.
					</Text>
					<Text>
						A Brighouse girl like myself she brought quite a following back in
						those days. And she has continued to show everyone how versatile
						their hair can be – by curling, straightening and “putting up”.
					</Text>
					<Text>
						She is our lead stylist for weddings, proms or special events – also
						giving advice on colour to suit{" "}
						<Box as="span" fontWeight="bold">
							all
						</Box>{" "}
						occasions.
					</Text>
					<Text>
						(If your thinking of asking her to be Godparent to your next child
						the answer will be NO – She’s got 9 Godchildren already!!)
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={AmyImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Amy
						</Box>{" "}
						is another of our very talented team members who joined us in early
						2011.
					</Text>
					<Text>
						She produces beautiful colours to suit your style and keeps up with
						the latest techniques for creating the best colours for your hair.
					</Text>
					<Text>
						She can create a fabulous blow dry or put up for evenings out or
						special occasions and give advice on how you can use products to
						make the most of your hair!
					</Text>
					<Text>
						(She has such a lovely smile… but just{" "}
						<Box as="span" fontWeight="bold">
							don’t
						</Box>{" "}
						touch her crisps!)
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={BeckieImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Beckie
						</Box>{" "}
						is our stylist with attitude!! Every salon has one, it’s just ours
						is Beckie!
					</Text>
					<Text>
						Beckie has been with us since leaving school and has grown into a
						great all round stylist. She has proven to be very talented using
						techniques learned over the years with us here at Flapex Beauty.
					</Text>
					<Text>
						Nothing is too much trouble and she will go the extra mile to get
						your look just right.
					</Text>
					<Text>
						(We always rely on Beckie for a good laugh and usually at her
						expense, but don’t be fooled by her cute exterior… there is a
						monster in there that needs to be fed every three hours!!)
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={JennyImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					pt="4%"
					pb="3%"
					h="100%"
					justify="space-between">
					<Text>
						Introducing{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Jenny
						</Box>{" "}
						our latest member of the team. Jenny, Jennifer, Jen – she answers to
						most versions!
					</Text>
					<Text>
						Jenny is one of our most experienced stylists. She has lived &
						worked in Brighouse most of her life like myself.
					</Text>
					<Text>
						She then opened her own salon in Huddersfield and successfully ran
						her own team of people until having her daughter. She is now
						enjoying working alongside the Flapex Beauty family, keeping up with
						all the latest wants and needs of our lovely clients.
					</Text>
					<Text>
						Cutting is Jenny’s passion, she has techniques up her sleeve to
						satisfy the most difficult hair, using colour to compliment the
						look.
					</Text>
					<Text>
						(Jenny has a big personality… so don’t be alarmed if she blows you a
						kiss on the way out!!)
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={ChloeImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						Introducing{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Chloe
						</Box>{" "}
						– who has such a calm manner it’s enough to make even the most
						uptight of us relax with her pressure point massage techniques.
					</Text>
					<Text>
						She is a perfectionist and loves treating your skin with her
						knowledge of Dermalogica. She has been busy completing her “Expert
						level” in Dermalogica and is always around to give skin advice for
						all ages.
					</Text>
					<Text>
						Chloe is experienced in all aspects of beauty. She joins in quite
						often with the Pamper Parties, usually giggling away while painting
						nails or applying festival make up.
					</Text>
					<Text>
						If you’re really lucky she may even show you a little ‘boogie’, as
						she also has a BA Honours in Dance!!
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={AliciaImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					py="5%"
					h="100%"
					justify="space-between">
					<Text>
						Our lovely{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Alicia
						</Box>{" "}
						is a very enthusiastic. She has just finished her training in the
						summer of 2019.
					</Text>
					<Text>
						Alicia is very quickly acquiring a following after posting her work
						on Facebook and Instagram. She deserves a medal for her smile, it
						never falters even though we test her to the max!
					</Text>
					<Text>
						Alicia is gaining confidence and experience very quickly. You have
						never seen her so excited as when she is organising our Pamper
						Party’s. She actually enjoys them as much as the Little Angels
						themselves!
					</Text>
					<Text>
						(Just one thing… she never forgets what you talked about on your
						last visit, so just be careful what you say!!)
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				w="100%"
				justify="space-between"
				minH="32rem"
				bgColor="#eac8c5"
				px="1.8rem"
				mt="2rem"
				align="center">
				<Flex w={{ base: "100%", lg: "45%" }} h="90%">
					<Image
						data-aos="zoom-in"
						src={KatelynImage}
						w="100%"
						mt={{ base: "2rem", lg: "none" }}
						h="100%"
						boxShadow="0 8px 8px 0 gray"
					/>
				</Flex>
				<Flex
					flexDir="column"
					w={{ base: "100%", lg: "50%" }}
					pt="5%"
					pb="15%"
					h="100%"
					justify="space-between">
					<Text>
						Our little{" "}
						<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
							Katelyn
						</Box>{" "}
						is the most efficient Saturday girl ever!
					</Text>
					<Text>
						Looking after all our stylists, cleaning up, running errands,
						feeding us (and that’s a job on its own!)
					</Text>
					<Text>
						She is so attentive our clients want for nothing while she
						around.Katelyn is studying hard towards her A levels at the moment
						and loves a game of netball in her spare time.
					</Text>
					<Text>
						She does talk about her annoying little sister lots which makes me
						think she loves her really!!
					</Text>
				</Flex>
			</Flex>
			<Text my="2rem">
				So, if you’re new to the area, unhappy with your current hairdresser or
				beauty salon, or simply looking for a change – why don’t you come along
				and meet us in person? We’d love to welcome you at our warm and friendly
				salon.
			</Text>
			<Text mb="2rem">
				<Box as="span" fontWeight="bold">
					Call us now on 01484 722220
				</Box>{" "}
				to book an appointment – or if you prefer, book a free 15 minute initial
				consultation, to help you feel comfortable with what we can do.
			</Text>
			<Text mb="1rem">
				Come and see why at{" "}
				<Box as="span" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
					Flapex Beauty
				</Box>{" "}
				we say…{" "}
				<Box as="span" fontWeight="bold" fontStyle="italic">
					it’s all about you…
				</Box>
			</Text>
		</Flex>
	);
};

export default Content;
