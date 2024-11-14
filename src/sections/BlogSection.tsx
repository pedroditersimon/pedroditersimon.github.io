import { ReactNode } from "react";
import Title from "../components/Title";
import Section from "../layouts/Section";
import link_logo from "../assets/link.png";
interface Props {
	children: ReactNode;
	href: string;
	icon?: string;
}

function Link({ children, href, icon }: Props) {
	return (
		<a href={href} target="_blank" className="hint_text" rel="noreferrer">
			<div className="rows_center">
				<img alt="" className="small_icon" src={icon ? icon : link_logo} />
				<span className="tittle">{children}</span>
			</div>
		</a>
	);
}

export default function BlogSection() {
	return (
		<Section id="blog">
			<Title>Blog</Title>
			<p className="secondary_text space2">
				Visita mi blog, donde comparto mi experiencia y conocimientos a través
				de artículos sobre desarrollo de juegos y programación, desde una
				perspectiva personal.
			</p>

			<Title>Artículos</Title>
			<Link href="./blog/Expresiones faciales a modelos 3D/page.html">
				Expresiones faciales a modelos 3D
			</Link>
			<Link href="./blog/Exportar Sprites a Unity/page.html">
				Exportar Sprites a Unity
			</Link>

			<Title>Sistemas</Title>
			<Link href="https://github.com/chocodarkstudio/chocodark-unity-systems/tree/main/Cameras/ThirdPersonCamera">
				Third Person Camera
			</Link>
		</Section>
	);
}
