type LinkProps = {
	key: number;
	title: string;
	url: string;
};

export const headerLinksData: LinkProps[] = [
	{
		key: 1,
		title: "Welcome",
		url: "/",
	},
	{
		key: 2,
		title: "About Us",
		url: "/about-us",
	},
	{
		key: 3,
		title: "Hairdressing",
		url: "/hairdressing",
	},
	{
		key: 4,
		title: "Pamper Parties",
		url: "/pamper-parties",
	},
	{
		key: 5,
		title: "Online Bookings",
		url: "/online-bookings",
	},
];

export const completeHeaderLinksData: LinkProps[] = [
	...headerLinksData,
	{
		key: 6,
		title: "Contact Us",
		url: "/contact-us",
	},
	{
		key: 7,
		title: "Website Terms & Conditions",
		url: "/terms",
	},
	{
		key: 8,
		title: "Our Privacy Policy",
		url: "/privacy",
	},
];
