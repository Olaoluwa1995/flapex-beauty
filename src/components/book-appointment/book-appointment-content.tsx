import React from "react";
import { Flex, Text, Box, useToast } from "@chakra-ui/react";
import Aos from "aos";
import { useHistory } from "react-router-dom";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";

import { COLORS } from "../../styles/theme";
import { send, init } from "emailjs-com";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	date: string;
	phoneNumber: string;
	message: string;
};

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	phoneNumber: Yup.string().required("Phone Number is required"),
	date: Yup.string().required("Date is required"),
	email: Yup.string()
		.required("Email is required")
		.email("Enter a valid email"),
	message: Yup.string().required("Your message is required"),
});

const Content = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1500, once: true });
		init("user_hBb0wUB7I44QyMgMHa7g5");
	}, []);

	const initialValues: FormValues = {
		firstName: "",
		lastName: "",
		email: "",
		date: "",
		phoneNumber: "",
		message: "",
	};

	const [isLoading, setIsLoading] = React.useState(false);

	const toast = useToast();
	const history = useHistory();

	const handleSubmit = (values: FormValues) => {
		console.log("submitted");
		setIsLoading(true);
		const toSend = {
			from_name: values.firstName,
			contact_number: values.phoneNumber,
			from_email: values.email,
			reply_to: values.email,
			message: `
				${values.firstName} ${values.lastName} with phone number ${values.phoneNumber} & email address ${values.email} just booked an appointment on ${values.date} with purpose: ${values.message}
			`,
		};
		send("service_bkywfii", "template_db3vrmb", toSend)
			.then((response) => {
				setIsLoading(false);
				toast({
					status: "success",
					title: "Appointment Success",
					description: "You've successfully booked an appointment!",
					duration: 3000,
				});
				history.push("/");
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				setIsLoading(false);
				toast({
					status: "error",
					title: "Error",
					description: err.text + "!",
					duration: 3000,
				});
				console.log("FAILED...", err);
			});
	};

	return (
		<>
			<Flex
				w="100%"
				px={{ base: "5%", md: "10%", lg: "15%" }}
				fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
				pt={{ base: "8rem", md: "10rem", lg: "12rem" }}
				bgColor="white">
				<Flex flexDir="column" w="100%">
					<Text
						color={COLORS.PRIMARY_COLOR}
						fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}>
						Book Appointment
					</Text>
					<Flex
						w="100%"
						flexDir="column"
						minH="20rem"
						mt={{ base: "1rem", lg: "2rem" }}>
						<Formik
							onSubmit={handleSubmit}
							initialValues={initialValues}
							validationSchema={validationSchema}>
							{({ handleSubmit }: any) => (
								<Box
									as="form"
									mx="auto"
									px={{ base: "10%", md: "5%" }}
									maxW="520px"
									w="100%"
									minH="50vh"
									onSubmit={handleSubmit}
									d="flex"
									flexDir="column">
									<Field name="firstName">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													h="3rem"
													isRequired
													formControlProps={{ my: { base: 2 } }}
													placeholder="First Name"
												/>
											);
										}}
									</Field>

									<Field name="lastName">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													h="3rem"
													isRequired
													formControlProps={{ my: { base: 2 } }}
													placeholder="Last Name"
												/>
											);
										}}
									</Field>

									<Field name="email">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													type="email"
													h="3rem"
													isRequired
													formControlProps={{
														my: { base: 2 },
													}}
													placeholder="Email Address"
												/>
											);
										}}
									</Field>

									<Field name="date">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													type="date"
													h="3rem"
													isRequired
													formControlProps={{
														my: { base: 2 },
													}}
													placeholder="Appointment Date"
												/>
											);
										}}
									</Field>

									<Field name="phoneNumber">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													h="3rem"
													type="tel"
													isRequired
													formControlProps={{ my: { base: 2 } }}
													placeholder="Phone Number"
												/>
											);
										}}
									</Field>

									<Field name="message">
										{({ field, form }: FieldProps) => {
											const { name } = field;
											const { errors, touched } = form;

											return (
												<FormInput
													{...field}
													error={errors[name]}
													isTouched={touched[name]}
													h="3rem"
													isRequired
													formControlProps={{ my: { base: 2 } }}
													placeholder="Write your booking message"
												/>
											);
										}}
									</Field>

									<CustomButton
										textTransform="capitalize"
										maxW="100%"
										fontWeight="700"
										type="submit"
										fontSize="1rem"
										mt="3rem"
										isLoading={isLoading}>
										Book Appointment
									</CustomButton>
								</Box>
							)}
						</Formik>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Content;
