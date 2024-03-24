/** @jsxImportSource . */
import { describe, expect, test } from "vitest";
import type { FC } from ".";

describe("intrinsic element", () => {
	test("single element", () => {
		expect(<div>foo</div>).toStrictEqual({
			type: "div",
			props: { children: "foo" },
		});
	});

	test("single element with a style", () => {
		expect(<div style={{ color: "black" }}>foo</div>).toStrictEqual({
			type: "div",
			props: { children: "foo", style: { color: "black" } },
		});
	});

	test("nested elements", () => {
		expect(
			<div>
				<span>foo</span>
			</div>,
		).toStrictEqual({
			type: "div",
			props: { children: { type: "span", props: { children: "foo" } } },
		});
	});

	test("more than one children", () => {
		expect(
			<div>
				foo<span>bar</span>
			</div>,
		).toStrictEqual({
			type: "div",
			props: {
				children: ["foo", { type: "span", props: { children: "bar" } }],
			},
		});
	});
});

describe("custom component", () => {
	test("component without props", () => {
		const Hello = () => <div>Hello world!</div>;
		expect(<Hello />).toStrictEqual({
			type: "div",
			props: { children: "Hello world!" },
		});
	});

	test("component with props", () => {
		const Greeting: FC<{ name: string }> = ({ name }) => <div>Hi, {name}!</div>;
		expect(<Greeting name="Alice" />).toStrictEqual({
			type: "div",
			props: { children: "Hi, Alice!" },
		});
	});
});
