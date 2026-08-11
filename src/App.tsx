import Layout from "./layouts/Layout";

// css
import "./App.css";
import "./styles/scrollbar.css";

// Sections
import AboutMeSection from "./sections/AboutMeSection";
import KnowledgeSection from "./sections/KnowledgeSection";
import ProjectsSection from "./sections/ProjectsSection";
import SectionDivider from "./components/SectionDivider";
import TrajectorySection from "./sections/TrajectorySection";
import CertificationsSection from "src/sections/CertificationsSections";

function App() {
	return (
		<>
			<Layout>
				<AboutMeSection />

				<SectionDivider />
				<KnowledgeSection />

				<SectionDivider />
				<ProjectsSection />

				<SectionDivider />
				<TrajectorySection />

				<SectionDivider />
				<CertificationsSection />
			</Layout>
		</>
	);
}

export default App;
