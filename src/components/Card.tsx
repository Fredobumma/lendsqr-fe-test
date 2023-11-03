import { Figure, Heading } from "src/baseElements";
import { users } from "src/assets";

const Card = () => {
	return (
		<div className="card">
			<Figure
				altText="icon"
				containerClass="card card__icon-container card--users"
				image={users}
				imageClass="card__icon"
			/>
			<Heading tag="h3" className="heading sub-heading">
				Users
			</Heading>
			<Heading tag="h2" className="heading">
				Users
			</Heading>
		</div>
	);
};

export default Card;
// Basic card component structure.
