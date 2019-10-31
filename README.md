# eslint-plugin-uwatch

uWatch set of eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add -D eslint
```

Next, install `eslint-plugin-uwatch`:

```
$ yarn add -D eslint-plugin-uwatch
```

## Usage

Add `uwatch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@uwatch"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@uwatch/rule-name": 2
    }
}
```

## Supported Rules

* [@uwatch/button-has-id](docs/rules/button-has-id.md): Enforces `button` to have `id` attribute





