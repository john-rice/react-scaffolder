# React Scaffolder
> Yeoman generator for scaffolding new React applications.

[![npm](https://img.shields.io/npm/v/generator-react-scaffolder.svg)](https://www.npmjs.com/package/generator-react-scaffolder)
[![build](https://github.com/dzervoudakes/react-scaffolder/workflows/Build%20and%20Test%20Generator/badge.svg)](https://github.com/dzervoudakes/react-scaffolder/actions)
[![codecov](https://codecov.io/gh/dzervoudakes/react-scaffolder/branch/main/graph/badge.svg)](https://codecov.io/gh/dzervoudakes/react-scaffolder)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/react-scaffolder/blob/main/LICENSE)

## A Homegrown React Template Generator

While tools like Create React App and Next are objectively awesome, over time I've decided that I want to learn more about the engine behind the application. As such, I started crafting and evolving my own React + Webpack configuration over time as a learning experience.

I have since decided to share my work with the open source community. Love it or loathe it, I will not be happy or offended either way. 😄

## Using the Generator

This scaffolding tool is a [yeoman](https://yeoman.io/) generator, and requires that `yo` be installed. After installing `yo`, run the following commands.

### Install the Generator

NPM

```
npm install -g generator-react-scaffolder
```

Yarn

```
yarn global add generator-react-scaffolder
```

### Scaffold a New React Template

To begin the scaffolding process:

```
yo react-scaffolder
```

At this stage, you will be prompted to provide the following:
- Application name, any text of your choosing
- Yarn, yes or no

### With Options

Generate with TypeScript:

```
yo react-scaffolder --typescript

// alternatively
yo react-scaffolder --ts
```

The generator will attempt to install dependencies for you by default, though this operation can be disabled:

```
yo react-scaffolder --skip-install
```

### What's Included

- **Rendering:** client-side only
- **Syntax:** react, js, jsx, ts, tsx, mjs
- **Tooling:** eslint, stylelint, editorconfig, babel (non-TypeScript template only)
- **Styling:** scss, css, postcss, css module syntax (`*.module.scss` and `*.module.css` nomenclature supported)
- **Testing:** jest, react testing library
- **Build instructions:** provided via the `README.md` file generated with each new scaffold
