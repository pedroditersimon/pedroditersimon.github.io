import "./App.css";
import Banner from "./components/Banner";
import Layout from "./layouts/Layout";
import me_logo from "./assets/me.png";
import "./scrollbar.css";
import Section from "./layouts/Section";
import type { Section as SectionType } from "./types";
import Card from "./components/CertificationCard";

import cert1 from "./assets/certificates/UC-LV2POPKJ.jpg";

import Title from "./components/Title";
import Button from "./components/Button";
import CertificationCard from "./components/CertificationCard";
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import PersonalBrand from "./sections/PersonalBrandSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
	return (
		<Layout>
			<Banner
				icon={me_logo}
				name="PEDRO DITER SIMÓN"
				description="Programador de videojuegos en Unity C#"
			/>

			<AboutMeSection />

			<ExperienceSection />

			<PersonalBrand />

			<ProjectsSection />
		</Layout>
	);
}

export default App;
