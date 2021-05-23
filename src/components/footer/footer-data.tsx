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
		time: "Closed",
	},
	{
		key: 2,
		day: "Tuesday",
		time: "9.00 - 17.30",
	},
	{
		key: 3,
		day: "Wednesday",
		time: "9.00 - 17.30",
	},
	{
		key: 4,
		day: "Thursday",
		time: "9.00 - 20.00",
	},
	{
		key: 5,
		day: "Friday",
		time: "9.00 - 18.00",
	},
	{
		key: 6,
		day: "Saturday",
		time: "8.30 - 16.00",
	},
	{
		key: 7,
		day: "Sunday",
		time: "Closed",
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
		text: "01484 722220",
	},
	{
		key: 7,
		text: "park-row@hotmail.com",
	},
];
