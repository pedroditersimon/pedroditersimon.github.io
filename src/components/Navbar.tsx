import { useEffect, useState } from "react";
import "./Navbar.css";
import type { Section as SectionType } from "src//types";

const sections: SectionType[] = [
	{
		id: "about_me",
		title: "Acerca de mí",
	},
	{
		id: "experience",
		title: "Experiencia y habilidades",
	},
	{
		id: "personal_brand",
		title: "Marca personal",
	},
	{
		id: "projects",
		title: "Proyectos",
	},
	{
		id: "academical",
		title: "Formación académica",
	},
	{
		id: "blog",
		title: "Blog",
	},
];

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("");

	function handleSelect(section: SectionType) {
		setActiveSection(section.id);
	}

	useEffect(() => {
		const content = document.querySelector(
			".layout_content",
		) as HTMLElement | null;
		if (!content) return;

		const handleScroll = () => {
			// get sections inside of content
			const sections = content.querySelectorAll("section");
			if (!sections.length) return;

			const scrollY = content.scrollTop;

			sections.forEach((sec) => {
				const offsetTop = sec.offsetTop - content.offsetTop;
				const sectionHeight = sec.offsetHeight;
				const sectionId = sec.getAttribute("id");
				if (!sectionId) return;

				const adjustedOffsetTop = offsetTop - 200;

				if (
					scrollY >= adjustedOffsetTop &&
					scrollY < adjustedOffsetTop + sectionHeight
				) {
					setActiveSection(sectionId);
				}
			});
		};

		// scroll event on content
		content.addEventListener("scroll", handleScroll);

		return () => {
			content.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id="navbar">
			{sections.map((section) => (
				<a
					className={`nav_item ${section.id === activeSection && "selected"}`}
					href={`#${section.id}`}
					onClick={() => handleSelect(section)}
				>
					{section.title}
				</a>
			))}
		</div>
	);
}
