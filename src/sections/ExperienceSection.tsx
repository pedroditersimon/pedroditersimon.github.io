import csharp_logo from "../assets/logos/csharp.png";
import unity_logo from "../assets/logos/unity.png";
import linkedin_logo from "../assets/logos/linkedin-white.png";
import github_logo from "../assets/logos/github.png";
import link_logo from "../assets/link.png";

import python_logo from "../assets/logos/python.png";
import pygame_logo from "../assets/logos/pygame.png";
import gamemaker_logo from "../assets/logos/gamemaker.png";

import Section from "../layouts/Section";

import Title from "../components/Title";
import Button from "../components/Button";

import type { Section as SectionType } from "../types";
import Card from "../components/CertificationCard";

import cert1 from "../assets/certificates/UC-LV2POPKJ.jpg";
import cert2 from "../assets/certificates/Introducción al control de versiones con Git - Microsoft Learn.png";
import cert3 from "../assets/certificates/1677122274760.png";
import cert4 from "../assets/certificates/1678478948032.png";
import cert5 from "../assets/certificates/1676682682729.png";

import CertificationCard from "../components/CertificationCard";

export default function ExperienceSection() {
	return (
		<Section id="experience">
			<Title icons={[]}>Experiencia y habilidades</Title>
			<p className="secondary_text">
				Trabajé como FreeLancer en línea en la web Workana, finalizando con
				éxito proyectos de clientes que se encuentran en distintas partes del
				mundo (España, Ecuador, Uruguay, etc.).
				<br /> <br />
				Conocimiento en los lenguajes y tecnologías:
				<ul>
					<li>Programación C# y Scripting API de Unity3D</li>
					<li>Diseño UI y integración de interfaz en Unity3D</li>
					<li>Desarrollo y manejo general del motor Unity3D</li>
					<li>Modelado 3D en Blender</li>
					<li>Ilustración con vectores</li>
					<li>Base de datos (PostgreSQL, MongoDB).</li>
					<li>Otros: Python, JavaScript, HTML/CSS, Git, GitHub.</li>
				</ul>
				Mi lengua materna es el castellano.
				<br />
				Cuento con buen nivel de comprensión lectora y escritura en inglés
			</p>
			<Title icons={[]}>Certificaciones</Title>
			<div className="certificates">
				<CertificationCard
					img={cert1}
					href="https://www.udemy.com/certificate/UC-LV2POPKJ/"
				>
					Máster en Programación de Videojuegos con Unity® 2020 y C#
				</CertificationCard>
				<CertificationCard
					img={cert2}
					href="https://learn.microsoft.com/api/achievements/share/es-es/PedroDiterSimon/9F546GMU?sharingId=955578E85EA8CE9F"
				>
					Introducción al control de versiones con Git, Microsoft Learn
				</CertificationCard>
				<CertificationCard
					img={cert3}
					href="https://www.linkedin.com/learning/certificates/778581910a6837b535a0c2a4de89ec299a3af5f67dc394bb64c88d4c320c69da"
				>
					C# avanzado 1
				</CertificationCard>
				<CertificationCard
					img={cert4}
					href="https://www.linkedin.com/learning/certificates/5e6b5a83528acd7701abb702f7b5de6a06826113f1bf4a9d238a59d099944ead?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqZ69DxKzR6yms35sJhDiPQ%3D%3D"
				>
					Aprende diseño de videojuegos
				</CertificationCard>
				<CertificationCard
					img={cert5}
					href="https://www.linkedin.com/learning/certificates/4d7635a4105be129ee5efcbd323e1cbf6425708e812cc6a1aa39cf4562e7ffab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqZ69DxKzR6yms35sJhDiPQ%3D%3D"
				>
					Fundamentos profesionales del desarrollo de software, por Microsoft y
					LinkedIn
				</CertificationCard>
			</div>
		</Section>
	);
}
