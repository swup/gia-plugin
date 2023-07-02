# Swup Gia Plugin

A [swup](https://swup.js.org) plugin for integrating
[Gia](https://www.npmjs.com/package/gia) frontend components.

Automatically reloads components when required only for the replaced containers.

## Installation

Install the plugin from npm and import it into your bundle.

```bash
npm install @swup/gia-plugin
```

```js
import SwupGiaPlugin from '@swup/gia-plugin';
```

Or include the minified production file from a CDN:

```html
<script src="https://unpkg.com/@swup/gia-plugin@2"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupGiaPlugin()]
});
```

## Options

### components

Components to be used for mount/unmount. Defaults to an empty object.

```javascript
import Component from 'gia/Component'

class ExampleComponent extends Component {
    // ...
}

const components = {
  ExampleComponent
}

const swup = new Swup({
  plugins: [new SwupGiaPlugin({ components })]
})
```

### firstLoad

Whether the components should be loaded on start. Defaults to `true`.

```javascript
new SwupGiaPlugin({ firstLoad: true });
```

### log

Let Gia report info on mounting/unmounting of components. Corresponds to setting the `log` variable
of [Gia's config](https://github.com/giantcz/gia#config)). Defaults to `false`.

```javascript
new SwupGiaPlugin({ log: false });
```
