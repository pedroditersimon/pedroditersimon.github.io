import "./Section.css";

import { ReactNode } from "react";

interface Props {
	id: string;
	children: ReactNode;
}

export default function Section({ id, children }: Props) {
	return <section id={id}>{children}</section>;
}
