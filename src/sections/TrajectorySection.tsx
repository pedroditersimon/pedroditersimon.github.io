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
						date: "2024 - Presente",
						title:
							"Programador Fullstack en Chango Consultora S.R.L.",
						description:
							"Argentina · En remoto · Jornada completa\n\n- Desarrollo de funcionalidades para un ERP y aplicaciones web.\n- Despliegues en VPS con Nginx, automatizados con GitHub Actions y backups.\n- Integraciones con AWS Lambda, OneDrive y Microsoft Graph.\n- Colaboración directa con clientes y equipos de diseño, desarrollo y testing.\n- Migración de datos de MongoDB a MySQL.\n- Conversión automática de documentos Word y Excel con LibreOffice.\nTecnologías: Java, Spring Boot, Angular, React, Tailwind CSS, MySQL, MongoDB, AWS Lambda, Microsoft Graph, OneDrive, GitHub Actions, Nginx y VPS."
					},
					{
						date: "2022 - 2024",
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
