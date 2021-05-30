type Term = {
	key: number;
	text: string;
};

export const terms: Term[] = [
	{
		key: 1,
		text: "The content of the pages of this website is for your general information & use only. It is subject to change without notice.",
	},
	{
		key: 2,
		text: "This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: Your IP Address, your country of access, your time spent on our website, content you have viewed.",
	},
	{
		key: 3,
		text: "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information & materials found or offered on this website for any particular purpose. You acknowledge that such information & materials may contain inaccuracies or errors & we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
	},
	{
		key: 4,
		text: "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.",
	},
	{
		key: 5,
		text: "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance & graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms & conditions.",
	},
	{
		key: 6,
		text: "All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.",
	},
	{
		key: 7,
		text: "Unauthorised use of this website may give rise to a claim for damages & or be a criminal offence.",
	},
	{
		key: 8,
		text: "From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
	},
	{
		key: 9,
		text: "Your use of this website & any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland & Wales.",
	},
];

type Notice = {
    key: number;
    text: string;
}

export const notices: Notice[] = [
    {
        key: 1,
        text: "You may print or download to a local hard disk extracts for your personal & non-commercial use only"
    },
    {
        key: 2,
        text: "You may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material"
    },
    {
        key: 3,
        text: "You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system."
    }
]
