import { ReactNode, useState } from "react";

// components
import { SmallIcon } from "src/components/Icons";

// types
import { BorderStyle } from "src/types";

// styles
import "src/styles/Button.css";

export interface Props {
	text: string;
	href?: string;
	icon?: string;
	icon_border?: BorderStyle;
	alt?: string;
	onClick?: () => void;
	className?: string;
}

export default function Button({
	text,
	href,
	icon,
	icon_border,
	alt,
	onClick,
	className,
}: Props) {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<div
			className={`button-wrapper ${isPressed && "pressed"} outside_shadow`}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseLeave={() => setIsPressed(false)}
		>
			<a
				className={`button ${className}`}
				href={href}
				target="_blank"
				rel="noreferrer"
			>
				{icon && <SmallIcon icon={icon} alt={alt} border={icon_border} />}
				<span>{text}</span>
			</a>
		</div>
	);
}
