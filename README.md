<p align="center">
  An opinionated template that will allow you to start a new React Native project quickly with TypeScript, Prettier, ESLint, and some custom configurations that will make development process better. 💖
</p>

<h1 align="center">Expo Bare TypeScript</h1>
<br>

Using [Expo 46](https://blog.expo.dev/expo-sdk-46-c2a1655f63f7). 

Please read [Starting React Native Project in 2022](https://dev.to/vladimirvovk/starting-a-react-native-project-in-2022-31m7) article for details. 

## Quick start

1. Install [Expo CLI](https://docs.expo.dev/get-started/installation/) with `npm install --global expo-cli` or `yarn global add expo-cli`.
2. Create new React Native project with `expo init --template @vladimir-vovk/expo-bare-typescript`.
3. Change directory to your project's folder with `cd <your-project-name>`.
4. Run Metro Bundler with `yarn start`.
5. Build and run the project with `yarn ios` or `yarn android`.

Happy hacking! 🤓

## Features

- [TypeScript](https://www.typescriptlang.org/).
- Absolute path imports (e.g. `import { ComponentA } from 'src/components/A'`).
- [Prettier](https://prettier.io/).
- Automaticaly sort imports on save.
- [Remove React imports](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
- Check code for errors with [TypeScript compiler](https://www.typescriptlang.org/tsconfig#noEmit) and [ESLint](https://eslint.org/).
- Generate changelog with [standard-version](https://github.com/conventional-changelog/standard-version).
- Lint commits with [Husky](https://github.com/typicode/husky).
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context).

## Available commands

- `yarn start` - start Metro Bundler.
- `yarn ios` - build and run iOS.
- `yarn android` - build and run Android.
- `yarn web` - run on web.
- `yarn lint` - check code for errors.
- `yarn release` - generate a changelog, bump the version of app and create a new tag.
