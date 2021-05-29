import React from "react";
import { Box } from "@chakra-ui/react";

import "./header.css";
import HeaderContent from "./header-content.component";

const WelcomeHeader: React.FC = () => {
	const [scroll, setScroll] = React.useState(window.scrollY);
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		console.log(window.pageYOffset);
		const onScroll = () => {
			setVisible(window.scrollY > scroll);
			setScroll(window.scrollY);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			{visible && (
				<Box
					zIndex={5}
					as="header"
					className="header"
					bgColor="white"
					position="fixed"
					width="100%">
					<HeaderContent />
				</Box>
			)}
		</>
	);
};

export default WelcomeHeader;
