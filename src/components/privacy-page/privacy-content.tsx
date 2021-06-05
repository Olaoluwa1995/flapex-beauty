import React from "react";
import {
	Flex,
	Text,
	Box,
	Image,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import Aos from "aos";

import PageImage from "../../assets/images/privacy-page/privacy-image.jpg";
import { COLORS } from "../../styles/theme";
import { topics } from "./privacy-data";

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);
	return (
		<>
			<Flex
				w="100%"
				justify="space-between"
				px="15%"
				pt="12rem"
				bgColor="white">
				<Flex flexDir="column" w="100%">
					<Text color={COLORS.PRIMARY_COLOR} fontSize="2rem">
						Our Privacy Policy
					</Text>
					<Flex w="100%" minH="35rem" mt="0.4rem" justify="space-between">
						<Flex mt="2rem" flexDir="column" w="40%">
							<Text textDecoration="underline" fontSize="20">
								INTRODUCTION
							</Text>
							<Text mt="0.5rem">
								This privacy notice explains how Flapex Beauty Ltd looks after
								personal information you give us or that we learn by having you
								as a client and the choices you make about marketing
								communications you agree we may send you.
							</Text>
							<Text mt="1rem">
								This notice explains how we do this and tells you about your
								privacy rights and how the law protects you.
							</Text>
							<Flex w="100%" flexDir="column" mt="2rem">
								<Text textDecoration="underline" fontSize="20">
									TOPICS
								</Text>

								<UnorderedList mt="0.5rem">
									{topics.map((topic: any) => (
										<ListItem mt="0.2rem" key={topic.key}>
											{topic.text}
										</ListItem>
									))}
								</UnorderedList>
							</Flex>
						</Flex>
						<Image
							src={PageImage}
							w="55%"
							h="60%"
							boxShadow="0 8px 8px 0 gray"
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" px="15%" w="85%" bgColor="white">
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
						WHAT INFORMATION WE COLLECT ABOUT YOU
					</Text>
					<Text mt="1rem">
						We collect information about you when you book an appointment for a
						service or treatment, visit the salon or barbershop for a service or
						treatment, buy a product or apply for a job, whether contact is
						online, on paper, by email or over the phone.
					</Text>
					<Text mt="1rem">
						The information you give us may include your name, address, email
						address, phone number, relevant history which may suggest that a
						service or treatment should not go ahead or certain products should
						not be used (eg allergies, pregnancy, skin conditions), payment and
						transaction information, IP address and CVs.
					</Text>
					<Text mt="1rem">
						For clients under the age of 16, we will only keep and use their
						personal information with the consent of a parent, carer or
						guardian.
					</Text>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
						HOW INFORMATION ABOUT YOU WILL BE USED
					</Text>
					<Text mt="1rem">
						In law, we are allowed to use personal information, including
						sharing it outside the salon/ barbershop, only if we have a proper
						reason to do so, for example:
					</Text>
					<UnorderedList my="1.2rem">
						<ListItem>
							To fulfil a contract with you ie to provide the service or
							treatment you have requested and to communicate with you about
							your appointments
						</ListItem>
                        <ListItem>When it is in our legitimate interest ie there is a business or commercial reason to do so, unless this is outweighed by your rights or interests</ListItem>
                        <ListItem>When you consent to it: we will always ask for your consent to hold and use health and medical information.</ListItem>
					</UnorderedList>
					<Text>We may therefore share your information with:</Text>
                    <UnorderedList my="1.2rem">
                        <ListItem>Salon Advantage System</ListItem>
                        <ListItem>Suppliers of our website Alan Rogers, Customology</ListItem>
                    </UnorderedList>
                    <Text>We have rigorous data protection and security policies in place with all our suppliers.</Text>
                    <Text mt="1.2rem">We will not share your information with any other third party without your consent except to help prevent fraud, or if required to do so by law.</Text>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    MARKETING
					</Text>
					<Text mt="1rem">
                    We would like to send you information about products and services which may be of interest to you.  We will ask for your consent to receive marketing information.
					</Text>
					<Text mt="1rem">
                    If you have consented to receive marketing, you may opt-out at a later date.
					</Text>
					<Text mt="1rem">
                    You have the right at any time to stop us from contacting you for marketing purposes or giving your information to third party suppliers of products or services.  If you no longer wish to be contacted for marketing purposes, please contact Janet Brunskill, Park Row Hair & Beauty Ltd, 20 Bradford Road, Brighouse, West Yorkshire HD6 1RW.
					</Text>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    EMPLOYMENT
					</Text>
					<Text mt="1rem">
                    The information we collect about employees, the purposes it is used for and who it will be shared with is set out in our employment contracts and employee handbook.
					</Text>
				</Flex>
				<Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    HOW LONG YOUR INFORMATION WILL BE KEPT FOR
					</Text>
					<Text mt="1rem">
                    Unless you request otherwise, we will keep your information to contact you for a maximum of 1 year from your last visit to the salon. 
					</Text>
					<Text mt="1rem">
                    After a year we will delete all your personal information, except for your name, relevant client history (eg allergy test records which we keep for 4 years) and financial transactions (which we are obliged to keep for 6 years).					
                    </Text>
					<Text mt="1rem">
                    Information about unsuccessful job applicants will be deleted after four months.					
                    </Text>
					<Text mt="1rem">
                    See our data retention policy for further information, including employee data.                    
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    WHERE YOUR INFORMATION IS KEPT
					</Text>
					<Text mt="1rem">
                    Your information is stored within the European Economic Area on secure servers provided by Park Row Hair & Beauty Ltd. Any payment transactions are encrypted. Sending information via the internet is not completely secure, although we will do our best to protect your information and prevent unauthorised access.					
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    ACCESS TO YOUR INFORMATION AND CORRECTION
					</Text>
					<Text mt="1rem">
                    You have the right to request a copy of the personal information that we hold about you. This will normally be free, unless we consider the request to be unfounded or excessive, in which case we may charge a fee to cover our administration costs. 					</Text>
					<Text mt="1rem">
                    If you would like a copy of some or all of your personal information, please contact Janet Brunskill, Park Row Hair & Beauty Ltd, 20 Bradford Road, Brighouse, West Yorkshire HD6 1RW.                    </Text>
					<Text mt="1rem">
                    We want to make sure that your personal information is accurate and up-to-date.  You may ask us to correct or remove information you think is inaccurate.                    </Text>
					<Text mt="1rem">
                    You have the right to ask us to object to our use of your personal information, or to ask us to delete, remove or stop using your personal information if there is no need for us to keep it.                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    OTHER WEBSITES
					</Text>
					<Text mt="1rem">
                    Our website includes links to other websites. This privacy notice only applies to this website so when you link to other websites you should read their own privacy notices.
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    CHANGES TO OUR PRIVACY NOTICE
					</Text>
					<Text mt="1rem">
                    We keep our privacy notice under regular review and we will place any updates on this web page. This privacy notice was last updated on 09/05/2018
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    HOW TO CONTACT US
					</Text>
					<Text mt="1rem">
                    Please contact us if you have any questions about our privacy notice or information we hold about you:
                    </Text>
                    <UnorderedList my="1.2rem">
                        <ListItem>By email <Box as="span" color={COLORS.PRIMARY_COLOR}>flapex@hotmail.com</Box></ListItem>
                        <ListItem>Or write to us at Janet Brunskill, Flapex Beauty Ltd, 20 Bradford Road, Brighouse, HD6 1RW.</ListItem>
                    </UnorderedList>
                    <Text mt="1rem">
                    You also have the right to complain to the Information Commissioner’s Office. Find out on their website how to report a concern: <Box as="span" color={COLORS.PRIMARY_COLOR}>www.ico.org.uk/concerns/handling</Box>
                    </Text>
				</Flex>
                <Text mt="4rem" color={COLORS.PRIMARY_COLOR} fontSize="2rem">
                Data Rention Policy
				</Text>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    INTRODUCTION
					</Text>
					<Text mt="1rem">
                    This policy sets out what information Park Row Hair & Beauty Ltd holds, how long we hold it for and when it will be deleted.
                    </Text>
                    <Text mt="1rem">
                    It also covers the procedure to follow regarding data requests.
                    </Text>
                    <UnorderedList mb="1.2rem">
                        <ListItem>Information held by us</ListItem>
                        <ListItem>How long is personal data held for?</ListItem>
                        <ListItem>Where is personal data held?</ListItem>
                        <ListItem>How is personal data deleted?</ListItem>
                        <ListItem>Access to personal information, correction and deletion</ListItem>
                    </UnorderedList>
                    <Text mt="1rem">
                    You also have the right to complain to the Information Commissioner’s Office. Find out on their website how to report a concern: <Box as="span" color={COLORS.PRIMARY_COLOR}>www.ico.org.uk/concerns/handling</Box>
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    INFORMATION HELD BY US
					</Text>
                    <Text mt="1rem">
                    We hold personal information about:
                    </Text>
                    <UnorderedList mb="1.2rem">
                        <ListItem>Clients</ListItem>
                        <ListItem>Former clients and prospective clients</ListItem>
                        <ListItem>Employees</ListItem>
                        <ListItem>Job applicants</ListItem>
                    </UnorderedList>
                    <Text mt="1rem">
                    We also hold information about financial transactions relating to these eg services or treatments provided, products bought, payroll information.
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    HOW LONG IS PERSONAL DATA HELD FOR
					</Text>
                    <Text mt="1rem">
                    We aim not to hold personal data longer than necessary.
                    </Text>
                    <Text mt="1rem">
                    Unless requested by an individual, the following types of data will be held for the periods shown below, after which it will be securely deleted or destroyed:
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    TYPE OF INFORMATION & RETENTION PERIOD
					</Text>
                    <Text mt="1rem">
                    Client general records – 12 months after last visit
                    </Text>
                    <Text mt="1rem">
                    Client health records – 4 years after last visit
                    </Text>
                    <Text mt="1rem">
                    Financial transactions, invoices and supplier details – 6 years
                    </Text>
                    <Text mt="1rem">
                    Employee records, contracts of employment, changes to terms and conditions, annual leave, training records – While employment continues and up to 6 years after employment ends
                    </Text>
                    <Text mt="1rem">
                    Payroll and wage records including PAYE, income tax, national insurance, sick pay, redundancy payments – 6 years from the financial year-end in which payments were made
                    </Text>
                    <Text mt="1rem">
                    Maternity records – 3 years after the end of the tax year in which the maternity pay period ends
                    </Text>
                    <Text mt="1rem">
                    Job applications (unsuccessful) – 4 months after notifying unsuccessful candidates
                    </Text>
                    <Text mt="1rem">
                    Emails – One year from the end of the month in which they were received or sent unless a longer period is relevant as above
                    </Text>
                    <Text mt="1rem">
                    Emails to and from ex-employees or contractors will be deleted within 2 weeks of them leaving unless these form part of the employment record – see above
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    WHERE IS PERSONAL DATA HELD
					</Text>
                    <Text mt="1rem">
                    Personal data about clients, financial transactions and employees are held on our secure salon software system which is backed up every day or held in secure electronic files electronically which can be accessed only by Janet Brunskill.
                    </Text>
                    <Text mt="1rem">
                    Paper records are held in a locked cabinet or room or in secure archive storage.
                    </Text>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    HOW IS PERSONAL DATA DELETED
					</Text>
                    <Text mt="1rem">
                    Personal data is permanently deleted in accordance with the retention periods listed above from:
                    </Text>
                    <UnorderedList>
                        <ListItem>Salon software system</ListItem>
                        <ListItem>Electronic files</ListItem>
                        <ListItem>Emails</ListItem>
                        <ListItem>Paper records, which are securely shredded</ListItem>
                    </UnorderedList>
				</Flex>
                <Flex w="100%" flexDir="column" mt="3rem">
					<Text textDecoration="underline" fontSize="20">
                    ACCESS TO PERSONAL INFORMATION, CORRECTION AND DELETION
					</Text>
                    <Text mt="1rem">
                    See our privacy notice above.
                    </Text>
                    <Text mt="1rem">
                    All requests for access to personal information will be handled by Janet Brunskill.
                    </Text>
                    <Text mt="1rem">
                    Responses to requests will be made within 30 days.
                    </Text>
                    <Text mt="1rem">
                    All information relating to the individual will be compiled into a report and collected from:
                    </Text>
                    <UnorderedList>
                        <ListItem>Salon software system</ListItem>
                        <ListItem>Financial transactions</ListItem>
                        <ListItem>Emails</ListItem>
                        <ListItem>Other electronic records</ListItem>
                        <ListItem>Paper records (where applicable)</ListItem>
                    </UnorderedList>
                    <Text mt="1rem">Date completed… 09/05/2018</Text>
				</Flex>
			</Flex>
		</>
	);
};

export default Content;
