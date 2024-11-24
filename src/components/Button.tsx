import { ReactNode } from "react";
import "./Button.css";

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
	return (
		<a
			className={`button outside_shadow ${className}`}
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{icon && <img src={icon} alt={alt} />}
			<span>{text}</span>
		</a>
	);
}
