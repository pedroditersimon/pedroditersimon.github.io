import { colors } from "../consts";
import { Colors } from "../types";

interface Props {
	text: string;
	style?: Colors;
}

export default function Badge({ text, style }: Props) {
	return (
		<span
			style={{
				padding: "4px 8px",
				color: colors[style ? style : "normal"],
				backgroundColor: "rgba(1,1,1, 0.15)",
				borderRadius: "var(--border-radius)",
				fontSize: "15px",
				fontWeight: "bold",
			}}
			className="badge"
		>
			{text}
		</span>
	);
}
