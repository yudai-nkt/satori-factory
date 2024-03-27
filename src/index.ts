export type FC<P extends Record<string, unknown> = Record<string, unknown>> = (
	props: P,
) => JSX.Element;
