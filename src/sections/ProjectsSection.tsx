import Section from "../layouts/Section";

import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import miro_logo from "../assets/logos/miro-color.png";

export default function ProjectsSection() {
	return (
		<Section id="projects">
			<Title icons={[]}>Proyectos</Title>
			<p>
				Presento una selección de videojuegos que he desarrollado y publicado a
				través de mi marca personal en diversas tiendas y plataformas en línea.
			</p>
			<ProjectCard
				title="Mini Room Painter"
				icon="static/images/projects/miniroompainter_logo.png"
				tags={["Pintura", "Mascota"]}
				title_icon="./static/images/logos/android-white.png"
				bottom_icons={[
					"./static/images/logos/csharp.png",
					"./static/images/logos/unity.png",
				]}
				bottom_buttons={[
					{
						text: "Miro",
						icon: miro_logo,
						href: "https://miro.com/app/board/uXjVNKtKegw=/?share_link_id=737298372577",
					},
					{
						text: "Descargar en PlayStore",
						icon: miro_logo,
						href: "https://miro.com/app/board/uXjVNKtKegw=/?share_link_id=737298372577",
					},
				]}
			>
				<p className="space2">
					<span className="bold">Mini Room Painter</span> es un juego de
					decoración de interiores, donde los jugadores combinan colores para
					pintar objetos y muebles en habitaciones con diversas temáticas.
					Además de cuidar un gatito que acompaña al jugador.
				</p>

				<p className=" space2">
					Desarrollé el juego desde la{" "}
					<span className="bold">programación</span>, hasta el diseño de{" "}
					<span className="bold">gráficos</span>,{" "}
					<span className="bold">modelado 3D</span>,{" "}
					<span className="bold">UI</span>,{" "}
					<span className="bold">GameDesign</span>,{" "}
					<span className="bold">ilustraciones</span> y{" "}
					<span className="bold">animaciones</span>.
				</p>

				<div className="small_text bold space2">
					Inicio: 14/12/2023
					<br />
					Lanzamiento: 18/04/2024
					<br />
					Duración: 6 meses (incluidas actualizaciones)
				</div>
			</ProjectCard>
			<div className="project_card boxed space2 hidden">
				<div className="card_header primary_text rows_spaced">
					<div className="rows_center">
						<img
							className="icon"
							src="static/images/projects/miniroompainter_logo.png"
							alt="none"
						/>
						<span className="title bold">Mini Room Painter</span>
					</div>
					<div className="rows_center">
						<div className="rows_center less_gap">
							<span className="tag">Pintura</span>
							<span className="tag">Mascota</span>
						</div>
						<span className="tag warning_text" style={{ display: "none" }}>
							Inactivo
						</span>
						<img
							alt="none"
							className="small_icon"
							src="./static/images/logos/android-white.png"
						/>
						<div className="expand_arrow small_icon" />
					</div>
				</div>
				<div className="card_content">
					<p className=" space2">
						<span className="bold">Mini Room Painter</span> es un juego de
						decoración de interiores, donde los jugadores combinan colores para
						pintar objetos y muebles en habitaciones con diversas temáticas.
						Además de cuidar un gatito que acompaña al jugador.
					</p>

					<p className=" space2">
						Desarrollé el juego desde la{" "}
						<span className="bold">programación</span>, hasta el diseño de{" "}
						<span className="bold">gráficos</span>,{" "}
						<span className="bold">modelado 3D</span>,{" "}
						<span className="bold">UI</span>,{" "}
						<span className="bold">GameDesign</span>,{" "}
						<span className="bold">ilustraciones</span> y{" "}
						<span className="bold">animaciones</span>.
					</p>

					<div className="small_text bold space2">
						Inicio: 14/12/2023
						<br />
						Lanzamiento: 18/04/2024
						<br />
						Duración: 6 meses (incluidas actualizaciones)
					</div>

					<div className="card_bottom space2 rows_spaced">
						<div className="rows_center unselectable">
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/csharp.png"
							/>
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/unity.png"
							/>
						</div>
						<div className="rows_spaced">
							<a
								className="button outside_shadow"
								href="https://miro.com/app/board/uXjVNKtKegw=/?share_link_id=737298372577"
								target="_blank"
								rel="noreferrer"
							>
								<img alt="none" src="./static/images/logos/miro-color.png" />
								<span>Miro</span>
							</a>
							<a
								className="button outside_shadow"
								href="https://play.google.com/store/apps/details?id=com.ChocoDarkStudio.MiniRoomPainter"
								target="_blank"
								rel="noreferrer"
							>
								<img alt="none" src="./static/images/logos/playstore.png" />
								<span>Descargar en PlayStore</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="project_card boxed space2 hidden">
				<div className="card_header primary_text rows_spaced">
					<div className="rows_center">
						<img
							alt="none"
							className="icon"
							src="static/images/projects/avenue_logo.png"
						/>
						<span className="title bold">Avenue</span>
					</div>
					<div className="rows_center">
						<div className="rows_center less_gap">
							<span className="tag">City Builder</span>
							<span className="tag">Gestión de recursos</span>
						</div>
						<img
							alt="none"
							className="small_icon"
							src="./static/images/logos/windows-white.png"
						/>
						<span className="warning_text" style={{ display: "none" }}>
							Inactivo
						</span>
						<div className="expand_arrow" />
					</div>
				</div>
				<div className="card_content">
					<p className=" space2">
						<span className="bold">Avenue</span> es un juego de rompecabezas
						publicado en la tienda <span className="bold">Itch.io</span> para{" "}
						<span className="bold">Windows</span>.
						<br />
						Resuelve desafíos relacionados con caminos, autos y tráfico,
						gestionando los limitados recuros.
					</p>

					<p className=" space2">
						El desarrollo abarcó desde la{" "}
						<span className="bold">programación</span>, hasta el diseño de{" "}
						<span className="bold">gráficos</span>,{" "}
						<span className="bold">UI</span>,{" "}
						<span className="bold">GameDesign</span> y{" "}
						<span className="bold">animaciones</span>.
					</p>

					<div className="small_text bold space2">
						Inicio: 26/04/2023
						<br />
						Lanzamiento: 26/08/2023
						<br />
						Duración: 7 meses (incluidas actualizaciones)
					</div>

					<div className="card_bottom space2 rows_spaced">
						<div className="rows_center unselectable">
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/csharp.png"
							/>
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/unity.png"
							/>
						</div>
						<div className="rows_spaced">
							<a
								className="button outside_shadow"
								href="https://miro.com/app/board/uXjVNZ1VJdA=/?share_link_id=663618610003"
								target="_blank"
								rel="noreferrer"
							>
								<img alt="none" src="./static/images/logos/miro-color.png" />
								<span>Miro</span>
							</a>
							<a
								className="button outside_shadow"
								href="https://chocodark-studio.itch.io/avenue"
								target="_blank"
								rel="noreferrer"
							>
								<img alt="none" src="./static/images/logos/itchio.png" />
								<span>Descargar en Itch.io </span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="project_card boxed space2 hidden">
				<div className="card_header primary_text rows_spaced">
					<div className="rows_center">
						<img
							className="icon"
							src="static/images/projects/frutish.png"
							alt="none"
						/>
						<span className="title bold">Frutish</span>
					</div>
					<div className="rows_center">
						<div className="rows_center less_gap">
							<span className="tag">Ranking</span>
							<span className="tag">Combinación</span>
						</div>
						<img
							alt="none"
							className="small_icon"
							src="./static/images/logos/android-white.png"
						/>
						<span className="warning_text" style={{ display: "none;" }}>
							Inactivo
						</span>
						<div className="expand_arrow" />
					</div>
				</div>
				<div className="card_content">
					<p className=" space2">
						<span className="bold">Frutish</span> es un juego de combinar
						frutas, ganar puntos y obtener la corona dorada, peleando contra
						oponentes de todo el mundo.
					</p>

					<p className=" space2">
						Desarrollé todas las facetas del juego, desde la{" "}
						<span className="bold">programación</span>, hasta el diseño de{" "}
						<span className="bold">gráficos</span>,{" "}
						<span className="bold">animaciones</span>,{" "}
						<span className="bold">servidor online</span> y funcionalidades{" "}
						<span className="bold">multijugador</span>.
					</p>

					<div className="small_text bold space2">
						Inicio: 28/01/2020
						<br />
						Lanzamiento: 13/05/2020
						<br />
						Duración: 5 meses (incluidas actualizaciones)
					</div>

					<div className="card_bottom space2 rows_spaced">
						<div className="rows_center unselectable">
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/csharp.png"
							/>
							<img
								alt="none"
								className="small_icon"
								src="./static/images/logos/unity.png"
							/>
						</div>
						<div className="rows_spaced" />
					</div>
				</div>
			</div>
		</Section>
	);
}
