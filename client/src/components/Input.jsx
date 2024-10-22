import React, { useState } from "react";

const Input = ({
  type,
  placeholder,
  required,
  id,
  label,
  name,
  minlength,
  defaultVal,
  onChange,
}) => {
  return (
    <>
      <div className="form-field-container">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="form-input"
          id={name}
          defaultValue={defaultVal}
          minLength={minlength}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
