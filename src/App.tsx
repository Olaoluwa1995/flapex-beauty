import React from "react";
import "./App.css";
import {
	Box,
	Button,
	Container,
	Flex,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import { customTheme } from "./styles/theme";
import { RiShareForwardFill } from "react-icons/ri";
import { FaHandPointRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Covid19Update from "./Covid-19-Update";
import { visaOptions } from "./VisaOption-data";
import VisaOption from "./VisaOption";
import { COLORS } from "./styles/theme";

const App = () => {
	return (
		<ChakraProvider theme={{ ...theme, ...customTheme }}>
			<CSSReset />

			<Container px="15px" d="flex" justifyContent="center" maxW="800px">
				<Flex
					justify="center"
					align="center"
					py="20px"
					w={{ base: "80%", md: "60%" }}>
					<Text
						bgColor="#c60c30"
						p="0.5rem"
						color="white"
						fontSize="1.2rem"
						fontStyle="italic"
						fontWeight="bold">
						Sunblify
					</Text>
					<Text
						borderX="2px solid grey"
						fontWeight="bold"
						mx="1rem"
						px="0.5rem"
						fontSize={{ base: "1rem", md: "1.2rem" }}>
						Dubai Visa Processing
					</Text>
					<Image
						h="3rem"
						src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
						alt="header"
					/>
				</Flex>
			</Container>
			<Flex
				display={{ base: "none", md: "flex" }}
				fontWeight="bold"
				fontSize={{ base: "0", md: "0.8rem", lg: "0.9rem", xl: "1.1rem" }}
				h="2rem"
				w="100%"
				className="info"
				align="center"
				color={COLORS.PRIMARY_COLOR}>
				Welcome to Sunbifly Dubai Visa Processing Centre. Send your data page
				and photo passport via whatsapp +2348188885290 or call +2348182666894.
			</Flex>
			<Box
				pos="relative"
				h={{ base: "20rem", md: "30rem" }}
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage:
						"url(https://www.aircargoweek.com/wp-content/uploads/2020/08/1920_a380.jpg)",
				}}>
				<Text
					color="white"
					top={{ base: "3rem", md: "5rem" }}
					ml={{ base: "1rem", md: "3rem", lg: "5rem" }}
					pos="absolute"
					fontWeight="bold"
					fontSize={{ base: "1.4rem", md: "1.7rem", lg: "2rem" }}>
					Travelling to Dubai? <br />
					<Box
						as="p"
						marginTop="1rem"
						fontSize={{ base: "0.9rem", md: "1rem", lg: "1.2rem" }}>
						Apply for your UAE visa with{" "}
						<span
							style={{ color: `${COLORS.PRIMARY_COLOR}`, fontStyle: "italic" }}>
							Sunblify
						</span>{" "}
						<br />
						for a hassle free experience
					</Box>
				</Text>
			</Box>
			<Flex bgColor="#f9f9f9" flexDir="column" px="10%" pb="2rem">
				<Text
					color={COLORS.PRIMARY_COLOR}
					fontWeight="bold"
					textAlign={{ base: "center", md: "justify" }}
					fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
					py="2rem">
					IMPORTANT: COVID-19 UPDATES
				</Text>
				<Flex flexDir="column" fontSize={{ base: "1rem", md: "1.2rem" }}>
					<Flex mb="1rem">
						<Icon fontSize="2xl" as={RiShareForwardFill} mr="0.7rem" mt="3px" />
						Customers arriving into UAE (Dubai) on or after 7th July 2020 can
						apply for their visas. Customers are required to carry the following
						documents with them:
					</Flex>
					<Covid19Update>
						Health declaration form- This form needs to be downloaded, printed,
						completely filled in block capital letters, signed and handed over
						when requested on arrival at Dubai International Airport. Please
						click{" "}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ color: `${COLORS.PRIMARY_COLOR}` }}
							href="https://c.ekstatic.net/ecl/documents/health-declaration-e-form.pdf">
							here
						</a>{" "}
						to download.
					</Covid19Update>
					<Covid19Update>
						Quarantine undertaking form- This form needs to be downloaded,
						printed, completely filled in block capital letters and singed.
						Please click{" "}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ color: `${COLORS.PRIMARY_COLOR}` }}
							href="https://c.ekstatic.net/ecl/documents/dubai-arrivals-quarantine-procedure-declaration-form.pdf">
							here
						</a>{" "}
						to download.
					</Covid19Update>
					<Covid19Update>
						For booking PCR test through authorized centre please visit{" "}
						<a style={{ color: `${COLORS.PRIMARY_COLOR}` }} href="/">
							here.
						</a>
					</Covid19Update>
					<Covid19Update>
						Health insurance valid for the duration of the visa validity is
						strongly recommended to cover any testing, medical and quarantine
						cost.
					</Covid19Update>
					<Covid19Update>
						For latest travel requirement for passengers traveling to Dubai
						please click{" "}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ color: `${COLORS.PRIMARY_COLOR}` }}
							href="https://www.emirates.com/english/help/covid-19/dubai-travel-requirements/">
							here.
						</a>
					</Covid19Update>
					<Flex ml="0.7rem" fontWeight="bold">
						**Please check your local country regulations for international
						travel before submitting your applications**.
					</Flex>
				</Flex>
			</Flex>
			<Flex textAlign="center" flexDir="column" w="100%" minH="20rem" pt="2rem">
				<Text
					fontWeight="bold"
					px="5%"
					fontSize={{ base: "1.1rem", md: "1.5rem", lg: "1.8rem" }}>
					CHOOSE FROM A{" "}
					<Box as="span" color={COLORS.PRIMARY_COLOR}>
						RANGE
					</Box>{" "}
					OF{" "}
					<Box as="span" color={COLORS.PRIMARY_COLOR}>
						VISA OPTIONS
					</Box>{" "}
					TO SUIT YOUR NEEDS!
				</Text>
				<Flex
					flexDir={{ base: "column", md: "row" }}
					w="100%"
					px={{ base: "10%", md: "0", lg: "10%" }}>
					{visaOptions.map((option: any) => (
						<VisaOption key={option.key} option={option} />
					))}
				</Flex>
			</Flex>

			<Flex w="100%" px="10%" pt="1.5rem" bgColor="#f9f9f9" flexDir="column">
				<Text
					textAlign="center"
					fontWeight="bold"
					fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.2rem" }}
					mb="0.5rem">
					APPLY ONLINE THROUGH WEBSITE
				</Text>

				<Flex flexDir={{ base: "column", md: "row" }} w="100%">
					<Image
						src="https://www.dubaivisa.net/images/online-step-1.jpg"
						w={{ base: "100%", md: "55%" }}
					/>
					<Flex
						flexDir="column"
						pt={{ base: "1rem", md: "0" }}
						w={{ base: "100%", md: "45%" }}
						pl={{ base: "0", md: "3%" }}>
						<Text fontWeight="bold" fontSize="1.4rem">
							<Box
								as="span"
								color={COLORS.PRIMARY_COLOR}
								textTransform="uppercase">
								Step 1:
							</Box>{" "}
							Book your ticket with Emirates
						</Text>
						<Flex fontSize="1.2rem" my="2rem">
							<Icon fontSize="2xl" mr="0.7rem" mt="3px" as={FaHandPointRight} />
							<Text>
								Once you have a valid PNR number, log on to{" "}
								<Box color={COLORS.PRIMARY_COLOR} as="span">
									www.emirates.com
								</Box>
							</Text>
						</Flex>
						<Flex fontSize="1.2rem">
							<Icon fontSize="2xl" mr="0.7rem" mt="3px" as={FaHandPointRight} />
							<Text>
								Manage your Booking - Enter your Booking details and click the
								‘Retrieve Booking’ button.
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					flexDir={{ base: "column-reverse", md: "row" }}
					w="100%"
					pt={{ base: "5rem", md: "3rem" }}>
					<Flex flexDir="column" w={{ base: "100%", md: "45%" }}>
						<Text
							fontWeight="bold"
							fontSize="1.4rem"
							pt={{ base: "1rem", md: "0" }}>
							<Box
								as="span"
								color={COLORS.PRIMARY_COLOR}
								textTransform="uppercase">
								Step 2:
							</Box>{" "}
							Apply for your UAE visa
						</Text>
						<Flex fontSize="1.2rem" my="2rem">
							<Icon fontSize="2xl" mr="0.7rem" mt="3px" as={FaHandPointRight} />
							<Text>
								Click the ‘Apply for a UAE’ visa option under Additional
								Services.
							</Text>
						</Flex>
					</Flex>
					<Image
						src="https://www.dubaivisa.net/images/online-step-2.jpg"
						w={{ base: "100%", md: "55%" }}
					/>
				</Flex>

				<Flex
					flexDir={{ base: "column", md: "row" }}
					w="100%"
					pt={{ base: "5rem", md: "3rem" }}>
					<Image
						src="https://www.dubaivisa.net/images/online-step-3.jpg"
						w={{ base: "100%", md: "55%" }}
					/>
					<Flex
						flexDir="column"
						pt={{ base: "1rem", md: "0" }}
						w={{ base: "100%", md: "45%" }}
						pl={{ base: "0", md: "3%" }}>
						<Text fontWeight="bold" fontSize="1.4rem">
							<Box
								as="span"
								color={COLORS.PRIMARY_COLOR}
								textTransform="uppercase">
								Step 3:
							</Box>{" "}
							Proceed to Online Application
						</Text>
						<Flex fontSize="1.2rem" my="2rem">
							<Icon fontSize="2xl" mr="0.7rem" mt="3px" as={FaHandPointRight} />
							<Text>
								Read the notice carefully and proceed to the online application
								module by clicking the ‘Continue to Visa Application’ button.
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					borderBottom="2px solid #b9b9b9"
					pt="3rem"
					pb="1rem"
					justify="center"
					mx={{ base: "10%", md: "20%" }}>
					<Button
						w="10rem"
						bgColor={COLORS.PRIMARY_COLOR}
						color="white"
						as="a"
						target="_blank"
						rel="noreferrer"
						href="https://www.emirates.com/ng/english/"
						_focus={{ border: "none", bgColor: `${COLORS.PRIMARY_COLOR}` }}>
						Apply Now
					</Button>
				</Flex>
			</Flex>

			<Flex
				minH="10rem"
				px="10%"
				flexDir="column"
				textAlign="center"
				w="100%"
				pt={{ base: "2rem", sm: "3rem", md: "4rem" }}>
				<Text fontSize="1.8rem" fontWeight="bold" color={COLORS.PRIMARY_COLOR}>
					Contact Us
				</Text>
				<Flex
					flexDir="column"
					align="flex-start"
					px={{ base: "5%", md: "10%", lg: "20%" }}
					color="grey"
					pt={{ base: "0.5rem", md: "1rem" }}>
					<Flex
						ml={{ base: "0rem", sm: "4rem", md: "8rem", lg: "10rem" }}
						fontSize={{ base: "0.9rem", sm: "1rem" }}
						mt="1rem">
						<Icon
							fontSize={{ base: "0.7rem", sm: "xl", md: "2xl" }}
							mr="0.7rem"
							mt="3px"
							as={MdEmail}
						/>
						<Text>info@sunbifly.com</Text>
					</Flex>
					<Flex
						ml={{ base: "0rem", sm: "4rem", md: "8rem", lg: "10rem" }}
						fontSize={{ base: "0.9rem", sm: "1rem" }}>
						<Icon
							fontSize={{ base: "0.7rem", sm: "xl", md: "2xl" }}
							mr="0.7rem"
							mt="3px"
							as={FaPhoneAlt}
						/>
						<Text>+2348188885290, +2348182666894</Text>
					</Flex>

					<Text
						fontSize={{ base: "0.9rem", sm: "1rem" }}
						mt="1rem"
						textAlign={{ base: "justify", md: "center" }}>
						For fast processing, send the following documents via whatsapp, or
						email (Intl passport data page and Photo passport, visa comes out in
						24hrs ) One month visa #76,000, 3 month visa # 175,000.
					</Text>
				</Flex>
				<Box
					pt={{ base: "2rem", sm: "3rem", md: "4rem" }}
					mx={{ base: "10%", md: "20%" }}
					borderBottom="2px solid #b9b9b9"
				/>
			</Flex>

			<Flex
				minH="25rem"
				mx="10%"
				flexDir={{ base: "column", md: "row" }}
				w="100%"
				py={{ base: "2rem", sm: "3rem", md: "4rem" }}>
				<Flex
					flexDir="column"
					w={{ base: "80%", md: "35%" }}
					fontSize="0.8rem"
					h={{ base: "20rem", sm: "18rem", md: "unset" }}
					pr="3%">
					<Text fontSize="1.8rem">Welcome to Dubai Landing Video</Text>
					<Flex flexDir="column" color="grey" justify="space-evenly" h="100%">
						<Text># Be Our Guest</Text>
						<Text>
							Whether you are visiting as family or with friends or with your
							special someone, Dubai has something magical in store for you!
						</Text>
						<Text>
							Watch this video where Shah Rukh Khan takes you through his Dubai,
							as he visits his favorite spots and shares his unique perspectives
							and experiences.
						</Text>
					</Flex>
				</Flex>
				<Flex
					align="center"
					h={{ base: "20rem", md: "unset" }}
					w={{ base: "80%", md: "45%" }}>
					<ReactPlayer
						style={{
							top: "0",
							left: "0",
						}}
						loop={true}
						controls={true}
						url="https://www.youtube.com/watch?v=6d5d_Jxcxa4"
						width="100%"
						height="100%"
					/>
				</Flex>
			</Flex>

			<Flex flexDir="column" bgColor="#f9f9f9" w="100%" minH="14rem">
				<Flex flexDir="column" w="80%" align="center" mx="10%" my="2rem">
					<Text
						fontSize="1.8rem"
						fontWeight="bold"
						color={COLORS.PRIMARY_COLOR}>
						WHY APPLY THROUGH US?
					</Text>
					<Flex flexDir={{ base: "column", md: "row" }} pt="1rem">
						<Text
							py={{ base: "1rem", md: "none" }}
							px={{ base: "none", md: "5%" }}
							textAlign="center"
							fontWeight="bold"
							borderRight={{
								base: "none",
								md: `1px solid ${COLORS.PRIMARY_COLOR}`,
							}}
							borderBottom={{
								base: `1px solid ${COLORS.PRIMARY_COLOR}`,
								md: "none",
							}}>
							Integration with Emirates portal for quick online application
						</Text>
						<Text
							py={{ base: "1rem", md: "none" }}
							px={{ base: "none", md: "5%" }}
							textAlign="center"
							fontWeight="bold"
							borderRight={{
								base: "none",
								md: `1px solid ${COLORS.PRIMARY_COLOR}`,
							}}
							borderBottom={{
								base: `1px solid ${COLORS.PRIMARY_COLOR}`,
								md: "none",
							}}>
							Trusted by Emirates and the Government of Dubai
						</Text>
						<Text
							py={{ base: "1rem", md: "none" }}
							px={{ base: "none", md: "5%" }}
							textAlign="center"
							fontWeight="bold">
							End-to-End support for a seamless application process
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Text
				w="100%"
				textAlign="center"
				py="0.5rem"
				bgColor="#00305d"
				color="white"
				fontSize={{ base: "0.7rem", md: "0.9rem" }}>
				© Sunblify Dubai Visa 2019. All Rights Reserved
			</Text>
		</ChakraProvider>
	);
};

export default App;
