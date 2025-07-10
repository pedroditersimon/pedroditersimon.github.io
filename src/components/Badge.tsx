import { SmallIcon } from "src/components/Icons";
import { colors } from "src/consts";
import { Colors } from "src/types";

import "src/styles/Badge.css";

interface Props {
	icon?: string;
	text: string;
	style?: Colors;
}

export default function Badge({ icon, text, style }: Props) {
	return (
		<span
			style={{
				color: colors[style ? style : "normal"],
			}}
			className="badge"
		>
			{icon && <SmallIcon className="badge-icon" icon={icon} border="square" />}
			{text}
		</span>
	);
}
