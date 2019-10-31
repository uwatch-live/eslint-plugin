# Enforce all buttons to have id (button-has-id)

This rules enforces an explicit `id` attribute for all the `button` elements.
Ids can be used in analytics utils like GA or Facebook pixel

## Rule Details

The following patterns are considered errors:

```jsx
var Hello = <button>Hello</button>

var Hello = React.createElement('button', {}, 'Hello')
```

The following patterns are **not** considered errors:

```jsx
var Hello = <span>Hello</span>
var Hello = <span id="foo">Hello</span>
var Hello = <button id="foo">Hello</button>

var Hello = React.createElement('span', {}, 'Hello')
var Hello = React.createElement('span', {id: 'foo'}, 'Hello')
var Hello = React.createElement('button', {id: 'bar'}, 'Hello')
```

## When Not To Use It

When application is not serving end-users(ex. dashboard)
