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

add some essential plugins:

https://medium.com/better-programming/4-essential-eslint-plugins-you-need-in-your-react-setup-824b419ce598

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

## Configure Jest and our Testing Env

First off, we will need to install jest.

`npm install --save-dev jest`

jest looks for `__tests__` so we need to add this. Let's add one to the client
code for now. It's best to include your tests as close to the code that your
testing as possible.

Add the jest testing script. and run and it should pass.

get your validate script to also run testing.

### ISSUE - modules

jest runs in node but node does not support import statements.

By default, if jest sees a babel config, it will use that to transform your
files. So, seeing as jest automatically sets our environment to test we can test
for that and say that if the environment is test, compile the modules to
commonjs, if not, let webpack handle it.

https://dev.to/jnielson01/demystifying-babel-preset-env-3h88

For those that use webpack to bundle your code, you'll want to set modules:
false in order to allow webpack's cool features like tree shaking to work. If
you don't set modules: false, babel will transform the import/export statements
into require/module.exports statements (aka not ES6 modules), which webpack
can't statically analyze.

### Jest config

- set the jest environment in the config. (jest-environment-jsdom
  jest-environment-node are node modules)

### testing library react

`npm install --save-dev @testing-library/react`

### Issue -- css

add a module name mapper object to your jest configuration.

now any file that ends in css will map to an empty object.

This is fine for us as testing css is pretty uncommon anyway.

### Issue -- css modules

`npm install --save-dev identity-obj-proxy`

we will use identity obj proxy as our mock module for css modules.

It's important the css modules are handled first and that any other css in
handled by the regular style mock.

### handle the css props from emotion

`npm install --save-dev jest-emotion` - this is a snapshot serialiser.

now any domnode that is using an emotion css classname will have `emotion-0`
appear above the serialised DOM.

### Issue - importing things like node_modules

Inform jest that you want to handle modules resolving in the same way that
webpack does.

### For some nicer assertions

`npm install --save-dev @testing-library/jest-dom`

To have these nicer assertions available in all our tests, add them to the
jestconfig.

When using the thing were you can treat files like node modules you may get some
eslint errors:

`npm install --save-dev eslint-import-resolver-jest`

Do the same for node and webpack too

`npm install --save-dev eslint-import-resolver-node`
`npm install --save-dev eslint-import-resolver-webpack`

### jest watch

add jest watch script

### debugger

add a test:debug script

go to chrome://inspect and you will see the debugger session spawned.

### coverage

add --coverage, the files you want covered and coverage thresholds.

you can specify global and globs for specific files.

### CI with travis and CodeCov

- come back to this but can setup these up together

### set up different environment for serverside and client side

jest-common, client and server and global

### ISSUE - shit load of test scripts

We can avoid this as jest supports running multiple configurations in a single
test run.

Use projects in the global config

### jest is not just gor testing

it can run all sorts of tasks in parallel, for example, it can handle our
linting.

you now don't need to run testing separately from linting it all happens in one.

`npm install --save-dev jest-runner-eslint`
