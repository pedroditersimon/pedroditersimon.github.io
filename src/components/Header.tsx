import ProfileCard from "./ProfileCard";
import Navbar from "./Navbar";
import me_logo from "src/assets/me.png";
import arrow_left from "src/assets/arrow_left.png";
import "src/styles/Header.css";
import { useState } from "react";
import Button from "./Button";

export default function Header() {
	const [hidden, setHidden] = useState(false);

	const handleToggleHeader = () => {
		setHidden((prev) => !prev);
	};

	return (
		<header>
			<button
				type="button"
				className="toggle_header"
				onClick={handleToggleHeader}
			>
				<img src={arrow_left} alt="toggle header" />
			</button>

			<div className={`header_content ${hidden && "hidden"}`}>
				<ProfileCard
					icon={me_logo}
					name="Pedro Diter Simón"
					description="Programador de videojuegos en Unity C#"
					href=""
				/>

				<Navbar />
			</div>
		</header>
	);
}
