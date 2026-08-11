// styles
import "src/styles/ProjectsSection.css";

// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import ProjectCardV2 from "src/components/ProjectCardV2";
import Row from "src/layouts/Row";

// icons
import github_logo from "src/assets/logos/github.png";
import link_img from "src/assets/link.png";
import html_icon from "src/assets/logos/html.webp";
import angular_logo from "src/assets/logos/angular.png";
import react_logo from "src/assets/logos/react.png";
import tailwindcss_logo from "src/assets/logos/tailwindcss.png";

// project images
import veggie_shop_logo from "src/assets/projects/veggie_shop_logo.png";
import cronomate_img from "src/assets/projects/cronomate.png";
import obrapaw_img from "src/assets/projects/obrapaw_shot.png";

export default function ProjectsSection() {
	return (
		<Section id="projects">
			<Title>Proyectos</Title>
			<p>
				Una selección de aplicaciones web que desarrollé y publiqué.
			</p>

			<Row className="projects-cards">
				<ProjectCardV2
					title="Cronomate"
					description="Aplicación web de gestión del tiempo para actividades cronometradas, como estudiar o trabajar."
					img={cronomate_img}
					icons={[{ icon: react_logo }, { icon: tailwindcss_logo }]}
					tags={[{ text: "Gestión del tiempo" }, { text: "Open source" }]}
					buttons={[
						{
							text: "Repositorio GitHub",
							icon: github_logo,
							icon_border: "square",
							href: "https://github.com/pedroditersimon/cronomate",
						},
						{
							text: "Visitar",
							icon: link_img,
							href: "https://cronomate.vercel.app",
						},
					]}
				/>

				<ProjectCardV2
					title="Veggie Shop"
					description="Tienda de vegetales desarrollada en Angular con catálogo, carrito y pedidos por WhatsApp."
					img={veggie_shop_logo}
					icons={[{ icon: angular_logo }]}
					tags={[{ text: "E-commerce" }]}
					buttons={[
						{
							text: "Repositorio GitHub",
							icon: github_logo,
							icon_border: "square",
							href: "https://github.com/pedroditersimon/angular-veggie-shop",
						},
						{
							text: "Visitar",
							icon: link_img,
							href: "https://angular-veggie-shop.vercel.app/home",
						},
					]}
				/>

				<ProjectCardV2
					title="Obra Paw"
					description="Landing page para una prepaga de mascotas, diseñada con foco en marketing y conversión."
					img={obrapaw_img}
					icons={[{ icon: html_icon }]}
					tags={[{ text: "Landing page" }, { text: "Marketing" }]}
					buttons={[
						{
							text: "Repositorio GitHub",
							icon: github_logo,
							icon_border: "square",
							href: "https://github.com/pedroditersimon/obrapaw",
						},
						{
							text: "Visitar",
							icon: link_img,
							href: "https://obrapaw.vercel.app",
						},
					]}
				/>
			</Row>
		</Section>
	);
}
