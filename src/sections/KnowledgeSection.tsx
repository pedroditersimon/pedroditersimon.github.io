// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import CertificationCard from "src/components/CertificationCard";
import Space from "src/components/Space";


export default function KnowledgeSection() {
	return (
		<Section id="knowledge">
			<Title>Conocimientos</Title>

			<p>
				<strong>Desarrollo Web</strong>
				<ul>
					<li>Frontend: HTML, CSS, JavaScript, TypeScript, React, Angular (PrimeNG, RxJs), tailwindcss.</li>
					<li>Backend: C# con ASP.NET.</li>
					<li>Bases de datos: PostgreSQL, MongoDB.</li>
				</ul>
			</p>

			<p>
				<strong>Desarrollo de Videojuegos</strong>
				<ul>
					<li>Programación C# y Scripting API de Unity3D</li>
					<li>Diseño UI y integración de interfaz en Unity3D</li>
					<li>Desarrollo y manejo general del motor Unity3D</li>
					<li>Modelado 3D en Blender</li>
					<li>Ilustración con vectores</li>
				</ul>
			</p>

			<p>
				<strong>Ingeniería de Software</strong>
				<ul>
					<li>Principios SOLID.</li>
					<li>Arquitecturas: Hexagonal arquitecture, Clean arquitecture, DDD.</li>
					<li>Patrones de diseño: MVC, MVVM, Repository, Unit of Work, Singleton, Strategy, Railway programming.</li>
					<li>Estructuras de proyecto: Atomic design system, Feature oriented.</li>
				</ul>
			</p>

			<p>
				<strong>Otros</strong>
				<ul>
					<li>Python.</li>
					<li>Git y GitHub.</li>
					<li>CI/CD con GitHub Actions.</li>
				</ul>
			</p>

			<p>
				Trabajé como Freelancer en línea en la web Workana, finalizando con
				éxito proyectos de clientes que se encuentran en distintas partes del
				mundo (España, Ecuador, Uruguay, etc.).
				<br /> <br />
				Mi lengua materna es el castellano.
				<br />
				Cuento con buen nivel de comprensión lectora y escritura en inglés
			</p>
		</Section>
	);
}
