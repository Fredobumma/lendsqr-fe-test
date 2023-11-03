import { createElement } from "react";

import type { ElementsProps } from "src/models";

const Element = ({ tag, className, children }: ElementsProps) => {
	return createElement(tag, { className }, children);
};

export default Element;
// Creating a generic element/component that takes any valid html tag to form a html element.
