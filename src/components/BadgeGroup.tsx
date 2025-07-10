import "src/styles/BadgeGroup.css"

interface Props {
    title: string;
    children: React.ReactNode;
}

export function BadgeGroup({ title, children }: Props) {
    return (
        <div className="badge-group">
            <span className="badge-group-title">{title}</span>
            <div className="badge-group-header-divider"></div>
            <div className="badge-group-content" >
                {children}
            </div>
        </div>
    );
}