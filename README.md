# ZachThomasAU's Bitburner Remote File API

A repository of public scripts for the Bitburner idle game. Forked from the official [bitburner typescript-template](https://github.com/bitburner-official/typescript-template).

## Prerequisites

[Node.js](https://nodejs.org/en/download/) is needed for compiling typescript and installing dependencies.

Alternatively see [Docker install guide](DockerGuide.md) (optional) that installs nodejs and the Remote File API in an isolated container.

## Quick start
```
npm i
npm run watch
```

NOTE: On first run you will get a warning that module "@ns" could not be found. This is fine and will be resolved after first sync.

### How to Sync with the game

1. Write all your typescript source code in the `/src` directory. I put my scripts in a `remote-api` folder, so my home directory in game is clean, and I can clearly distinguish between scripts written in game and in my local IDE.
1. To autocompile and send changed files as you save, run `npm run watch` in a terminal.
1. The command will log the port it is running on. Make a note of this.
1. In game click on the "Settings" button and then go to "Remote API". Put in the connection details and just like that you're in business! How easy!

## Advanced
### Imports

To ensure both the game and typescript have no issues with import paths, your import statements should follow a few formatting rules:

- Paths must be absolute from the root of `src/`, which will be equivalent to the root directory of your home drive
- Paths must contain no leading slash
- Paths must end with no file extension

NOTE: `import { NS } from "@ns";` will initially return a "No module found" type error. This is expected. Once you sync with the game for the first time this module will resolve.

### Debugging

For debugging bitburner on Steam you will need to enable a remote debugging port. This can be done by rightclicking bitburner in your Steam library and selecting properties. There you need to add `--remote-debugging-port=9222` [Thanks @DarkMio]

### Using React
Some `ns` functions, like [`ns.printRaw()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.printraw.md) allows you to render React components into the game interface. 

The game already exposes the `React` and `ReactDOM` objects globally, but in order to work with strongly typed versions in `.ts` files, you can use the included typings. To do this, use the following import:

`import React, { ReactDOM } from '@react'`

Support for jsx is also included, so if you use the `.tsx` file ending, you can do something like:

```ts
import { NS } from '@ns';
import React from '@react';

interface IMyContentProps {
  name: string
}

const MyContent = ({name}: IMyContentProps) => <span>Hello {name}</span>;

export default async function main(ns: NS){
  ns.printRaw(<MyContent name="Your name"></MyContent>);
}
```
