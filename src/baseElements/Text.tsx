import { createElement } from "react";

import { TextProps } from "src/models";

const Text = ({ tag = "p", className, children }: TextProps) => {
	return createElement(tag, { className }, children);
};

export default Text;
