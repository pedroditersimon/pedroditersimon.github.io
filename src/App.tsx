import Layout from "./layouts/Layout";

// css
import "./App.css";
import "./styles/scrollbar.css";

// Sections
import AboutMeSection from "./sections/AboutMeSection";
import KnowledgeSection from "./sections/KnowledgeSection";
import PersonalBrand from "./sections/PersonalBrandSection";
import ProjectsSection from "./sections/ProjectsSection";
import SectionDivider from "./components/SectionDivider";
import TrajectorySection from "./sections/TrajectorySection";
import BlogSection from "./sections/BlogSection";
import CertificationsSection from "src/sections/CertificationsSections";

function App() {
	return (
		<>
			<Layout>
				<AboutMeSection />

				<SectionDivider />
				<KnowledgeSection />

				<SectionDivider />
				<PersonalBrand />

				<SectionDivider />
				<ProjectsSection />

				<SectionDivider />
				<TrajectorySection />

				<SectionDivider />
				<CertificationsSection />

				<SectionDivider />
				<BlogSection />
			</Layout>
		</>
	);
}

export default App;
