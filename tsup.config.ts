import type { Options } from "tsup";

export default {
	entry: ["src/*.ts"],
	clean: true,
	dts: true,
	format: "esm",
	target: "es2022",
	splitting: false,
} satisfies Options;
