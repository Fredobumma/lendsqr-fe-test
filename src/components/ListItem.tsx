import { guarantors } from "src/assets";
import { Figure, Text } from "src/baseElements";

const ListItem = ({ className = "" }) => {
	return (
		<div className={`list-item ${className}`}>
			<Figure image={guarantors} />
			<Text className="list-item__text">Guarantors</Text>
		</div>
	);
};

export default ListItem;
// Basic media-objects component structure.
