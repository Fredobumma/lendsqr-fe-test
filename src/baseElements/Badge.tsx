import { Text } from ".";
import type { TextProps } from "src/models";

const Badge = ({ children, className }: TextProps) => {
	return (
		<span className={`badge ${className}`}>
			<Text tag="span" children={children} />
		</span>
	);
};

export default Badge;
