import { ReactNode, useState } from "react";
import "./ProjectCard.css";

interface Button {
	text: string;
	icon: string;
	href: string;
}

interface Props {
	children: ReactNode; // content - description
	icon: string;
	title: string;
	tags: string[];
	title_icon: string;
	bottom_icons: string[];
	bottom_buttons?: Button[];
}

export default function ProjectCard({
	children, // content - description
	icon,
	title,
	tags,
	title_icon,
	bottom_icons,
	bottom_buttons,
}: Props) {
	const [hidden, setHidden] = useState(true);

	function toggleVisibility() {
		setHidden((prev) => !prev);
	}

	return (
		<div className={`project_card ${hidden && "hidden"}`}>
			<div
				onClick={toggleVisibility}
				className="card_header primary_text rows_spaced"
			>
				<div className="rows_center">
					<img className="icon" src={icon} alt="none" />
					<span className="title bold">{title}</span>
				</div>
				<div className="rows_center">
					<div className="rows_center less_gap">
						{tags.map((tag) => (
							<span className="tag">{tag}</span>
						))}
					</div>
					<img alt="none" className="small_icon" src={title_icon} />
					<span className="warning_text" style={{ display: "none;" }}>
						Inactivo
					</span>
					<div className="expand_arrow" />
				</div>
			</div>
			<div className="card_content">
				{children}
				<div className="card_bottom space2">
					<div className="rows_center unselectable">
						{bottom_icons.map((icon) => (
							<img alt="none" className="small_icon" src={icon} />
						))}
					</div>
					<div className="rows_spaced">
						{bottom_buttons?.map((btn) => (
							<a
								className="button outside_shadow"
								href={btn.href}
								target="_blank"
								rel="noreferrer"
							>
								<img alt="none" src={btn.icon} />
								<span>{btn.text}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
