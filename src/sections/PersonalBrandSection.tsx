import Section from "../layouts/Section";

import Title from "../components/Title";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";

import chocodark_logo from "../assets/brand-logo.png";
import github_logo from "../assets/logos/github.png";
import twitter_logo from "../assets/logos/twitter-white.png";
import instagram_logo from "../assets/logos/instagram-white.png";
import twitch_logo from "../assets/logos/twitch-white.png";
import linktree_logo from "../assets/logos/linktree.png";

export default function PersonalBrandSection() {
	return (
		<Section id="personal_brand">
			<Title icons={[]}>Marca personal</Title>
			<p className="secondary_text">
				Desarollé mi marca personal bajo el nombre de "
				<span className="brand_text">ChocoDark Studio</span>", a través de la
				cual comparto mis creaciones de videojuegos y sus progresos.
			</p>
			<ProfileCard
				icon={chocodark_logo}
				name="ChocoDark Studio"
				description="Desarrollador de videojuegos indie"
			/>
			<div>
				<Button
					icon={github_logo}
					href="https://github.com/chocodarkstudio"
					alt="GitHub logo"
				>
					GitHub
				</Button>
				<Button
					icon={twitter_logo}
					href="https://x.com/ChocoDarkStudio"
					alt="Resumen CV button"
				>
					Twitter
				</Button>
				<Button
					icon={instagram_logo}
					href="https://www.instagram.com/chocodark.studio/"
					alt="Resumen CV button"
				>
					Instagram
				</Button>
				{/*
				<Button
					icon={twitch_logo}
					href="https://www.twitch.tv/chocodarkstudio"
					alt="Resumen CV button"
				>
					Twitch
				</Button>
				*/}
				<Button
					icon={linktree_logo}
					href="https://linktr.ee/ChocodarkStudio"
					alt="Resumen CV button"
				>
					Linktree
				</Button>
			</div>
		</Section>
	);
}
