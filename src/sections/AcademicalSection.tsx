// components
import Timeline from "src/components/Timeline";
import Title from "src/components/Title";
import Section from "src/layouts/Section";

export default function AcademicalSection() {
	return (
		<Section id="academical">
			<Title>Formacion academica</Title>
			<Timeline
				entries={[
					{
						date: "2016-2021 Educación Secundaria",
						title: "Técnico En Administración Y Gestión De Las Organizaciones",
						description:
							"Escuela Provincial De Educación Técnica N°2 “Eva Duarte De Perón”.\nPosadas-Misiones.",
					},
					{
						date: "2022-x Educación Superior (Actualmente cursando 3er año)",
						title:
							"Tecnicatura superior en Gestión en Programación e Innovación Tecnológica y Digital",
						description:
							"Instituto de Capacitación y Desarrollo Empresarial (I.N.C.A.D.E.).\nPosadas-Misiones.",
					},
				]}
			/>
		</Section>
	);
}
