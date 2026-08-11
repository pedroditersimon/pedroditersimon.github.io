// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import Badge from "src/components/Badge";
import { BadgeGroup } from "src/components/BadgeGroup";
import { BadgeGroupDivider } from "src/components/BadgeGroupDivider";
import { BadgeGroupNewLine } from "src/components/BadgeGroupNewLine";

// icons
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
import mysql_logo from "src/assets/logos/mysql-logo.png";
import java_logo from "src/assets/logos/java-logo.png";
import springboot_logo from "src/assets/logos/spring-boot-logo.png";


export default function KnowledgeSection() {
	return (
		<Section id="knowledge">
			<Title>Conocimientos</Title>

			<div className="knowledge-grid">
			<BadgeGroup title="Desarrollo Fullstack">
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


			<BadgeGroup title="Ingeniería de Software">
				<Badge text="SOLID" />
				<Badge text="Clean Architecture" />
				<Badge text="MVC" />

				<BadgeGroupDivider />
				<Badge text="Repository Pattern" />
				<Badge text="Singleton Pattern" />
				<Badge text="Strategy Pattern" />

				<BadgeGroupDivider />
				{/* <Badge text="Atomic Design" /> */}
				<Badge text="Feature Oriented" />

				<BadgeGroupDivider />
				<Badge text="Kanban" />
				<Badge text="Gitflow" />
				{/* <Badge text="Scrum" /> */}
			</BadgeGroup>

			<BadgeGroup title="Otros">
				<Badge icon={python_logo} text="Python" />
				<Badge icon={github_logo} text="Git y GitHub" />
				<Badge icon={github_logo} text="CI/CD con GitHub Actions" />
				<Badge text="AWS Lambda" />
				<Badge text="Microsoft Graph y OneDrive" />
				<Badge text="Nginx y VPS" />
			</BadgeGroup>
			</div>

		</Section>
	);
}
