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
import { MdEmail, MdAddLocation } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import BannerImage from "./assets/images/dubai-banner.jpeg";
import Covid19Update from "./Covid-19-Update";
import { visaOptions } from "./VisaOption-data";
import VisaOption from "./VisaOption";

const App = () => {
	return (
		<ChakraProvider theme={{ ...theme, ...customTheme }}>
			<CSSReset />
			<Container
				px="15px"
				d="flex"
				justifyContent="center"
				maxW={{ base: "300px", md: "500px", lg: "600px" }}>
				<Box textAlign="center" py="20px" w={{ base: "90%", md: "60%" }}>
					<Image
						w="100%"
						src="https://www.dubaivisa.net/images/dvpc-logo.png"
						alt="header"
					/>
				</Box>
			</Container>
			<Image w="100%" src={BannerImage} alt="banner" />
			<Flex bgColor="#f9f9f9" flexDir="column" px="10%" pb="2rem">
				<Text
					color="red"
					fontWeight="bold"
					textAlign={{ base: "center", md: "justify" }}
					fontSize={{ base: "3xl", md: "4xl" }}
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
							style={{ color: "red" }}
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
							style={{ color: "red" }}
							href="https://c.ekstatic.net/ecl/documents/dubai-arrivals-quarantine-procedure-declaration-form.pdf">
							here
						</a>{" "}
						to download.
					</Covid19Update>
					<Covid19Update>
						For booking PCR test through authorized centre please visit{" "}
						<a style={{ color: "red" }} href="/">
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
							style={{ color: "red" }}
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
					fontSize={{ base: "1.3rem", md: "1.5rem", lg: "1.8rem" }}>
					CHOOSE FROM A{" "}
					<Box as="span" color="red">
						RANGE
					</Box>{" "}
					OF{" "}
					<Box as="span" color="red">
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
					fontSize="2.2rem"
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
							<Box as="span" color="red" textTransform="uppercase">
								Step 1:
							</Box>{" "}
							Book your ticket with Emirates
						</Text>
						<Flex fontSize="1.2rem" my="2rem">
							<Icon fontSize="2xl" mr="0.7rem" mt="3px" as={FaHandPointRight} />
							<Text>
								Once you have a valid PNR number, log on to{" "}
								<Box color="red" as="span">
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
							<Box as="span" color="red" textTransform="uppercase">
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
							<Box as="span" color="red" textTransform="uppercase">
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
						bgColor="red"
						color="white"
						as="a"
						target="_blank"
						rel="noreferrer"
						href="https://www.emirates.com/ng/english/"
						_focus={{ border: "none", bgColor: "red" }}>
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
				<Text fontSize="1.8rem" fontWeight="bold" color="red">
					Contact Us
				</Text>
				<Flex flexDir="column" align="center" color="grey" pt={{base: "1rem", md: "2rem"}}>
					<Flex fontSize={{ base: "0.9rem", sm: "1rem", md: "1.2rem"}}>
						<Icon fontSize={{base: "xl", md: "2xl"}} mr="0.7rem" mt="3px" as={FaPhoneAlt} />
						<Text>+2348188885290, +2348094266759</Text>
					</Flex>
					<Flex fontSize={{ base: "0.9rem", sm: "1rem", md: "1.2rem"}} mt="1rem">
						<Icon fontSize={{base: "xl", md: "2xl"}} mr="0.7rem" mt="3px" as={MdEmail} />
						<Text>info@sunbifly.com</Text>
					</Flex>
					<Flex fontSize={{ base: "0.9rem", sm: "1rem", md: "1.2rem"}} mt="1rem">
						<Icon fontSize={{base: "xl", md: "2xl"}} mr="0.1rem" mt="3px" as={MdAddLocation} />
						<Text>
							Suite A5, Aderoke Plaza, Dopemu Underbridge, Akowonjo Roundabout,
							Lagos, Nigeria.
						</Text>
					</Flex>
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
					<Text fontSize="1.8rem">SRK's Personal Invitation to Dubai</Text>
					<Flex flexDir="column" color="grey" justify="space-evenly" h="100%">
						<Text>#BeMyGuest</Text>
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
					<Text fontSize="1.8rem" fontWeight="bold" color="red">
						WHY APPLY THROUGH DVPC?
					</Text>
					<Flex flexDir={{ base: "column", md: "row" }} pt="1rem">
						<Text
							py={{ base: "1rem", md: "none" }}
							px={{ base: "none", md: "5%" }}
							textAlign="center"
							fontWeight="bold"
							borderRight={{ base: "none", md: "1px solid red" }}
							borderBottom={{ base: "1px solid red", md: "none" }}>
							Integration with Emirates portal for quick online application
						</Text>
						<Text
							py={{ base: "1rem", md: "none" }}
							px={{ base: "none", md: "5%" }}
							textAlign="center"
							fontWeight="bold"
							borderRight={{ base: "none", md: "1px solid red" }}
							borderBottom={{ base: "1px solid red", md: "none" }}>
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
				<Text
					fontSize="0.7rem"
					px="1rem"
					textAlign={{ base: "center", md: "start" }}>
					* This service is exclusively applicable for Emirates and Fly Dubai
					passengers only
				</Text>
			</Flex>
			<Text
				w="100%"
				textAlign="center"
				py="0.5rem"
				bgColor="#00305d"
				color="white"
				fontSize={{ base: "0.7rem", md: "0.9rem" }}>
				© VFS Global 2019. All Rights Reserved
			</Text>
		</ChakraProvider>
	);
};

export default App;
