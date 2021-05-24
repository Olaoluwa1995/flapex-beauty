import React from "react";
import "./App.css";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";

import { customTheme } from "./styles/theme";
import WelcomePage from "./pages/welcome/welcome";
import AboutUsPage from "./pages/about-us/about-us";
import HairdressingPage from "./pages/hairdressing/hairdressing";
import OnlineBookingsPage from "./pages/online-bookings/online-bookings";
import PamperPartiesPage from "./pages/pamper-parties/pamper-parties";

const App = () => {
	return (
		<ChakraProvider theme={{ ...theme, ...customTheme }}>
			<CSSReset />
			<Switch>
				<Route exact path="/" component={WelcomePage} />
				<Route exact path="/about-us" component={AboutUsPage} />
				<Route exact path="/hairdressing" component={HairdressingPage} />
				<Route exact path="/online-bookings" component={OnlineBookingsPage} />
				<Route exact path="/pamper-parties" component={PamperPartiesPage} />
			</Switch>
		</ChakraProvider>
	);
};

export default App;
