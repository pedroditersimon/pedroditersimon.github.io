// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import Badge from "src/components/Badge";
import { BadgeGroup } from "src/components/BadgeGroup";
import { BadgeGroupDivider } from "src/components/BadgeGroupDivider";
import { BadgeGroupNewLine } from "src/components/BadgeGroupNewLine";

// icons
import unity_logo from "src/assets/logos/unity.png";
import react_logo from "src/assets/logos/react.png";
import csharp_logo from "src/assets/logos/csharp.png";
import angular_logo from "src/assets/logos/angular.png";
import javascript_logo from "src/assets/logos/javascript.png";
import typescript_logo from "src/assets/logos/typescript.png";
import python_logo from "src/assets/logos/python.png";
import github_logo from "src/assets/logos/github.png";
import nodejs_logo from "src/assets/logos/nodejs.png";
import tailwind_logo from "src/assets/logos/tailwindcss.png";
import postgresql_logo from "src/assets/logos/postgresql.png";
import mongodb_logo from "src/assets/logos/mongodb.svg";
import html_logo from "src/assets/logos/html.webp";
import css_logo from "src/assets/logos/css.png";
import blender_logo from "src/assets/logos/blender.png";
import mysql_logo from "src/assets/logos/mysql-logo.png";
import java_logo from "src/assets/logos/java-logo.png";
import springboot_logo from "src/assets/logos/spring-boot-logo.png";


export default function KnowledgeSection() {
	return (
		<Section id="knowledge">
			<Title>Conocimientos</Title>

			<BadgeGroup title="Desarrollo Web">
				<Badge icon={java_logo} text="Java" />
				<Badge icon={springboot_logo} text="SpringBoot" />
				<Badge icon={csharp_logo} text="C# ASP.NET" />
				<Badge text="EntityFramework" />
				<Badge icon={nodejs_logo} text="NodeJS" />

				<BadgeGroupDivider />

				<Badge icon={html_logo} text="HTML" />
				<Badge icon={css_logo} text="CSS" />
				<Badge icon={javascript_logo} text="JavaScript" />
				<Badge icon={typescript_logo} text="TypeScript" />
				<Badge icon={react_logo} text="React" />
				<Badge icon={angular_logo} text="Angular (PrimeNG, RxJs)" />
				<Badge icon={tailwind_logo} text="tailwindcss" />
			</BadgeGroup>


			<BadgeGroup title="Base de Datos">
				<Badge icon={mysql_logo} text="MySQL" />
				<Badge icon={postgresql_logo} text="PostgreSQL" />
				<Badge icon={mongodb_logo} text="MongoDB" />
			</BadgeGroup>


			<BadgeGroup title="Desarrollo de Videojuegos">
				<Badge icon={unity_logo} text="Unity3D" />
				<Badge icon={blender_logo} text="Blender" />
				<Badge text="Diseño UI" />
				<Badge text="Ilustración con vectores" />
			</BadgeGroup>


			<BadgeGroup title="Ingeniería de Software">
				<Badge text="SOLID" />
				<Badge text="Hexagonal Architecture" />
				<Badge text="Clean Architecture" />
				<Badge text="DDD" />
				<Badge text="MVC" />

				<BadgeGroupDivider />
				<Badge text="Repository Pattern" />
				<Badge text="Unit of Work Pattern" />
				<Badge text="Singleton Pattern" />
				<Badge text="Strategy Pattern" />
				<Badge text="Railway Programming" />

				<BadgeGroupDivider />
				<Badge text="Atomic Design" />
				<Badge text="Feature Oriented" />

				<BadgeGroupDivider />
				<Badge text="Kanban" />
				<Badge text="Scrum" />
			</BadgeGroup>

			<BadgeGroup title="Otros">
				<Badge icon={python_logo} text="Python" />
				<Badge icon={github_logo} text="Git y GitHub" />
				<Badge icon={github_logo} text="CI/CD con GitHub Actions" />
			</BadgeGroup>

			<p>
				Trabajé como Freelancer en línea en la web Workana, finalizando con
				éxito proyectos de clientes que se encuentran en distintas partes del
				mundo (España, Ecuador, Uruguay, etc.).
			</p>

			<p>
				Mi lengua materna es el castellano.
				<br />
				Cuento con buen nivel de comprensión lectora y escritura en inglés
			</p>
		</Section>
	);
}
