import React from 'react';

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, disabled, required }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: 6, color: 'var(--muted)' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #e5e7eb' }}
      />
    </div>
  );
};

export default InputField;