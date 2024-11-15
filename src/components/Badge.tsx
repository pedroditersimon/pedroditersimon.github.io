import { colors } from "../consts";

interface Props {
	text: string;
	style?: keyof typeof colors;
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
