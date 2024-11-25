import me_logo from "src/assets/me.png";
import { Profile } from "src/types";
import "./Banner.css";

interface Props extends Profile {
	secondName?: string;
	className?: string;
}

export default function Banner({
	className,
	icon,
	name,
	secondName,
	description,
}: Props) {
	return (
		<div id="banner" className={`inside_shadow ${className}`}>
			<div className="banner_content">
				<img className="outside_shadow unselectable" src={icon} alt="Profile" />

				<div className="banner_text">
					<h1>{name}</h1>
					{secondName && <h1>{secondName}</h1>}
					<p className="primary_text">{description}</p>
				</div>
			</div>
		</div>
	);
}
