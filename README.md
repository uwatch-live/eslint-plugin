# eslint-plugin-uwatch

uWatch set of eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add -D eslint
```

Next, install `@uwatch/eslint-plugin`:

```
$ yarn add -D @uwatch/eslint-plugin
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

Then add `recommended` to your config list

```json
{
    "extends": [
      "plugin:@uwatch/recommended"
    ]
}
```

## Supported Rules

* [@uwatch/button-has-id](docs/rules/button-has-id.md): Enforces `button` to have `id` attribute





