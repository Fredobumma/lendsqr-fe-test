import Element from "./Element";
import type { ElementsProps } from "src/models";

const Button = ({ tag, children, className }: ElementsProps) => {
	return (
		<Element tag={tag} children={children} className={`btn ${className}`} />
	);
};

export default Button;
