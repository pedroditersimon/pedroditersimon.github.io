import Banner from "./components/Banner";
import Layout from "./layouts/Layout";

// icons
import me_logo from "./assets/me.png";

// css
import "./App.css";
import "./scrollbar.css";

// Sections
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import PersonalBrand from "./sections/PersonalBrandSection";
import ProjectsSection from "./sections/ProjectsSection";
import SectionDivider from "./components/SectionDivider";
import AcademicalSection from "./sections/AcademicalSection";
import BlogSection from "./sections/BlogSection";

function App() {
	return (
		<Layout>
			<Banner
				icon={me_logo}
				name="PEDRO DITER SIMÓN"
				description="Programador de videojuegos en Unity C#"
			/>

			<AboutMeSection />

			<SectionDivider />
			<ExperienceSection />

			<SectionDivider />
			<PersonalBrand />

			<SectionDivider />
			<ProjectsSection />

			<SectionDivider />
			<AcademicalSection />

			<SectionDivider />
			<BlogSection />
		</Layout>
	);
}

export default App;
