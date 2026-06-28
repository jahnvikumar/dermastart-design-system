import React from 'react';

/**
 * DermaStart Button component
 * Primary: filled Dune CTA | Secondary: outlined Deep Slate | Ghost: text-only Dune link
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  href,
  type = 'button',
}) {
  const base = {
    display: 'inline-block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 200ms ease, color 200ms ease, box-shadow 200ms ease',
    textAlign: 'center',
    width: fullWidth ? '100%' : undefined,
    lineHeight: 1,
  };

  const padding = size === 'sm' ? '10px 20px' : size === 'lg' ? '16px 40px' : '14px 32px';

  const variants = {
    primary: {
      background: '#C9A882',
      color: '#FFFFFF',
      border: 'none',
      padding,
    },
    secondary: {
      background: 'transparent',
      color: '#2C3A3A',
      border: '1.5px solid #2C3A3A',
      padding: size === 'sm' ? '9px 19px' : size === 'lg' ? '15px 39px' : '13px 31px',
    },
    ghost: {
      background: 'transparent',
      color: '#C9A882',
      border: 'none',
      padding: '0',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0',
      textTransform: 'none',
      textDecoration: 'none',
    },
  };

  const style = { ...base, ...variants[variant] };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = '#B5935F';
    if (variant === 'secondary') {
      e.currentTarget.style.background = '#2C3A3A';
      e.currentTarget.style.color = '#FFFFFF';
    }
    if (variant === 'ghost') e.currentTarget.style.textDecoration = 'underline';
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = '#C9A882';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#2C3A3A';
    }
    if (variant === 'ghost') e.currentTarget.style.textDecoration = 'none';
  };

  const handleMouseDown = (e) => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  if (href) {
    return React.createElement('a', {
      href: disabled ? undefined : href,
      style,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    }, children);
  }

  return React.createElement('button', {
    type,
    disabled,
    style,
    onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  }, children);
}
