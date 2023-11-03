import { Text } from ".";
import type { ElementsProps } from "src/models";

type BadgeProps = Omit<ElementsProps, "tag">;

const Badge = ({ children, className }: BadgeProps) => {
	return (
		<span className={`badge ${className}`}>
			<Text tag="span" children={children} />
		</span>
	);
};

export default Badge;
// Basic badge structure (a span container and text).
