import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderContent from "./header-content.component";

const Header = () => {
	return (
		<>
			<Box zIndex={5} as="header" bgColor="white" position="fixed" width="100%">
				<HeaderContent />
			</Box>
		</>
	);
};

export default Header;
