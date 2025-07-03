import { ReactNode, useEffect, useState } from "react";

// types
import type { IconType, Tag, Button as ButtonType } from "src/types";

// components
import Badge from "src/components/Badge";
import { Icon, SmallIcon } from "src/components/Icons";
import Row from "src/layouts/Row";
import Button from "src/components/Button";

// styles
import "src/styles/ProjectCard.css";

interface Props {
	children: ReactNode; // content - description
	icon: IconType;
	title: string;
	tags: Tag[];
	title_icon: IconType;
	bottom_icons: IconType[];
	bottom_buttons?: ButtonType[];
	isHidden?: boolean;
	onHeaderClick?: () => void;
}

export default function ProjectCard({
	children, // content - description
	icon,
	title,
	tags,
	title_icon,
	bottom_icons,
	bottom_buttons,
	isHidden = true,
	onHeaderClick,
}: Props) {
	const [hidden, setHidden] = useState(isHidden);

	useEffect(() => {
		setHidden(isHidden);
	}, [isHidden]);

	function handleHeaderClick() {
		const value = !hidden;
		setHidden(value);
		if (onHeaderClick) onHeaderClick();
	}

	return (
		<div className={`project_card ${hidden && "hidden"}`}>
			<div
				onClick={handleHeaderClick}
				className="card_header primary_text rows_spaced"
			>
				<Row>
					<Icon {...icon} />
					<span className="title">
						<strong>{title}</strong>
					</span>
				</Row>
				<Row>
					<Row className="less_gap">
						{tags.map((tag) => (
							<Badge text={tag.text} style={tag.style} />
						))}
					</Row>
					<SmallIcon {...title_icon} />
					<div className="expand_arrow" />
				</Row>
			</div>
			<div className="card_content">
				{children}
				<div className="card_bottom space2">
					<Row className="unselectable">
						{bottom_icons.map((icon) => (
							<SmallIcon {...icon} />
						))}
					</Row>
					<Row>
						{bottom_buttons?.map((btn) => (
							<Button {...btn} />
						))}
					</Row>
				</div>
			</div>
		</div>
	);
}
