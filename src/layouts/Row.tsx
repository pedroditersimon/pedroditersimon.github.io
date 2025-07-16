import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

export default function Row({ children, className }: Props) {
	return (
		<div
			className={className}
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "1vw",
				alignItems: "center",
				flexWrap: "wrap",
			}}
		>
			{children}
		</div>
	);
}
