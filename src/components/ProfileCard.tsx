import React from "react";
import "./ProfileCard.css";
import type { Profile } from "../types";

import { Icon } from "./Icons";

export default function ProfileCard({ icon, name, description }: Profile) {
	return (
		<div className="profile_card">
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
		</div>
	);
}
