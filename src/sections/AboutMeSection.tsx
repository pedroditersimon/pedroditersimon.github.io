// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import Button from "src/components/Button";
import Space from "src/components/Space";
import Row from "src/layouts/Row";

// icons
import linkedin_logo from "src/assets/logos/linkedin-white.png";
import github_logo from "src/assets/logos/github.png";
import link_logo from "src/assets/link.png";

export default function AboutMeSection() {
	return (
		<Section id="about_me">
			<Title>Acerca de mí</Title>
			<p>
				Me motiva construir sistemas limpios, robustos y mantenibles, tanto desde la UI como desde el código que leemos los devs.
			</p>
			<p>
				Mi idioma nativo es el español y tengo un nivel básico de inglés.
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
					href={`${process.env.PUBLIC_URL}/cv/Fullstack Developer - Pedro Simón - Resumen CV.pdf`}
					alt="Resumen CV button"
					text="Resumen CV"
				/>
			</Row>

			<Space />
			<Title>Enfoque profesional</Title>
			<p>
				Busco aportar en equipos que valoren las buenas prácticas, el código limpio, la documentación, las pruebas y la comunicación. Me enfoco en aprender continuamente, enfrentar nuevos desafíos y aportar mejoras en cada proyecto.
			</p>
		</Section>
	);
}
