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

import python_logo from "src/assets/logos/python.png";
import pygame_logo from "src/assets/logos/pygame.png";
import gamemaker_logo from "src/assets/logos/gamemaker.png";

export default function AboutMeSection() {
	return (
		<Section id="about_me">
			<Title icons={[csharp_logo, unity_logo]}>Acerca de mí</Title>
			<p>
				Soy programador y desarrollador de videojuegos en Unity3D, con más de 4
				años de experiencia.
				<br />
				Me especializo en el lenguaje de programación C# y el scripting API de
				Unity3D, como su manejo general.
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
					href={`${process.env.PUBLIC_URL}/cv/Programador CSharp Unity - Pedro Simón Resumen CV.pdf`}
					alt="Resumen CV button"
					text="Resumen CV"
				/>
			</Row>

			<Space />
			<Title icons={[python_logo, pygame_logo, gamemaker_logo]}>Historia</Title>
			<p>
				A la edad de 12 años, descubrí los lenguajes de programación y sus
				aplicaciones tecnológicas, lo que despertó mi interés y me impulsó a
				aprender de manera autodidacta.
				<br />
				Comencé estudiando y practicando el lenguaje de programación Python en
				conjunto con la biblioteca PyGame. Adquiriendo una sólida base que me
				facilitó el aprendizaje de otros lenguajes, como C# y el uso del motor
				de videojuegos Unity3D.
			</p>
		</Section>
	);
}
