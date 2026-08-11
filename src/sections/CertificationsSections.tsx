// components
import Section from "src/layouts/Section";
import Title from "src/components/Title";
import Button from "src/components/Button";
import Space from "src/components/Space";
import Row from "src/layouts/Row";
import CertificationCard from "src/components/CertificationCard";

// images
import cert2 from "src/assets/certificates/Introducción al control de versiones con Git - Microsoft Learn.png";
import cert3 from "src/assets/certificates/1677122274760.png";
import cert5 from "src/assets/certificates/1676682682729.png";
import cert_opi from "src/assets/certificates/OPI 2025.jpg";

export default function CertificationsSection() {
	return (
		<Section id="certifications">
			<Title>Certificaciones</Title>

			<div className="certificates">
				<CertificationCard
					img={cert_opi}
					href="https://www.linkedin.com/posts/pedro-diter-simon_no-es-el-final-es-el-comienzo-franco-share-7382772453300678656-WT-I"
				>
					OPI: Formacion de oratoria impartida por Franco Pisso
				</CertificationCard>

				<CertificationCard
					img={cert2}
					href="https://learn.microsoft.com/api/achievements/share/es-es/PedroDiterSimon/9F546GMU?sharingId=955578E85EA8CE9F"
				>
					Introducción al control de versiones con Git, Microsoft Learn
				</CertificationCard>

				<CertificationCard
					img={cert3}
					href="https://www.linkedin.com/learning/certificates/778581910a6837b535a0c2a4de89ec299a3af5f67dc394bb64c88d4c320c69da"
				>
					C# avanzado 1
				</CertificationCard>

				<CertificationCard
					img={cert5}
					href="https://www.linkedin.com/learning/certificates/4d7635a4105be129ee5efcbd323e1cbf6425708e812cc6a1aa39cf4562e7ffab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqZ69DxKzR6yms35sJhDiPQ%3D%3D"
				>
					Fundamentos profesionales del desarrollo de software, por Microsoft y
					LinkedIn
				</CertificationCard>
			</div>
		</Section>
	);
}
