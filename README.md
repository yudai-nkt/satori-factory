# Satori Factory

Tiny yet full-fledged JSX factory for [Satori](https://github.com/vercel/satori).

```tsx
/** @jsxImportSource satori-factory */
import satori from "satori";

const svg = await satori(<div>Hello, Satori Factory!</div>, {
  height: 630,
  width: 1200,
  fonts: [
    /* your fonts data here */
  ],
});
```

## Features

- ***Featherlight*** &mdash; Satori Factory has zero dependencies and can be minified to less than 0.3kB.
- ***Function component*** &mdash; You can define reusable components much like React.
- ***Fine-tuned TypeScript support*** &mdash; Give unsupported CSS properties and you will get warned.

## Installation

This package is available on NPM registry.
You can install `satori-factory` using a package manager of your preference.

## Usage

Satori Factory supports the newer JSX transformation, so you need to configure `tsconfig.json` accordingly.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "satori-factory"
  },
}
```

ESBuild picks up these compiler options automatically, so the above setup should suffice in major Vite-powered frameworks.

You can also specify JSX import source on a per-file basis.
See [TSConfig reference](https://www.typescriptlang.org/tsconfig#jsxImportSource) for details.

## FAQ
### Why not React?

If you already use React in your project, this package is probably not for you.

### What's the motivation behind this package then?

The primary usecase is non-React framework such as Astro or SvelteKit.
When you want to use Satori with these frameworks, you have to [use object literals](https://github.com/vercel/satori#use-without-jsx) instead of JSX expressions, which is quite cumbersome.
Of course you can install React as an additional dependency but using React only for Satori might be a sledgehammer for a nut if you don't use it in the main part of your application.
In addition to that, reducing server-side bundle size is becoming more important than ever due to the tight restriction in the emerging CDN edge computing platforms.

Satory Factory is here to help you fill this gap.
It offers the ergonomics of JSX to Satori users while incurring as small build footprint as possible.

## License

This package is release under the MIT License.
See [LICENSE.md](./LICENSE.md) for details.
