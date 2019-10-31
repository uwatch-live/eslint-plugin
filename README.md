# eslint-plugin-uwatch

Uwatch set of eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-uwatch`:

```
$ npm install eslint-plugin-uwatch --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-uwatch` globally.

## Usage

Add `uwatch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "uwatch"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "uwatch/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





