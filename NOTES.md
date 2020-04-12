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

### NVM

note: `node -v > .nvmrc` to add an .nvmrc

## Configuring the Bundling and Transpiling with Webpack and Babel.

We will use Babel to transform typescript to plain javascript and use typescript
for type checking.

Webpack is for bundling and deploying our application.

https://stackoverflow.com/questions/46337918/difference-between-webpack-babel-and-react-scripts

Webpack and babel solve different purposes and usually show up together.

### Babel

Babel is a transpiler. It can translate all kinds of high version ECMAScript
into ES5, which is more widely supported by browsers. It's main job is to turn
unsupported or cutting-edge language features into ES5.

### Webpack

Webpack is, among other things, a dependency analyzer and module bundler. For
example, if module A requires B as a dependency, and module B requires C as a
dependency, then webpack will generate a dependency map like C -> B -> A. In
practice it is much more complicated than this, but the general concept is that
Webpack packages modules with complex dependency relationships into bundles.
Regarding webpack's relationship with babel: When webpack processes
dependencies, it must turn everything into javascript because webpack works on
top of javascript. As a result, it uses different loaders to translate different
types of resources/code into javascript. When we need ES6 or ES7 features, we
use babel-loader to accomplish this.

### React Scripts

when we start a react-based project, setting up the build environment is tough
and time-consuming work. To help with this, the developers of React created an
npm package called react-scripts that includes a lot of the basic setup most
people will need for an average React app. Babel and webpack are included as
dependencies in react-scripts

### Configuring Webpack

Webpack prepares and bundles all of our applications assets. All of the required
javascript files and node modules are bundled and minified; SASS and SCSS
preprocessors are transpiled as well as being merged and minified.

First let's install webpack and the different loaders we will need.

`npm install --save-dev webpack webpack-cli babel-loader css-loader file-loader style-loader`

Inside `module.rules`, we match our file extensions with the correct loaders.

All TypeScript (and JavaScript Files) files, except those in `node_modules`, are
transpiled by babel, specified by the babel-loader.

CSS Get's handled by style loaders and css loaders.

Font files or svg files get handled by the file loader.

Let's also install `webpack-dev-server`. This is a feature of webpack that will
allow us to run the react app directly. It includes, hot reloading code in the
browser without having to build or refresh.

and these plugins:

`npm install --save-dev html-webpack-plugin clean-webpack-plugin`

- html-webpack-plugin automatically generates an HTML file that includes all of
  the webpack bundles.

- clean-webpack-plugin - cleans up old build files in dist.

### Configuring Babel

First installing core babel:

`npm install --save-dev @babel/core @babel/cli @babel/polyfill`

Install the babel preset for env, typescript and react :

`npm install --save-dev @babel/preset-typescript @babel/preset-env @babel/preset-react`

Install Plugins:

Transform Runtime A plugin that enables the re-use of Babel's injected helper
code to save on codesize.

`npm install --save-dev @babel/plugin-transform-runtime`
`npm install --save @babel/runtime`

Some stuff for react:

`npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread`

create a `.babelrc`

### Let's get typescript working

https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

(but we aren't going to use the ts-loader or the source map loader)

`npm install --save react react-dom`

`npm install --save-dev @types/react @types/react-dom`
