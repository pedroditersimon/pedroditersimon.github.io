import { ReactNode } from "react";

// components
import { SmallIcon } from "src/components/Icons";

// icons
import link_logo from "src/assets/link.png";

interface Props {
	children: ReactNode;
	href: string;
	icon?: string;
}

export default function Link({ children, href, icon }: Props) {
	return (
		<a
			href={href}
			target="_blank"
			className="hint_text"
			rel="noreferrer"
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<SmallIcon icon={icon ? icon : link_logo} alt="" />
			<span style={{ marginLeft: "0.5vw" }}>{children}</span>
		</a>
	);
}
