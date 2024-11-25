// components
import Title from "src/components/Title";
import Section from "src/layouts/Section";
import Link from "src/components/Link";
import Space from "src/components/Space";

export default function BlogSection() {
	return (
		<Section id="blog">
			<Title>Blog</Title>
			<p>
				Visita mi blog, donde comparto mi experiencia y conocimientos a través
				de artículos sobre desarrollo de juegos y programación, desde una
				perspectiva personal.
			</p>

			<Space />
			<Title>Artículos</Title>
			<Link
				href={`${process.env.PUBLIC_URL}/blog/Expresiones faciales a modelos 3D/page.html`}
			>
				Expresiones faciales a modelos 3D
			</Link>
			<Link
				href={`${process.env.PUBLIC_URL}/blog/Exportar Sprites a Unity/page.html`}
			>
				Exportar Sprites a Unity
			</Link>

			<Space />
			<Title>Sistemas</Title>
			<Link href="https://github.com/chocodarkstudio/chocodark-unity-systems/tree/main/Cameras/ThirdPersonCamera">
				Third Person Camera
			</Link>
		</Section>
	);
}
