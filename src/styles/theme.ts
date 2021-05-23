import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

export const COLORS = {
	// PRIMARY_COLOR: "#7d053f",
	PRIMARY_COLOR: "purple",
	DEEP_BLUE: "#212353",
	WHITE: "#ffffff",
	GREY_COLOR: "#808080",
	BACKGROUND_COLOR: "#fdfdfd",
};

export const BoxShadow = "0 3px 15px 0 grey";
export const BorderRadius = "5px";

const STYLES: Styles = {
	global: {
		"*": {
			boxSizing: "border-box",
		},

		html: {
			minH: "100%",
			overflowX: "hidden",
		},

		body: {
			display: "flex",
			flexDir: "column",
			overflowX: "hidden",
			color: "blackAlpha.800",
			fontSize: "1.2rem",

			"#root": {
				"* .roboto": {
					fontFamily: "'Poppins', sans-serif",
				},
			},
		},

		"#root": {
			minH: "100vh",
			display: "flex",
			flexDirection: "column",
			width: "100%",
			pos: "relative",

			"*": {
				fontFamily: "'Poppins'",
			},
		},
	},
};

export const customTheme = extendTheme({
	styles: STYLES,
	colors: COLORS,
});
