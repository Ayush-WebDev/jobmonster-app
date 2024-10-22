import React from "react";

const SelectField = ({ name, label, arrOptions, defaultVal, onChange }) => {
  return (
    <>
      <div className="form-field-container">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          style={{ textTransform: "capitalize" }}
          name={name}
          id={name}
          className="form-input"
          defaultValue={defaultVal}
          onChange={onChange}
        >
          {arrOptions?.map((val, index) => {
            return (
              <option
                key={index}
                style={{ textTransform: "capitalize" }}
                value={val}
              >
                {val}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectField;
