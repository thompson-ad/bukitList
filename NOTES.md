# Creating Bukit List

## Scaffolding Our Project

Our browser requests an `index.html` file when accessing our application. It
specifies all of the files that are required and need to be downloaded.

The `div` tag included in the body is the DOM node where are react application
will be rendered by react DOM.

The `src/` folder is where our applications will be built from. It contains the
`client` and the `server` directories.

To get the react app bundled up and built, we will need to set up webpack and
our build process.

## Setting Up Our Static Testing

Here we will add a bunch of dev-dependencies for linting, formatting and
type-checking our application.

### ESLint

1. `npm install --sev-dev eslint`

2. `touch .eslintrc`

Be sure to have the eslint plugin for VSCode installed. This way you will see
where you are breaking the rules before you run any scripts.

3. `"lint": "eslint --ignore-path .gitignore ."`

### Prettier

1. `npm install --save-dev prettier`.

2. script `"format": ""`

3. `.prettierrc` prettier.io playground. - the format script will pick up this

4. Prettier plugin

```JSON
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
```

5. Sometimes ESlint and Prettier clash. Say for example you have 1 extra
   semicolon. ESLint would underline it but prettier would fix it anyway.

   `npm install --save-dev eslint-config-prettier`

#### Validate Script

A way to check your project is in a good state.

### TypeScript

1. `npm install --save-dev typescript`

2. tsc will be in the bin

3. we can use the typescript compiler to verify the types in our project

4. `touch tsconfig.json`.

5. `"check-types": ""`

6. configure TS with ESLint -
   `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser`

### Husky

1. `npm install --save-dev husky`

2. `touch .huskyrc`

### Lint-staged

1. `npm install --save-dev lint-staged`
2. `touch .lintstagedrc`

### npm run all

1. `npm install --save-dev npm-run-all`

note: `node -v > .nvmrc` to add an .nvmrc
