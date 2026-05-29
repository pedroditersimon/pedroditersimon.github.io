// styles
import "src/styles/CertificationCard.css";

export default function CertificationCard({ children, href, img }) {
	return (
		<a
			className="cert-card"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<div className="cert-card-img">
				<img src={img} alt="Certificate" />
			</div>
			<span>{children}</span>
		</a>
	);
}
