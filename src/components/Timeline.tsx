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
		<div className="timeline space2">
			{entries.map((entry) => (
				<div className="entry">
					<span className="date hint_text">{entry.date}</span>
					<span className="tittle">{entry.title}</span>
					<span className="description">{entry.description}</span>
				</div>
			))}
		</div>
	);
}
