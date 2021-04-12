export type Option = {
	key: number;
	numberOfDays: number;
	status: string;
	title: string;
	showRightBorder: boolean;
	showIcon: boolean;
};

export const visaOptions: Option[] = [
	{
		key: 1,
		numberOfDays: 2,
		status: "Pre-approved",
		title: "Transit Visa",
		showRightBorder: true,
		showIcon: true,
	},
	{
		key: 2,
		numberOfDays: 4,
		status: "Point-to-point",
		title: "Transit Visa",
		showRightBorder: true,
		showIcon: true,
	},
	{
		key: 3,
		numberOfDays: 30,
		status: "Single / Multiple entry",
		title: "Tourist Visa",
		showRightBorder: true,
		showIcon: false,
	},
	{
		key: 4,
		numberOfDays: 90,
		status: "Single / Multiple entry",
		title: "Tourist Visa",
		showRightBorder: false,
		showIcon: false,
	},
];
