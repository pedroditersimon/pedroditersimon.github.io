// types
import type { Badge as BadgeType } from "src/types";

// components
import { SmallIcon } from "src/components/Icons";
import Badge from "src/components/Badge";
import Row from "src/layouts/Row";
import type { IconType, Tag, Button as ButtonType } from "src/types";

// styles
import "src/styles/ProjectCardV2.css";

// icons
import project_icon from "src/assets/project-icon.png";
import link_icon from "src/assets/link.png";
import Button from "src/components/Button";
import github_logo from "src/assets/logos/github.png";
import link_img from "src/assets/link.png";



interface Props {
	title: string;
	img?: string;
	youtube_link?: string;
	description: string;
	icons: IconType[];
	tags: Tag[];
	buttons?: ButtonType[];
	onHeaderClick?: () => void;
}

export default function ProjectCardV2({
	title,
	img,
	youtube_link,
	description,
	icons,
	tags,
	buttons,
	onHeaderClick,
}: Props) {

	function handleHeaderClick() {
		if (onHeaderClick) onHeaderClick();
	}

	return (
		<div className="project-card-v2">
			<Row className="project-card-header" >
				<Row className="less_gap">
					{/* <SmallIcon
						icon={project_icon}
						border="square"
					/> */}
					<h3 >{title}</h3>
				</Row>

				<Row className="">
					{
						icons.map((icon) => (
							<SmallIcon icon={icon.icon} border={icon.border} />
						))
					}
				</Row>
			</Row>



			<div className={`project-card-${img ? "img" : "youtube"}`} >
				{img &&
					<img src={img} alt="projectcover img" />
				}
				{youtube_link &&
					<iframe src={youtube_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
				}
			</div>

			<Row className="less_gap">
				{tags.map((tag) => (
					<Badge text={tag.text} style={tag.style} />
				))}
			</Row>

			<p className="project-card-description">{description}</p>

			<Row className="buttons">
				{buttons &&
					buttons.map((btn) => (
						<Button {...btn} />
					))
				}
			</Row>
		</div>
	);
}
