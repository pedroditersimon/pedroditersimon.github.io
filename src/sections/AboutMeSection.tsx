// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import Button from "src/components/Button";
import Space from "src/components/Space";
import Row from "src/layouts/Row";

// icons
import csharp_logo from "src/assets/logos/csharp.png";
import unity_logo from "src/assets/logos/unity.png";
import linkedin_logo from "src/assets/logos/linkedin-white.png";
import github_logo from "src/assets/logos/github.png";
import link_logo from "src/assets/link.png";
import web_logo from "src/assets/logos/web-white.png";
import javascript_logo from "src/assets/logos/javascript.png";

import python_logo from "src/assets/logos/python.png";
import pygame_logo from "src/assets/logos/pygame.png";
import gamemaker_logo from "src/assets/logos/gamemaker.png";

export default function AboutMeSection() {
	return (
		<Section id="about_me">
			<Title>Acerca de mí</Title>
			<p>
				Me especializo en el desarrollo de aplicaciones web;
				actualmente trabajo como programador fullstack con Angular y Java;
				Soy empático, honesto, comprometido y proactivo.
			</p>
			<Row>
				<Button
					icon={linkedin_logo}
					href="https://www.linkedin.com/in/pedro-diter-simon/"
					alt="LinkedIn logo"
					text="LinkedIn"
				/>
				<Button
					icon={github_logo}
					href="https://github.com/pedroditersimon"
					alt="GitHub logo"
					text="GitHub"
				/>
				<Button
					icon={link_logo}
					href={`${process.env.PUBLIC_URL}/cv/Programador web - Pedro Simón Resumen CV.pdf`}
					alt="Resumen CV button"
					text="Resumen CV"
				/>
			</Row>

			<Space />
			<Title icons={[python_logo, csharp_logo, javascript_logo]}>Historia</Title>
			<p>
				A los 12 años, descubrí los lenguajes de <strong>programación</strong> y sus
				aplicaciones a través de los videojuegos, lo que despertó mi interés y me impulsó a
				aprender de manera <strong>autodidacta</strong>.
				<br />
				Comencé con <strong>Python</strong> y PyGame, lo que me proporcionó una base sólida para expandir mis conocimientos hacia <strong>C# y Unity3D</strong>, desarrollando y publicando varios proyectos de videojuegos.
				<br />
				Posteriormente, amplié mi experiencia hacia el desarrollo web, adquiriendo habilidades en backend con <strong>C#/ASP.NET y Java</strong>, así como en frontend con <strong>React y Angular</strong>.
			</p>
		</Section>
	);
}
