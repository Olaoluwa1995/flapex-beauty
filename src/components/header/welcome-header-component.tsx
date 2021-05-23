import React from "react";
import { Box } from "@chakra-ui/react";

import Header from "./header-component";
import "./header.css";
import { COLORS } from "../../styles/theme";

const WelcomeHeader: React.FC = () => {
	const [scroll, setScroll] = React.useState(window.scrollY);
	const [visible, setVisible] = React.useState(false);
	console.log(window.pageYOffset);

	React.useEffect(() => {
		// if (window.pageYOffset > 200) {
		// 	console.log("scrolled");
		// 	setVisible(true);
		// } else {
		// 	setVisible(false);
		// }
		const onScroll = () => {
			setVisible(window.scrollY > scroll);
			setScroll(window.scrollY);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scroll]);

	return <>{visible && <Header animate={true} />}</>;
};

export default WelcomeHeader;
