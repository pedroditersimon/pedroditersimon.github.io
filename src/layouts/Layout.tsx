import { ReactNode } from "react";
import Banner from "src//components/Banner";
import Header from "src//components/Header";
import "./Layout.css";

// icons
import me_logo from "src//assets/me.png";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<Banner
				icon={me_logo}
				name="PEDRO DITER"
				secondName="SIMÓN"
				description="Programador de videojuegos en Unity C#"
				className="only_show_mobile"
			/>
			<div className="layout_content inside_shadow">
				<Banner
					icon={me_logo}
					name="PEDRO DITER"
					secondName="SIMÓN"
					description="Programador de videojuegos en Unity C#"
					className="only_show_desktop"
				/>
				{children}
			</div>
		</div>
	);
}
