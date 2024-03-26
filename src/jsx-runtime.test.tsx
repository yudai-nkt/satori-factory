/** @jsx h */
import { deepEqual } from "node:assert/strict";
import { describe, test } from "node:test";
import type { FC } from "./index.js";
import { jsx } from "./jsx-runtime.js";

/** Classic JSX factory to work around the incompatibility between
 *  relative `@jsxImportSource` pragma and `node16` module resolution.
 */
const h = (
	tag: string | ((props: JSX.Element["props"]) => JSX.Element),
	props: Omit<JSX.Element["props"], "children">,
	...children: (string | JSX.Element)[]
) => jsx(tag, { ...props, children });

describe("intrinsic element", () => {
	test("single element", () => {
		deepEqual(<div>foo</div>, {
			type: "div",
			props: { children: "foo" },
		});
	});

	test("single element with a style", () => {
		deepEqual(<div style={{ color: "black" }}>foo</div>, {
			type: "div",
			props: { children: "foo", style: { color: "black" } },
		});
	});

	test("nested elements", () => {
		deepEqual(
			<div>
				<span>foo</span>
			</div>,
			{
				type: "div",
				props: { children: { type: "span", props: { children: "foo" } } },
			},
		);
	});

	test("more than one children", () => {
		deepEqual(
			<div>
				foo<span>bar</span>
			</div>,
			{
				type: "div",
				props: {
					children: ["foo", { type: "span", props: { children: "bar" } }],
				},
			},
		);
	});
});

describe("custom component", () => {
	test("component without props", () => {
		const Hello = () => <div>Hello world!</div>;
		deepEqual(<Hello />, {
			type: "div",
			props: { children: "Hello world!" },
		});
	});

	test("component with props", () => {
		const Greeting: FC<{ name: string }> = ({ name }) => <div>Hi, {name}!</div>;
		deepEqual(<Greeting name="Alice" />, {
			type: "div",
			props: { children: "Hi, Alice!" },
		});
	});
});
