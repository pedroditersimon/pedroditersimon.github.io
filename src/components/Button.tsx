import "./Button.css";
export default function Button({ children, icon, href, alt }) {
	return (
		<a
			className="button outside_shadow"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<img src={icon} alt={alt} />
			<span>{children}</span>
		</a>
	);
}
