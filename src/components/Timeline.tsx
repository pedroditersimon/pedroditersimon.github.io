import "./Timeline.css";

interface Entry {
	date: string;
	title: string;
	description: string;
}

interface Props {
	entries: Entry[];
}

export default function Timeline({ entries }: Props) {
	return (
		<div className="timeline">
			{entries.map((entry) => (
				<div className="entry">
					<span className="date hint_text">{entry.date}</span>
					<span className="tittle">{entry.title}</span>
					{/*Split descriptions breaklines into elements */}
					{entry.description.split("\n").map((description) => (
						<span className="description">{description}</span>
					))}
				</div>
			))}
		</div>
	);
}
