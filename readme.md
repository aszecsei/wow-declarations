[![npm version](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations.svg)](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations)
[![Build Status](https://travis-ci.org/wartoshika/wow-declarations.svg?branch=master)](https://travis-ci.org/wartoshika/wow-declarations)

# Typescript declarations for the current live World of Warcraft LUA API

> WoW Classic developers should use the [wow-classic-declarations](https://github.com/wartoshika/wow-classic-declarations) repository.

**Supported transpilers for LUA targets**:
- qhun-transpiler ([GitHub-Page](https://github.com/wartoshika/qhun-transpiler))
- TypescriptToLua ([GitHub-Page](https://github.com/TypeScriptToLua/TypeScriptToLua)) - *Thanks to tstirrat*

## Setup

Installing this dependency via

- `$ npm install @wartoshika/wow-declarations@8.3.0-release.1` (npm repository installation)
- `$ npm install wartoshika/wow-declarations#v8.3.0-release.1` (github repository installation)

> I strongly recommend to use a version tag when using github based install. Referencing the master branch can result in installing a breaking change. Github based installations need a prefixing `v` in the version number!

Please add the wow-declarations path to your `tsconfig.json` compiler options like below:

```js
{
    "compilerOptions": {
        // ...
        "typeRoots": [
            "./node_modules/@types",
            "./node_modules/@wartoshika/wow-declarations"
        ]
    }
}
```

## Changes

### **Sat. 08 2020 - v8.3.0-release.1**

- Merging PR #11 wich add/remove functions that are present in the WoW API release 8.3.

**Breaking changes for classic addons**

- If you are using this dependency to develop WoW classic addons, make sure to use the dedicated repository [wow-classic-declarations](https://github.com/wartoshika/wow-classic-declarations). I think that this is a good decision since the two WoW versions may drifting apart.

### **Nov. 24 2019 - v8.2.5-release.2**

**Breaking changes** - Incomtabible with version `v8.2.5-release.1`

- Object declarations are now namespaced and can be imported into your file. (PR #10)
- I strongly recommend using npm packages with a fix version number or referencing the version tag when installing this dependency. See [setup](#Setup).

### **Oct. 5 2019 - v8.2.5-release.1**

- Version numbers now indicates wich WoW Addon api version is supported (closes #9)

## Contribution

If you want to contribute, please provide a pull request and ensure that you linted your changes with `npm run lint` or try to autofix the errors with `npm run lint:fix`. I appreciate your help!
