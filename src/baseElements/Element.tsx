import { createElement } from "react";

import type { ElementsProps } from "src/models";

const Element = ({ tag, className, children }: ElementsProps) => {
	return createElement(tag, { className }, children);
};

export default Element;
