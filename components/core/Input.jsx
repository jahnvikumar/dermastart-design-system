import React from 'react';

/**
 * DermaStart Input component
 * Text input with label, helper text, and error/focus states.
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helper,
  disabled = false,
  required = false,
}) {
  const [focused, setFocused] = React.useState(false);

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    color: '#2C3A3A',
    marginBottom: '6px',
    letterSpacing: '0.02em',
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    background: '#FFFFFF',
    border: error
      ? '1.5px solid #C0605A'
      : focused
      ? '1.5px solid #C9A882'
      : '1px solid #E8D5C4',
    borderRadius: '4px',
    padding: '12px 16px',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '15px',
    fontWeight: 400,
    color: '#2C3A3A',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
    boxShadow: focused && !error ? '0 0 0 3px rgba(201,168,130,0.15)' : 'none',
    opacity: disabled ? 0.55 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const helperStyle = {
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '12px',
    fontWeight: 400,
    color: error ? '#C0605A' : '#8A8078',
    marginTop: '5px',
    display: 'block',
  };

  return React.createElement('div', { style: { width: '100%' } }, [
    label && React.createElement('label', { key: 'label', htmlFor: id, style: labelStyle }, [
      label,
      required && React.createElement('span', { key: 'req', style: { color: '#C0605A', marginLeft: 3 } }, '*'),
    ]),
    React.createElement('input', {
      key: 'input',
      id,
      type,
      placeholder,
      value,
      onChange,
      disabled,
      required,
      style: inputStyle,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    }),
    (helper || error) && React.createElement('span', { key: 'helper', style: helperStyle }, error || helper),
  ].filter(Boolean));
}
