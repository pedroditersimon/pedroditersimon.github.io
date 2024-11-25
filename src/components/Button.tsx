import { ReactNode, useState } from "react";
import "src/styles/Button.css";

export interface Props {
	text: string;
	href?: string;
	icon?: string;
	alt?: string;
	onClick?: () => void;
	className?: string;
}

export default function Button({
	text,
	href,
	icon,
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
				{icon && <img src={icon} alt={alt} />}
				<span>{text}</span>
			</a>
		</div>
	);
}
