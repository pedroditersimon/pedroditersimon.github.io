import React, { useState } from "react";
import "./Navbar.css";
import type { Section as SectionType } from "../types";

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

	return (
		<div id="navbar">
			{sections.map((section) => (
				<a
					className={`nav_item ${section.id === activeSection && "selected"}`}
					href={"#" + section.id}
					onClick={() => handleSelect(section)}
				>
					{section.title}
				</a>
			))}
		</div>
	);
}