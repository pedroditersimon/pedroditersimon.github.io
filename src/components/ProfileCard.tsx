// components
import { Icon } from "src/components/Icons";

// types
import type { Profile } from "src/types";

// styles
import "src/styles/ProfileCard.css";

interface Props extends Profile {
	href?: string;
}

export default function ProfileCard({ icon, name, description, href }: Props) {
	return (
		<a className="profile_card" href={href}>
			<Icon
				className="outside_shadow unselectable"
				icon={icon}
				alt="profile card"
			/>
			<div className="profile_text unselectable">
				<h2>{name}</h2>
				<p>
					<strong>{description}</strong>
				</p>
			</div>
		</a>
	);
}
