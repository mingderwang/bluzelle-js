# Installation

## NPM

The recommended way of getting bluzelle-js is through the npm package manager. Simply run `npm install bluzelle` and require it in your project with `require('bluzelle');`.

The NPM release reflects the bluzelle-js master branch.

## Building from source

If you are interested in a cutting-edge build of bluzelle-js, or wish to use alternate feature branches, you will have to build from source. This process is very easy.

1. Clone the [bluzelle-js repository](https://github.com/bluzelle/bluzelle-js) and checkout your desired branch. Run `git submodule init` and `git submodule update`. If you checkout to a new branch, be sure to rerun `git submodule update`. 
2. Compile BluzelleESR 
   1. `cd BluzelleESR`
   2. `npm install`
   3. `npm run truffle compile`
   4. `cd ..` 
3. Run `npm install` to fetch the project's dependencies.
4. Run `npx webpack` to build the library. The bundled versions, for browser and node environments, will be found in the `dist/` directory.

{% hint style="info" %}
If you encounter errors during the build, try running `npm i --save websocket`.
{% endhint %}

## Linking from source

Once you have a build, you probably want to use it in a JavaScript project. We will show how to use `npm link` to achieve this goal.

1. In your bluzelle-js directory, run `npm link` to create a package link.
2. In your other project directory, run `npm link bluzelle`.

Now you will be able to use your custom-built version of bluzelle-js exactly the same as if you had downloaded it off NPM.

