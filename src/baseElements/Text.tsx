import { createElement } from "react";

import { ElementsProps } from "src/models";

type TextProps = {
	tag?: string;
} & Omit<ElementsProps, "tag">;

const Text = ({ tag = "p", className, children }: TextProps) => {
	return createElement(tag, { className }, children);
};

export default Text;
// Basic app text structure.
