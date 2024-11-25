import { useState } from "react";

// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import ProjectCard from "src/components/ProjectCard";

// icons
import miro_logo from "src/assets/logos/miro-color.png";
import playstore_logo from "src/assets/logos/playstore.png";
import itchio_logo from "src/assets/logos/itchio.png";

import miniroompainter_logo from "src/assets/projects/miniroompainter_logo.png";
import avenue_logo from "src/assets/projects/avenue_logo.png";
import frutish_logo from "src/assets/projects/frutish.png";

import csharp_logo from "src/assets/logos/csharp.png";
import unity_logo from "src/assets/logos/unity.png";
import android_logo from "src/assets/logos/android-white.png";
import windows_logo from "src/assets/logos/windows-white.png";

export default function ProjectsSection() {
	const [activeProjectCard, setActiveProjectCard] =
		useState("Mini Room Painter");

	function onProjectCardHiddenChange(name, hidden) {
		if (activeProjectCard === name && hidden) {
			return setActiveProjectCard("");
		}

		setActiveProjectCard(name);
	}

	return (
		<Section id="projects">
			<Title icons={[]}>Proyectos</Title>
			<p>
				Presento una selección de videojuegos que he desarrollado y publicado a
				través de mi marca personal en diversas tiendas y plataformas en línea.
			</p>
			<ProjectCard
				icon={{ icon: miniroompainter_logo, border: "round" }}
				title="Mini Room Painter"
				tags={[{ text: "Pintura" }, { text: "Mascota" }]}
				title_icon={{ icon: android_logo, border: "square" }}
				bottom_icons={[
					{ icon: csharp_logo, border: "square" },
					{ icon: unity_logo, border: "square" },
				]}
				bottom_buttons={[
					{
						text: "Miro",
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
				onHiddenChange={(newValue) =>
					onProjectCardHiddenChange("Mini Room Painter", newValue)
				}
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
				tags={[{ text: "City Builder" }, { text: "Gestión de recursos" }]}
				title_icon={{ icon: windows_logo, border: "square" }}
				bottom_icons={[
					{ icon: csharp_logo, border: "square" },
					{ icon: unity_logo, border: "square" },
				]}
				bottom_buttons={[
					{
						text: "Miro",
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
				onHiddenChange={(newValue) =>
					onProjectCardHiddenChange("Avenue", newValue)
				}
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
					{ text: "Ranking" },
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
				onHiddenChange={(newValue) =>
					onProjectCardHiddenChange("Frutish", newValue)
				}
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
