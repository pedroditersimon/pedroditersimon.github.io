import { useState } from "react";

// components
import ProfileCard from "src/components/ProfileCard";
import Navbar from "src/components/Navbar";

// Icons
import me_logo from "src/assets/me.png";
import arrow_left from "src/assets/arrow_left.png";

// styles
import "src/styles/Header.css";

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
