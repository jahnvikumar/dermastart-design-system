import React from 'react';

/**
 * DermaStart Card component
 * Standard: parchment bg, blush border, shadow-1
 * Feature: white bg, no border, left-accent on hover
 * Stat: centered display stat
 * Inverse: slate bg for dark sections
 */
export function Card({
  variant = 'standard',
  padding = 'md',
  hover = true,
  onClick,
  href,
  children,
  style: extraStyle,
}) {
  const padMap = { sm: '20px', md: '32px', lg: '48px' };
  const pad = padMap[padding] || padMap.md;

  const [hovered, setHovered] = React.useState(false);

  const base = {
    borderRadius: '6px',
    padding: pad,
    textDecoration: 'none',
    display: 'block',
    transition: 'box-shadow 200ms ease, transform 200ms ease, border-left 200ms ease',
    cursor: onClick || href ? 'pointer' : 'default',
    position: 'relative',
    overflow: 'hidden',
  };

  const variants = {
    standard: {
      background: '#FAF7F4',
      border: '1px solid #E8D5C4',
      boxShadow: hovered && hover ? '0 6px 24px rgba(44,58,58,0.10)' : '0 2px 12px rgba(44,58,58,0.06)',
      transform: hovered && hover ? 'translateY(-3px)' : 'translateY(0)',
      borderLeft: hovered && hover ? '3px solid #C9A882' : '1px solid #E8D5C4',
    },
    feature: {
      background: '#FFFFFF',
      border: 'none',
      boxShadow: hovered && hover ? '0 6px 24px rgba(44,58,58,0.10)' : 'none',
      transform: hovered && hover ? 'translateY(-3px)' : 'translateY(0)',
      borderLeft: hovered && hover ? '3px solid #C9A882' : '3px solid transparent',
    },
    stat: {
      background: '#FAF7F4',
      border: '1px solid #E8D5C4',
      boxShadow: '0 2px 12px rgba(44,58,58,0.06)',
      textAlign: 'center',
    },
    inverse: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(232,213,196,0.12)',
      boxShadow: 'none',
      transform: hovered && hover ? 'translateY(-3px)' : 'translateY(0)',
    },
  };

  const style = { ...base, ...variants[variant], ...extraStyle };

  const props = {
    style,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
  };

  if (href) {
    return React.createElement('a', { ...props, href }, children);
  }
  return React.createElement('div', props, children);
}
