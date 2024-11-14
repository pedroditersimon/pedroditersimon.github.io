import Timeline from "../components/Timeline";
import Title from "../components/Title";
import Section from "../layouts/Section";

export default function AcademicalSection() {
	return (
		<Section id="academical">
			<Title icons={[]}>Formacion academica</Title>
			<Timeline
				entries={[
					{
						date: "2016-2021 Educación Secundaria",
						title: "Técnico En Administración Y Gestión De Las Organizaciones",
						description:
							"Escuela Provincial De Educación Técnica N°2 “Eva Duarte De Perón”.<br>Posadas-Misiones.",
					},
					{
						date: "2022-x Educación Superior (Actualmente cursando 3er año)",
						title:
							"Tecnicatura superior en Gestión en Programación e Innovación Tecnológica y Digital",
						description:
							"Instituto de Capacitación y Desarrollo Empresarial (I.N.C.A.D.E.).<br>Posadas-Misiones.",
					},
				]}
			/>
		</Section>
	);
}
