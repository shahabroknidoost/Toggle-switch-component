import React from 'react';
import './Toggle3D.css';

// Simple SVG icons
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14">
        <path 
            d="M20 6L9 17L4 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
        />
    </svg>
);

const CrossIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14">
        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

function Toggle3D({ 
  isOn, 
  onChange, 
  disabled = false, 
  color = 'default',
  showIcons = false
}) {
  // Build CSS classes
  const classes = [
    'toggle-3d',
    isOn && 'on',
    disabled && 'disabled',
    color !== 'default' && color,
    showIcons && 'with-icons'
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!isOn);
    }
  };

  // Keyboard support
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled}
    >
      <div className="toggle-3d-knob">
        {showIcons && (
          <div className="icon-container">
            <div className="icon-cross">
              <CrossIcon />
            </div>
            <div className="icon-check">
              <CheckIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Toggle3D;