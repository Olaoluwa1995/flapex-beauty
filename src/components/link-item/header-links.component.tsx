import React from "react";
import LinkItem from "./link-item.component";
import { LinkBoxProps } from "@chakra-ui/react";

export interface NavLinkItemProps {
	url?: any;
	children: any;
}
export type NavLinkProps = NavLinkItemProps & LinkBoxProps;
const NavLinkItem: React.FC<NavLinkProps> = ({
	children,
	url,
	...otherProps
}) => {
	return (
		<LinkItem
			fontWeight="600"
			fontSize={{ base: "0.7rem", md: "0.8rem", lg: "0.9rem", xl: "1rem" }}
			isAnchor={false}
			isLink={false}
			url={url}
			{...otherProps}>
			{children}
		</LinkItem>
	);
};

export default React.memo(NavLinkItem);
