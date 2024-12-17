import Layout from "./layouts/Layout";

// css
import "./App.css";
import "./styles/scrollbar.css";

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
		<>
			<Layout>
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
		</>
	);
}

export default App;
