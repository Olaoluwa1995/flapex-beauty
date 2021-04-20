import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Option } from "./VisaOption-data";
import { COLORS } from "./styles/theme";

type VisaOptionProps = {
	option: Option;
};

const VisaOption: React.FC<VisaOptionProps> = ({ option }) => {
	return (
		<Flex
			color={`${COLORS.PRIMARY_COLOR}`}
			justify="center"
			w={{ base: "100%", md: "25%" }}
			h="100%"
			mt="3%"
			flexDir="column"
			pb={{ base: "1rem", md: "none" }}
			borderRight={
				option.showRightBorder === true
					? { base: "none", md: "1px dashed black" }
					: "none"
			}
			borderBottom={
				option.showRightBorder === true
					? { base: "1px dashed black", md: "none" }
					: "none"
			}>
			<Text fontSize="4rem" lineHeight="1">
				{option.numberOfDays}
			</Text>
			<Text fontSize="1.3rem" fontWeight="bold">
				Days
			</Text>
			<Text color="black" fontSize="1.2rem">
				{option.status}
			</Text>
			<Text fontSize="1.3rem" fontWeight="bold">
				{option.title}
				{option.showIcon === true && (
					<sup>
						<Icon color="black" as={AiOutlineInfoCircle} />
					</sup>
				)}
			</Text>
		</Flex>
	);
};

export default VisaOption;
