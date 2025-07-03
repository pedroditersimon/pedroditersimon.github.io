import { useState } from "react";

// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import ProjectCard from "src/components/ProjectCard";

// icons
import miro_logo from "src/assets/logos/miro-color.png";
import playstore_logo from "src/assets/logos/playstore.png";
import itchio_logo from "src/assets/logos/itchio.png";
import github_logo from "src/assets/logos/github.png";
import link_img from "src/assets/link.png";
import cronomate_logo from "src/assets/logos/web-white.png";

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

			<ProjectCard
				icon={{ icon: web_logo, border: "round" }}
				title="Cronomate"
				tags={[
					{ text: "Aplicación web" },
					{ text: "Gestión del tiempo" },
					{ text: "OpenSource" },
					// { text: "React" },
				]}
				title_icon={{ icon: react_logo, border: "square" }}
				bottom_icons={[]}
				bottom_buttons={[
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
				isHidden={activeProjectCard !== "Cronomate"}
				onHeaderClick={() => selectProjectCard("Cronomate")}
			>
				<p>
					Cronomate es una aplicación de gestión del tiempo, diseñada para asistir en actividades y jornadas cronometradas, como estudiar o trabajar.
				</p>

				<p>
					Ideal para organizar tu productividad diaria, iniciando temporizadores con sesiones enfocadas y descansos planificados. ¡Totalmente open source y abierta a colaboraciones!
				</p>

				<p className="small_text">
					<strong>
						Desarrollado en Enero 2025
					</strong>
				</p>
			</ProjectCard>


			<ProjectCard
				icon={{ icon: veggie_shop_logo, border: "round" }}
				title="Veggie Shop"
				tags={[
					{ text: "Aplicación web" },
					{ text: "E-commerce" },
					// { text: "Angular v16" },
				]}
				title_icon={{ icon: angular_logo, border: "square" }}
				bottom_icons={[]}
				bottom_buttons={[
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
				isHidden={activeProjectCard !== "Veggie Shop"}
				onHeaderClick={() => selectProjectCard("Veggie Shop")}
			>
				<p>
					Proyecto de práctica sobre una tienda de vegetales, construido con Angular v16.
				</p>

				<p>
					Permite navegar entre diferentes vistas de productos, agregar artículos al carrito, cambiar entre temas, y realizar compras enviando los detalles por <strong>WhatsApp</strong>.
				</p>

				<p className="small_text">
					<strong>
						Desarrollado en Febrero 2025
					</strong>
				</p>
			</ProjectCard>

			<ProjectCard
				icon={{ icon: miniroompainter_logo, border: "round" }}
				title="Mini Room Painter"
				tags={[
					{ text: "Juego Mobile" },
					{ text: "Pintura" },
					// { text: "Mascota" }
				]}
				title_icon={{ icon: android_logo, border: "square" }}
				bottom_icons={[
					{ icon: csharp_logo, border: "square" },
					{ icon: unity_logo, border: "square" },
				]}
				bottom_buttons={[
					{
						text: "Tablero Miro",
						icon: miro_logo,
						icon_border: "square",
						href: "https://miro.com/app/board/uXjVNKtKegw=/?share_link_id=737298372577",
					},
					{
						text: "Descargar en PlayStore",
						icon: playstore_logo,
						href: "https://play.google.com/store/apps/details?id=com.ChocoDarkStudio.MiniRoomPainter",
					},
				]}
				isHidden={activeProjectCard !== "Mini Room Painter"}
				onHeaderClick={() => selectProjectCard("Mini Room Painter")}
			>
				<p>
					<strong>Mini Room Painter</strong> es un juego de decoración de
					interiores, donde los jugadores combinan colores para pintar objetos y
					muebles en habitaciones con diversas temáticas. Además de cuidar un
					gatito que acompaña al jugador.
				</p>

				<p>
					Desarrollé el juego desde la <strong>programación</strong>, hasta el
					diseño de <strong>gráficos</strong>, <strong>modelado 3D</strong>,{" "}
					<strong>UI</strong>, <strong>GameDesign</strong>,{" "}
					<strong>ilustraciones</strong> y <strong>animaciones</strong>.
				</p>

				<p className="small_text">
					<strong>
						Inicio: 14/12/2023
						<br />
						Lanzamiento: 18/04/2024
						<br />
						Duración: 6 meses (incluidas actualizaciones)
					</strong>
				</p>
			</ProjectCard>

			<ProjectCard
				icon={{ icon: avenue_logo, border: "round" }}
				title="Avenue"
				tags={[
					{ text: "Juego PC" },
					// { text: "City Builder" },
					{ text: "Gestión de recursos" }
				]}
				title_icon={{ icon: windows_logo, border: "square" }}
				bottom_icons={[
					{ icon: csharp_logo, border: "square" },
					{ icon: unity_logo, border: "square" },
				]}
				bottom_buttons={[
					{
						text: "Tablero Miro",
						icon: miro_logo,
						icon_border: "square",
						href: "https://miro.com/app/board/uXjVNZ1VJdA=/?share_link_id=663618610003",
					},
					{
						text: "Descargar en Itch.io",
						icon: itchio_logo,
						href: "https://chocodark-studio.itch.io/avenue",
					},
				]}
				isHidden={activeProjectCard !== "Avenue"}
				onHeaderClick={() => selectProjectCard("Avenue")}
			>
				<p>
					<strong>Avenue</strong> es un juego de rompecabezas publicado en la
					tienda <strong>Itch.io</strong> para <strong>Windows</strong>.
					<br />
					Resuelve desafíos relacionados con caminos, autos y tráfico,
					gestionando los limitados recuros.
				</p>

				<p>
					El desarrollo abarcó desde la <strong>programación</strong>, hasta el
					diseño de <strong>gráficos</strong>, <strong>UI</strong>,{" "}
					<strong>GameDesign</strong> y <strong>animaciones</strong>.
				</p>

				<p className="small_text">
					<strong>
						Inicio: 26/04/2023
						<br />
						Lanzamiento: 26/08/2023
						<br />
						Duración: 7 meses (incluidas actualizaciones)
					</strong>
				</p>
			</ProjectCard>

			<ProjectCard
				icon={{ icon: frutish_logo, border: "square" }}
				title="Frutish"
				tags={[
					{ text: "Juego Mobile" },
					// { text: "Ranking" },
					{ text: "Combinación" },
					//{ text: "Inactivo", style: "red" },
				]}
				title_icon={{ icon: android_logo, border: "square" }}
				bottom_icons={[
					{ icon: csharp_logo, border: "square" },
					{ icon: unity_logo, border: "square" },
				]}
				bottom_buttons={[]}
				isHidden={activeProjectCard !== "Frutish"}
				onHeaderClick={() => selectProjectCard("Frutish")}
			>
				<p>
					<strong>Frutish</strong> es un juego de combinar frutas, ganar puntos
					y obtener la corona dorada, peleando contra oponentes de todo el
					mundo.
				</p>

				<p>
					Desarrollé todas las facetas del juego, desde la{" "}
					<strong>programación</strong>, hasta el diseño de{" "}
					<strong>gráficos</strong>, <strong>animaciones</strong>,{" "}
					<strong>servidor online</strong> y funcionalidades{" "}
					<strong>multijugador</strong>.
				</p>

				<p className="small_text">
					<strong>
						Inicio: 28/01/2020
						<br />
						Lanzamiento: 13/05/2020
						<br />
						Duración: 5 meses (incluidas actualizaciones)
					</strong>
				</p>
			</ProjectCard>
		</Section>
	);
}
