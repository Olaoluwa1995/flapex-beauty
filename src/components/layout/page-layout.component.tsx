import React from "react";

import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";

const PageLayout: React.FC<any> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default PageLayout;
