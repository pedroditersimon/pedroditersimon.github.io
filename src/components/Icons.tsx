export function Icon({ className, icon, alt }) {
	return (
		<img
			className={className}
			src={icon}
			alt={alt}
			style={{
				width: "calc(2vh + 2vw)",
				objectFit: "contain",
			}}
		/>
	);
}

export function SmallIcon({ className = undefined, icon, alt }) {
	return (
		<img
			className={className}
			src={icon}
			alt={alt}
			style={{
				width: "calc(1vh + 1vw)",
				objectFit: "scale-down",
			}}
		/>
	);
}
