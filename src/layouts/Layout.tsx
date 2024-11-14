import { ReactNode } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import "./Layout.css";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<div className="layout_content inside_shadow">{children}</div>
		</div>
	);
}
