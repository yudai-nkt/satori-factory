import type { VNode } from "./jsx-runtime.js";

export type FC<P extends Record<string, unknown> = Record<string, unknown>> = (
	props: P,
) => JSX.Element;

// TODO: remove global declaration and locate in library namespace if possible.
declare global {
	namespace JSX {
		type Element = VNode;
		interface ElementChildrenAttribute {
			children: VNode["props"]["children"];
		}
		interface IntrinsicElements {
			[key: string]: {
				style?: SupportedCSSProperties;
			} & ElementChildrenAttribute;
		}
		/** Based on https://github.com/vercel/satori#css */
		type SupportedCSSProperties = Partial<{
			display: "none" | "flex";
			position: "relative" | "absolute";
			color: string;
			margin: string | number;
			marginTop: string | number;
			marginRight: string | number;
			marginBottom: string | number;
			marginLeft: string | number;
			top: string | number;
			right: string | number;
			bottom: string | number;
			left: string | number;
			width: string | number;
			height: string | number;
			minWidth: string | number;
			minHeight: string | number;
			maxWidth: string | number;
			maxHeight: string | number;
			borderWidth: string | number;
			borderTopWidth: string | number;
			borderRightWidth: string | number;
			borderBottomWidth: string | number;
			borderLeftWidth: string | number;
			borderColor: string;
			borderTopColor: string;
			borderRightColor: string;
			borderBottomColor: string;
			borderLeftColor: string;
			border: string;
			borderTop: string;
			borderRight: string;
			borderBottom: string;
			bordereLeft: string;
			borderTopLeftRadius: string | number;
			borderTopRightRadius: string | number;
			borderBottomLeftRadius: string | number;
			borderBottomRightRadius: string | number;
			borderRadius: string | number;
			flexDirection: "column" | "row" | "row-reverse" | "column-reverse";
			flexWrap: "wrap" | "nowrap" | "wrap-reverse";
			flexGrow: number;
			flexShrink: number;
			alignItems:
				| "stretch"
				| "center"
				| "flex-start"
				| "flex-end"
				| "baseline"
				| "normal";
			/** The `safe` and `unsafe` prefixes are deliberately omitted to simplify the definition. */
			alignContent:
				| "start"
				| "end"
				| "flex-start"
				| "flex-end"
				| "center"
				| "normal"
				| "baseline"
				| "first baseline"
				| "last baseline"
				| "space-between"
				| "space-around"
				| "space-evenly"
				| "strech";
			/** The `safe` and `unsafe` prefixes are deliberately omitted to simplify the definition. */
			alignSelf:
				| "auto"
				| "normal"
				| "self-start"
				| "self-end"
				| "flex-start"
				| "flex-end"
				| "center"
				| "baseline"
				| "first baseline"
				| "last baseline"
				| "strech";
			/** The `safe` and `unsafe` prefixes are deliberately omitted to simplify the definition. */
			justifyContent:
				| "start"
				| "end"
				| "flex-start"
				| "flex-end"
				| "center"
				| "left"
				| "right"
				| "normal"
				| "baseline"
				| "first baseline"
				| "last baseline"
				| "space-between"
				| "space-around"
				| "space-evenly"
				| "strech";
			gap: string | number;
			fontFamily: string;
			fontSize: string;
			fontWeight: "normal" | "bold" | number;
			fontStyle: "normal" | "italic" | "oblique";
			tabSize: number | string;
			textAlign: "start" | "end" | "left" | "right" | "center" | "justify";
			textTransform: "none" | "lowercase" | "uppercase" | "capitalize";
			textOverflow: "wrap" | "ellipsis";
			textDecoration: string;
			textShadow: string;
			lineHeight: number | string;
			lineSpacing: string;
			whiteSpace: "normal" | "pre" | "pre-wrap" | "pre-line" | "nowrap";
			wordBreak: "normal" | "break-all" | "break-word" | "keep-all";
			textWrap: "wrap" | "balance";
			backgroundColor: string;
			backgroundImage: `${
				| "linear-gradient"
				| "radial-gradient"
				| "url"}(${string})`;
			backgroundPosition: string;
			backgroundSize: string;
			backgroundClip: "border-box" | "text";
			backgroundRepeat: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
			transform: string;
			transformOrigin: string;
			objectFit: "content" | "cover" | "none";
			opacity: number | `${number}%`;
			boxShadow: string;
			overflow: "visible" | "hidden";
			filter: string;
			clipPath: string;
			lineClamp: string;
			maskImage: `${"linear-gradient" | "radial-gradient" | "url"}(${string})`;
			maskPosition: string;
			maskSize: string;
			maskRepeat: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
		}>;
	}
}
