import { useState } from "react";

// styles
import "src/styles/ProjectsSection.css";

// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import ProjectCard from "src/components/ProjectCard";
import ProjectCardV2 from "src/components/ProjectCardV2";
import Row from "src/layouts/Row";

// icons
import miro_logo from "src/assets/logos/miro-color.png";
import playstore_logo from "src/assets/logos/playstore.png";
import itchio_logo from "src/assets/logos/itchio.png";
import github_logo from "src/assets/logos/github.png";
import link_img from "src/assets/link.png";
import cronomate_logo from "src/assets/logos/web-white.png";
import golden_start from "src/assets/golden-star.png";
import hearth_icon from "src/assets/heart-icon.png";
import html_icon from "src/assets/logos/html.webp";

import veggie_shop_logo from "src/assets/projects/veggie_shop_logo.png";
import miniroompainter_logo from "src/assets/projects/miniroompainter_logo.png";
import avenue_logo from "src/assets/projects/avenue_logo.png";
import frutish_logo from "src/assets/projects/frutish.png";

import csharp_logo from "src/assets/logos/csharp.png";
import unity_logo from "src/assets/logos/unity.png";
import android_logo from "src/assets/logos/android-white.png";
import windows_logo from "src/assets/logos/windows-white.png";
import web_logo from "src/assets/logos/web-white.png";
import angular_logo from "src/assets/logos/angular.png";
import react_logo from "src/assets/logos/react.png";
import circle_img from "src/assets/circle.png";
import dotted_squircle_img from "src/assets/dotted-squircle.png";
import tailwindcss_logo from "src/assets/logos/tailwindcss.png";

// project img
import cronomate_img from "src/assets/projects/cronomate.png";
import miniroompainter_img from "src/assets/projects/miniroompainter.png";
import chefhunters_img from "src/assets/projects/chef-hunters.png";
import obrapaw_img from "src/assets/projects/obrapaw_shot.png"


export default function ProjectsSection() {
	const [activeProjectCard, setActiveProjectCard] = useState("Cronomate");

	function selectProjectCard(name: string) {
		if (activeProjectCard === name)  // unselect
			return setActiveProjectCard("");

		setActiveProjectCard(name);
	}

	return (
		<Section id="projects">
			<Title icons={[]}>Proyectos</Title>
			<p>
				Presento una selección de proyectos que he desarrollado y publicado
				en diversas tiendas y plataformas en línea.
			</p>
			{/* <p>
				Presento una selección de videojuegos que he desarrollado y publicado a
				través de mi marca personal en diversas tiendas y plataformas en línea.
			</p> */}

			<Row className="projects-cards" >

				<ProjectCardV2
					title="Obra Paw"
					description="Pagina web sobre prepaga personalizada para mascotas."
					img={obrapaw_img}
					icons={[
						{ icon: html_icon, },
					]}
					tags={[
						{ text: "LandingPage" },
						{ text: "Marketing" },
					]}
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

				<ProjectCardV2
					title="Cronomate"
					description="Aplicación web de gestión del tiempo, diseñada para actividades cronometradas como estudiar o trabajar."
					img={cronomate_img}
					icons={[
						{ icon: react_logo, },
						{ icon: tailwindcss_logo, },
						{ icon: golden_start, }
					]}
					tags={[
						// { text: "Web" },
						{ text: "Gestión del tiempo" },
						{ text: "OpenSource" },
						// { text: "React" },
					]}
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
					description="Tienda de vegetales. Navega entre diferentes vistas de productos, agregar artículos al carrito, cambiar entre temas, y realizar compras enviando los detalles por WhatsApp."
					img={veggie_shop_logo}
					icons={[
						{ icon: angular_logo, },
					]}
					tags={[
						{ text: "E-commerce" },
					]}
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
					title="Avenue"
					description="Juego de rompecabezas. Resuelve desafíos relacionados con caminos, autos y tráfico, gestionando limitados recursos."
					youtube_link="https://www.youtube-nocookie.com/embed/VyUP8jR5TuI?si=WwmUDZQuynMTx3Ig"
					icons={[
						{ icon: windows_logo, },
						{ icon: unity_logo, },
						{ icon: csharp_logo, },
					]}
					tags={[
						{ text: "Windows" },
						// { text: "City Builder" },
						{ text: "Gestión de recursos" }
					]}
					buttons={[
						{
							text: "Tablero Miro",
							icon: miro_logo,
							icon_border: "square",
							href: "https://miro.com/app/board/uXjVNZ1VJdA=/?share_link_id=663618610003",
						},
						{
							text: "Itch.io",
							icon: itchio_logo,
							href: "https://chocodark-studio.itch.io/avenue",
						},
					]}
				/>


				<ProjectCardV2
					title="Chef Hunters"
					description="Participé en una competencia de videojuegos, donde junto a un equipo desarrollamos un videojuego en 5 días. Logrando el puesto #19 entre otros 39 participantes."
					img={chefhunters_img}
					icons={[
						{ icon: windows_logo, },
						{ icon: unity_logo, },
						{ icon: csharp_logo, }
					]}
					tags={[
						{ text: "Windows" },
						{ text: "GameJam" },
						{ text: "#19" },
					]}
					buttons={[
						{
							text: "Itch.io",
							icon: itchio_logo,
							href: "https://sr-almond.itch.io/chef-hunters",
						},
					]}
				/>

				<ProjectCardV2
					title="Mini Room Painter"
					description="Juego de decoración de interiores, donde los jugadores combinan colores para pintar objetos y muebles en habitaciones con diversas temáticas. Además de cuidar un gatito que acompaña al jugador."
					img={miniroompainter_img}
					icons={[
						{ icon: android_logo, },
						{ icon: unity_logo, },
						{ icon: csharp_logo, }
					]}
					tags={[
						{ text: "Pintura" },
						{ text: "Mobile" },
						{ text: "Gatos" }
					]}
					buttons={[
						{
							text: "Tablero Miro",
							icon: miro_logo,
							icon_border: "square",
							href: "https://miro.com/app/board/uXjVNKtKegw=/?share_link_id=737298372577",
						},
						// {
						// 	text: "PlayStore",
						// 	icon: playstore_logo,
						// 	href: "https://play.google.com/store/apps/details?id=com.ChocoDarkStudio.MiniRoomPainter",
						// },
					]}
				/>

				<ProjectCardV2
					title="Frutish"
					description="Juego de combinar frutas, ganar puntos y obtener la corona dorada, peleando contra oponentes de todo el mundo."
					img={frutish_logo}
					icons={[
						{ icon: android_logo },
						{ icon: unity_logo },
						{ icon: csharp_logo },
					]}
					tags={[
						{ text: "Mobile" },
						{ text: "Combinación" },
					]}
					buttons={[
						// {
						// 	text: "PlayStore",
						// 	icon: playstore_logo,
						// 	href: "https://play.google.com/store/apps/details?id=com.ChocoDarkStudio.Frutish",
						// },
					]}
				/>
			</Row>
		</Section>
	);
}
