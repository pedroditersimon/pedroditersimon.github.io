import "./Title.css";
import { SmallIcon } from "./Icons";
interface Props {
	children: string;
	icons?: string[];
}

export default function Title({ children, icons }: Props) {
	return (
		<div className="title rows_spaced">
			<h1 className="primary_text">{children}</h1>

			<div className="icons unselectable">
				{icons?.map((icon) => (
					<SmallIcon icon={icon} alt={`${children} icon`} />
				))}
			</div>
		</div>
	);
}
