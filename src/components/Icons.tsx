import { borders } from "../consts";

interface Props {
	className?: string;
	icon: string;
	alt: string;
	border?: keyof typeof borders;
}

export function Icon({ className, icon, alt, border = "circle" }: Props) {
	return (
		<img
			className={className}
			src={icon}
			alt={alt}
			style={{
				width: "calc(2vh + 2vw)",
				objectFit: "contain",
				borderRadius: borders[border],
			}}
		/>
	);
}

export function SmallIcon({ className, icon, alt, border = "circle" }: Props) {
	return (
		<img
			className={className}
			src={icon}
			alt={alt}
			style={{
				width: "calc(1vh + 1vw)",
				objectFit: "scale-down",
				borderRadius: borders[border],
			}}
		/>
	);
}
