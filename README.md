# 3D Toggle Switch Component

A beautiful, accessible toggle switch component built with React. Features smooth animations, multiple themes, and full keyboard support.

![Toggle Demo](https://your-screenshot-url.png)

## Features

- 🎨 Multiple color themes (default green, blue, green)
- ♿ Fully accessible with ARIA support
- ⌨️ Keyboard navigation support
- 🎯 Smooth animations and hover effects
- 📱 Responsive design
- 🔧 Easy to customize
- 📦 Lightweight with no external dependencies

## Demo

Check out the [live demo](https://yourusername.github.io/toggle-switch-component) to see all the variants in action.

## Installation

```bash
npm install react-toggle-3d
# or
yarn add react-toggle-3d
```

## Basic Usage

```jsx
import React, { useState } from 'react';
import Toggle3D from 'react-toggle-3d';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div>
      <h3>Enable notifications</h3>
      <Toggle3D
        isOn={isEnabled}
        onChange={setIsEnabled}
      />
      <p>Status: {isEnabled ? 'ON' : 'OFF'}</p>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOn` | `boolean` | `false` | Current state of the toggle |
| `onChange` | `function` | - | Callback function called when toggle state changes |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `color` | `string` | `'default'` | Color theme (`'default'`, `'blue'`, or `'green'`) |
| `showIcons` | `boolean` | `false` | Whether to show checkmark and X icons |

## Examples

### Blue Theme
```jsx
<Toggle3D
  isOn={state}
  onChange={setState}
  color="blue"
/>
```

### Green Theme
```jsx
<Toggle3D
  isOn={state}
  onChange={setState}
  color="green"
/>
```

### With Icons
```jsx
<Toggle3D
  isOn={state}
  onChange={setState}
  showIcons
/>
```

### Disabled State
```jsx
<Toggle3D
  isOn={state}
  onChange={setState}
  disabled={true}
/>
```

## Styling

The component comes with default styles, but you can override them by targeting these CSS classes:

- `.toggle-3d` - Main container
- `.toggle-3d-knob` - The sliding knob
- `.toggle-3d.on` - Active state
- `.toggle-3d.disabled` - Disabled state

## Accessibility

This component follows WAI-ARIA guidelines:
- Uses `role="switch"` for proper screen reader support
- Supports keyboard navigation (Enter and Space keys)
- Provides `aria-checked` and `aria-disabled` attributes
- Includes focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To run the demo locally:

```bash
git clone https://github.com/yourusername/toggle-switch-component
cd toggle-switch-component
npm install
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]