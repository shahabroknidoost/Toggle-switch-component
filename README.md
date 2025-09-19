# TOGGLE-SWITCH-COMPONENT

Transform interfaces with seamless, frontEnd Control

**Built with the latest web technologies**

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Why Toggle Switch Component?](#why-toggle-switch-component)
- [Features](#features)
- [Examples](#examples)
- [Styling & Customization](#styling--customization)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Toggle-switch-component is a React-based UI library that offers a customizable, accessible toggle switch for modern web applications. Designed for seamless integration, it enables developers to create interactive on/off controls with elegant ease, icons, and color variations.

### Why toggle switch component?

This project simplifies the creation of consistent toggle controls within React apps. The core features include:

- **🎨 Color & Icon Customization:** Easily style toggles with different colors and icons to match your design system
- **⚡ Fast Development Environment:** Powered by Vite, supporting rapid builds and hot module replacement for efficient iteration
- **♿ Reusable & Accessible:** Built with accessibility in mind, ensuring inclusive user interactions
- **✅ Code Quality & Standards:** ESLint configuration enforces best practices for a reliable codebase
- **🚀 Interactive Demos:** Showcases various toggle configurations to help you explore component capabilities

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

**Programming Language:** JavaScript  
**Package Manager:** Npm

### Installation

Build toggle-switch-component from the source and install dependencies:

1. **Clone the repository:**
```bash
git clone https://github.com/shahabroknidoost/toggle-switch-component
```

2. **Navigate to the project directory:**
```bash
cd toggle-switch-component
```

3. **Install the dependencies:**

Using **npm:**
```bash
npm install
```

---

## Usage

Run the project with:

Using **npm:**
```bash
npm run dev
```

### Basic Implementation

```jsx
import React, { useState } from 'react';
import Toggle3D from './Toggle3D';

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

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOn` | `boolean` | `false` | Current state of the toggle |
| `onChange` | `function` | - | Callback function called when toggle state changes |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `color` | `string` | `'default'` | Color theme (`'default'`, `'blue'`, or `'green'`) |
| `showIcons` | `boolean` | `false` | Whether to show checkmark and X icons |

---

## Examples

### Default Toggle
```jsx
<Toggle3D
  isOn={state}
  onChange={setState}
/>
```

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

---

## Styling & Customization

The component comes with default styles, but you can override them by targeting these CSS classes:

- `.toggle-3d` - Main container
- `.toggle-3d-knob` - The sliding knob
- `.toggle-3d.on` - Active state
- `.toggle-3d.disabled` - Disabled state
- `.toggle-3d.blue` - Blue theme
- `.toggle-3d.green` - Green theme

### Custom CSS Example
```css
.toggle-3d {
  /* Override default styles */
  border-radius: 25px;
}

.toggle-3d.custom-theme.on {
  background: #your-color;
}
```

---

## Accessibility

This component follows WAI-ARIA guidelines and web accessibility standards:

- **Keyboard Navigation:** Supports Enter and Space key interactions
- **Screen Reader Support:** Uses `role="switch"` for proper announcement
- **ARIA Attributes:** Includes `aria-checked` and `aria-disabled` attributes
- **Focus Management:** Visible focus indicators for keyboard users
- **Color Contrast:** Meets WCAG color contrast requirements

---

## Testing

Toggle-switch-component uses the **Jest** test framework. Run the test suite with:

Using **npm:**
```bash
npm test
```

---

## Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

---

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test them
4. Run the development server: `npm run dev`
5. Submit a pull request

### Development Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm test        # Run test suite
npm run lint    # Run ESLint
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contribution Guidelines

1. Ensure your code follows the existing style
2. Add tests for new features
3. Update documentation as needed
4. Make sure all tests pass

---

## License

MIT © [Shahab Roknidoost](https://github.com/shahabroknidoost)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**⭐ Star this repository if it helped you!**
