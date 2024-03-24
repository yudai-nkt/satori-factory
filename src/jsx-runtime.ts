export type VNode = {
	type: string;
	props: Partial<{
		children: string | VNode | (string | VNode)[];
		style: Record<string, unknown>;
	}>;
};

// better minification thanks to mangling
const isString = (arg: unknown): arg is string => typeof arg === "string";

export const jsx = (
	tag: string | ((props: VNode["props"]) => VNode),
	{ children, style, ...rest }: VNode["props"],
): VNode => {
	if (!isString(tag)) {
		return tag({ children, style, ...rest });
	}
	return {
		type: tag,
		props: {
			children: Array.isArray(children)
				? mergeAdjacentStrings(children).length > 1
					? mergeAdjacentStrings(children)
					: mergeAdjacentStrings(children)[0]
				: children,
			...(style ? { style } : {}),
		},
	};
};

const mergeAdjacentStrings = ([first, second, ...rest]: (string | VNode)[]): (
	| string
	| VNode
)[] => {
	if (!first) {
		return [];
	}
	if (!second) {
		return [first];
	}
	if (isString(first) && isString(second)) {
		return mergeAdjacentStrings([`${first}${second}`, ...rest]);
	}
	return [first, ...mergeAdjacentStrings([second, ...rest])];
};
