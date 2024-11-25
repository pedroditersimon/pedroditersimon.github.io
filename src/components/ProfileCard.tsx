import React from "react";
import "./ProfileCard.css";
import type { Profile } from "src//types";

import { Icon } from "./Icons";

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
