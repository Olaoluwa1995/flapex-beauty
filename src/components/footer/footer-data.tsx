type LinkProps = {
	key: number;
	title: string;
	url: string;
};

export const websitePagesData: LinkProps[] = [
	{
		key: 1,
		title: "Welcome",
		url: "/",
	},
	{
		key: 2,
		title: "About Us",
		url: "/",
	},
	{
		key: 3,
		title: "Hairdressing",
		url: "/",
	},
	{
		key: 4,
		title: "Pamper Parties",
		url: "/",
	},
	{
		key: 5,
		title: "Online Bookings",
		url: "/",
	},
	{
		key: 6,
		title: "Contact Us",
		url: "/",
	},
	{
		key: 7,
		title: "Online Bookings",
		url: "/",
	},
	{
		key: 8,
		title: "Our Privacy Policy",
		url: "/",
	},
];

type TimeProps = {
	key: number;
	day: string;
	time: string;
};

export const timeData: TimeProps[] = [
	{
		key: 1,
		day: "Monday",
		time: "8am to 8pm",
	},
	{
		key: 2,
		day: "Tuesday",
		time: "8am to 8pm",
	},
	{
		key: 3,
		day: "Wednesday",
		time: "8am to 8pm",
	},
	{
		key: 4,
		day: "Thursday",
		time: "8am to 8pm",
	},
	{
		key: 5,
		day: "Friday",
		time: "8am to 8pm",
	},
	{
		key: 6,
		day: "Saturday",
		time: "7am to 10pm",
	},
	{
		key: 7,
		day: "Sunday",
		time: "3pm to 8pm",
	},
];

type ContactProps = {
	key: number;
	text: string;
};

export const contactData: ContactProps[] = [
	{
		key: 1,
		text: "Park Row Hair and Beauty",
	},
	{
		key: 2,
		text: "20 Bradford Road,",
	},
	{
		key: 3,
		text: "Brighouse,",
	},
	{
		key: 4,
		text: "West Yorkshire.",
	},
	{
		key: 5,
		text: "HD6 1RW",
	},
	{
		key: 6,
		text: "+234 818 005 5097",
	},
	{
		key: 7,
		text: "info@flapex.org",
	},
];
