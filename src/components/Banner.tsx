import me_logo from "../assets/me.png";
import { Profile } from "../types";
import "./Banner.css";

export default function Banner({ icon, name, description }: Profile) {
	return (
		<div id="banner" className="inside_shadow only_show_desktop">
			<div className="banner_content">
				<img className="outside_shadow unselectable" src={icon} alt="Profile" />

				<div className="banner_text">
					<h1>{name}</h1>
					<p className="primary_text">{description}</p>
				</div>
			</div>
		</div>
	);
}
