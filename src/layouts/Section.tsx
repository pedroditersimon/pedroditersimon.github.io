import { ReactNode } from "react";

// styles
import "src/styles/Section.css";

interface Props {
	id: string;
	children: ReactNode;
}

export default function Section({ id, children }: Props) {
	return <section id={id}>{children}</section>;
}
