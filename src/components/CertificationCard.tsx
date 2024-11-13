import "./CertificationCard.css";

export default function CertificationCard({ children, href, img }) {
	return (
		<a
			className="card outside_shadow"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<img className="card_img" src={img} alt="Card" />
			<span className="small_text">{children}</span>
		</a>
	);
}
