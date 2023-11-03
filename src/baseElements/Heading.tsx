import Element from "./Element";
import type { ElementsProps } from "src/models";

const Heading = ({ tag, className, children }: ElementsProps) => {
	return <Element tag={tag} className={className} children={children} />;
};

export default Heading;
// Basic heading text structure.
