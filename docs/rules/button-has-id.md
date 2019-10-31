# Enforce all buttons to have id (button-has-id)

This rules enforces an explicit `id` attribute for all the `button` elements.
Ids can be used in analytics utils like GA or Facebook pixel

## Rule Details

The following patterns are considered errors:

```jsx
<button>Hello</button>

React.createElement('button', {}, 'Hello')
```

The following patterns are **not** considered errors:

```jsx
<span>Hello</span>
<span id="foo">Hello</span>
<button id="foo">Hello</button>

React.createElement('span', {}, 'Hello')
React.createElement('span', {id: 'foo'}, 'Hello')
React.createElement('button', {id: 'bar'}, 'Hello')
```

## When Not To Use It

When application is not serving end-users(ex. dashboard)
