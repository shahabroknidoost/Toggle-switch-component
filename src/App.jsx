// App.js - with more natural development patterns

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Toggle3D from './Toggle3D';
import './App.css';

// Code examples for the demos
// TODO: maybe extract this to a separate file if it gets bigger
const examples = {
  basic: `<Toggle3D
  isOn={state}
  onChange={setState}
/>`,
  
  blue: `<Toggle3D
  isOn={state}
  onChange={setState}
  color="blue"
/>`,
  
  disabled: `<Toggle3D
  isOn={state}
  onChange={setState}
  disabled={true}
/>`,
  
  icons: `<Toggle3D
  isOn={state}
  onChange={setState}
  showIcons
  color="green"
/>`
};

const usageExample = `import React, { useState } from 'react';
import Toggle3D from './Toggle3D';

function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div>
      <h3>Enable notifications</h3>
      <Toggle3D
        isOn={isEnabled}
        onChange={setIsEnabled}
      />
    </div>
  );
}`;

const installInstructions = `npm install react-toggle-3d
# or
yarn add react-toggle-3d`;

function App() {
  // State for each toggle demo
  const [basicState, setBasicState] = useState(false);
  const [blueState, setBlueState] = useState(true);
  const [disabledState, setDisabledState] = useState(false);
  const [iconState, setIconState] = useState(false);
  
  // Control for the disabled demo
  const [enableDisabledToggle, setEnableDisabledToggle] = useState(false);

  const handleDisabledToggleChange = (checked) => {
    setEnableDisabledToggle(checked);
  };

  return (
    <div className="app">
      <h1>React toggle componenth</h1>
      <p></p>
      
      <div className="component-grid">
        
        <div className="component-card">
          <div className="component-card-content">
            <h2>Default Toggle</h2>
            <p>Basic toggle with smooth animations</p>
            <div className="toggle-container">
              <Toggle3D 
                isOn={basicState} 
                onChange={setBasicState} 
              />
            </div>
            <div className="status-text">
              Status: <strong>{basicState ? 'ON' : 'OFF'}</strong>
            </div>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={oneLight}>
              {examples.basic}
            </SyntaxHighlighter>
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-card-content">
            <h2>Blue Theme</h2>
            <p>Alternative color scheme</p>
            <div className="toggle-container">
              <Toggle3D 
                isOn={blueState} 
                onChange={setBlueState} 
                color="blue" 
              />
            </div>
            <div className="status-text">
              Status: <strong>{blueState ? 'ON' : 'OFF'}</strong>
            </div>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={oneLight}>
              {examples.blue}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="component-card">
          <div className="component-card-content">
            <h2>Disabled State</h2>
            <p>Toggle can be disabled</p>
            <div className="toggle-container">
              <Toggle3D 
                isOn={disabledState} 
                onChange={setDisabledState} 
                disabled={!enableDisabledToggle}
              />
            </div>
            <div className="status-text">
              Status: <strong>{!enableDisabledToggle ? 'DISABLED' : (disabledState ? 'ON' : 'OFF')}</strong>
            </div>
            <div className="control-section">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={enableDisabledToggle} 
                  onChange={(e) => handleDisabledToggleChange(e.target.checked)}
                />
                <span>Agree to Terms and Conditions</span>
              </label>
            </div>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={oneLight}>
              {examples.disabled}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="component-card">
          <div className="component-card-content">
            <h2>With Icons</h2>
            <p>Shows check/X icons</p>
            <div className="toggle-container">
              <Toggle3D 
  isOn={iconState} 
  onChange={setIconState} 
  showIcons
  color="green"
/>
            </div>
            <div className="status-text">
              Status: <strong>{iconState ? 'ON' : 'OFF'}</strong>
            </div>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={oneLight}>
              {examples.icons}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="component-card full-width">
          <div className="component-card-content">
            <h2>Installation</h2>
            <p>Install via npm</p>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="bash" style={oneLight}>
              {installInstructions}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="component-card full-width">
          <div className="component-card-content">
            <h2>Usage</h2>
            <p>Basic implementation example</p>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={oneLight}>
              {usageExample}
            </SyntaxHighlighter>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;