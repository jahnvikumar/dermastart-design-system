import React from 'react';

/**
 * DermaStart Badge / Tag component
 * Standard: blush bg, slate text | Trust: sage icon + text | Status: error/success
 */
export function Badge({
  variant = 'default',
  children,
  icon,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '4px 12px',
    lineHeight: 1.4,
  };

  const variants = {
    default: {
      background: '#E8D5C4',
      color: '#2C3A3A',
      border: 'none',
    },
    trust: {
      background: 'transparent',
      color: '#2C3A3A',
      border: 'none',
      fontWeight: 500,
      letterSpacing: '0.01em',
      textTransform: 'none',
      fontSize: '13px',
      padding: '0',
    },
    featured: {
      background: '#C9A882',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '20px',
      padding: '4px 16px',
    },
    error: {
      background: 'rgba(192,96,90,0.1)',
      color: '#C0605A',
      border: '1px solid rgba(192,96,90,0.25)',
    },
    success: {
      background: 'rgba(90,138,114,0.1)',
      color: '#5A8A72',
      border: '1px solid rgba(90,138,114,0.25)',
    },
  };

  const style = { ...base, ...variants[variant] };

  const sageSVG = React.createElement('svg', {
    width: 14,
    height: 14,
    fill: 'none',
    stroke: '#7A9E9F',
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  }));

  return React.createElement('span', { style }, [
    variant === 'trust' && sageSVG,
    icon && variant !== 'trust' && icon,
    children,
  ].filter(Boolean));
}
