import { Figure, Text } from "src/baseElements";
import { dropdown, user_avi } from "src/assets";

const MediaObject = () => {
	return (
		<div className="media-object">
			<Figure altText="icon" image={user_avi} imageClass="media__image" />
			<Text className="media__text">Adedeji</Text>
			<Figure altText="icon" image={dropdown} />
		</div>
	);
};

export default MediaObject;
// Basic media-objects component structure.
