import "src/styles/Title.css";
import { SmallIcon } from "./Icons";

interface Props {
	children: string;
	title_color?: string;
	icons?: string[];
}

export default function Title({ children, title_color, icons }: Props) {
	return (
		<div className="title">
			<h3 style={{ color: title_color }}>{children}</h3>

			<div className="icons unselectable">
				{icons?.map((icon) => (
					<SmallIcon icon={icon} alt={`${children} icon`} />
				))}
			</div>
		</div>
	);
}
