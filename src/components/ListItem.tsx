import { Figure, Text } from "src/baseElements";

interface ListItemProps {
	className?: string;
	icon: string;
	text: string;
}

const ListItem = ({ className = "", icon, text }: ListItemProps) => {
	return (
		<div className={`list-item ${className}`}>
			<Figure altText="icon" image={icon} />
			<Text className="list-item__text">{text}</Text>
		</div>
	);
};

export default ListItem;
// Basic media-objects component structure.
