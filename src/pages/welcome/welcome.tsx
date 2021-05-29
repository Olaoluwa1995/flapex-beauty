import React from "react";

import "./welcome.css";
import WelcomeHeader from "../../components/header/welcome-header-component";
import Footer from "../../components/footer/footer-component";
import Banner from "../../components/welcome-page/banner";
import SafetyMeasure from "../../components/welcome-page/safety-measures";
import WelcomeNote from "../../components/welcome-page/welcome-note";
import OfferSection from "../../components/welcome-page/offer-section";
import AnnouncementSection from "../../components/welcome-page/announcement-section";
import TestimonialSection from "../../components/welcome-page/testimonials";
import AboutYouSection from "../../components/welcome-page/about-you-section";
import Location from "../../components/welcome-page/location";

const WelcomePage = () => {
	return (
		<>
			<WelcomeHeader />
			<Banner />
			<SafetyMeasure />
			<WelcomeNote />
			<OfferSection />
			<AnnouncementSection />
			<TestimonialSection />
			<AboutYouSection />
			<Location />
			<Footer />
		</>
	);
};

export default WelcomePage;
