import ProfileCard from "../components/ProfileCard";
import Navbar from "./Navbar";
import me_logo from "../assets/me.png";
import arrow_left from "../assets/arrow_left.png";
import "./Header.css";

import { SmallIcon } from "../components/Icons";

export default function Header() {
	return (
		<header>
			<a className="toggle_header" href="asd">
				<img src={arrow_left} alt="toggle header" />
			</a>

			<div className="header_content">
				<ProfileCard
					icon={me_logo}
					name="Pedro Diter Simón"
					description="Programador de videojuegos en Unity C#"
				/>

				<Navbar />
			</div>
		</header>
	);
}
