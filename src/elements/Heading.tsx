import { Text } from ".";
import type { TextProps } from "src/models";

type HeadingProps = TextProps & { tag: string };

const Heading = ({ tag, className, children }: HeadingProps) => {
	return <Text tag={tag} className={className} children={children} />;
};

export default Heading;
