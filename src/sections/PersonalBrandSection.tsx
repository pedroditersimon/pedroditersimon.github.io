// types
import type { Button as ButtonType } from "src/types";

// components
import Section from "src/layouts/Section";
import Row from "src/layouts/Row";
import Title from "src/components/Title";
import Button from "src/components/Button";
import ProfileCard from "src/components/ProfileCard";

// icons
import chocodark_logo from "src/assets/brand-logo.png";
import github_logo from "src/assets/logos/github.png";
import twitter_logo from "src/assets/logos/twitter-white.png";
import instagram_logo from "src/assets/logos/instagram-white.png";
import twitch_logo from "src/assets/logos/twitch-white.png";
import linktree_logo from "src/assets/logos/linktree.png";

const buttons: ButtonType[] = [
	{
		text: "GitHub",
		icon: github_logo,
		href: "https://github.com/chocodarkstudio",
		alt: "GitHub link to chocodark studio",
	},
	{
		text: "Twitter",
		icon: twitter_logo,
		href: "https://x.com/ChocoDarkStudio",
		alt: "Twitter link to chocodark studio",
	},
	{
		text: "Instagram",
		icon: instagram_logo,
		href: "https://www.instagram.com/chocodark.studio/",
		alt: "Instagram link to chocodark studio",
	},
	{
		text: "Linktree",
		icon: linktree_logo,
		href: "https://linktr.ee/ChocodarkStudio",
		alt: "Linktree link to chocodark studio",
	},
	// Puedes descomentar este objeto si decides habilitar el botón de Twitch.
	/*
	{
		text: "Twitch",
		icon: twitch_logo,
		href: "https://www.twitch.tv/chocodarkstudio",
		alt: "Twitch link to chocodark studio",
	},
	*/
];

export default function PersonalBrandSection() {
	return (
		<Section id="personal_brand">
			<Title title_color="var(--color-brand-text)">Marca personal</Title>
			<p>
				Desarollé mi marca personal bajo el nombre de "
				<span style={{ color: "var(--color-brand-text)" }}>
					ChocoDark Studio
				</span>
				", a través de la cual comparto mis creaciones de videojuegos y sus
				progresos.
			</p>

			<ProfileCard
				icon={chocodark_logo}
				name="ChocoDark Studio"
				description="Desarrollador de videojuegos indie"
			/>

			<Row>
				{buttons.map((btn) => (
					<Button {...btn} className="personal_brand" />
				))}
			</Row>
		</Section>
	);
}
