// components
import Timeline from "src/components/Timeline";
import Title from "src/components/Title";
import Section from "src/layouts/Section";

export default function TrajectorySection() {
	return (
		<Section id="trajectory">
			<Title>Trayectoria</Title>
			<Timeline
				entries={[
					{
						date: "Diciembre 2024 - Presente",
						title:
							"Desarrollador Fullstack en Chango Consultora",
						description:
							"Lidero el desarrollo de aplicaciones web con React, Angular, Java/Springboot en un entorno remoto full-time;\nImplementé pipelines de CI/CD con GitHub Actions que redujeron los tiempos de despliegue;\nColaboro con equipos de diseño, frontend, backend y testing;\nConfiguré entornos de desarrollo y producción en VPS con Nginx."
					},
					{
						date: "2022-2024 Educación Superior",
						title:
							"Tecnicatura superior en Gestión en Programación e Innovación Tecnológica y Digital",
						description:
							"Instituto de Capacitación y Desarrollo Empresarial (I.N.C.A.D.E.).\nPosadas-Misiones.",
					},
					{
						date: "2016-2021 Educación Secundaria",
						title: "Técnico En Administración Y Gestión De Las Organizaciones",
						description:
							"Escuela Provincial De Educación Técnica N°2 “Eva Duarte De Perón”.\nPosadas-Misiones.",
					},
				]}
			/>
		</Section>
	);
}
