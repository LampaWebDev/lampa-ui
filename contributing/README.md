# Contributing to @lampa-ui

This docs describe how to contribute to project.

## New component creating

 - copy existed component from ```packages``` directory;
 - change ```package.json``` (name, dependencies etc);
 - change ```tsconfig.json``` and ```tsconfig.build.json``` (include, exlude options etc);
 - change ```tsup.config.ts```;

## New component development

- from root project directory run ```npm run dev``` script;
- in opened StoryBook development server select your component and start development;

## Component structure

Every part of component must be separate to own file and collect in ```YourComponent.tsx```.

For every component you must write tests, stories and demos.

> NOTE: files with tests, stories and demos must be added to ```exlude``` option of
> ```tsconfig.build.json```

## Documentation

Describe the documentation of implemented component in ```*root*/docs/src/content/docs``` directory.

> NOTE: Before each pull request, git hooks are run.
> **NEVER SKIP THIS STEP**!

## Recommended editor plugins

- [Plugins for ```*.astro``` syntax highlighting](https://docs.astro.build/en/editor-setup/);
- [eslint](https://eslint.org/docs/latest/use/integrations);
- [stylelint](https://stylelint.io/user-guide/customize/#using-stylelint);
- [prettier](https://prettier.io/docs/en/editors);
