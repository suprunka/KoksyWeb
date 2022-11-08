import React from "react";
import PropTypes from "prop-types";
import { TextField } from '@mui/material';
export function InputWithLabel({label, value, handleChange, type, defaultValue}) {
  
    return (
    <div>
       <TextField
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        autoComplete="current-password"
        variant="outlined"
        label={label}
        defaultValue={defaultValue}
      />
    </div>)
  }
  
  InputWithLabel.propTypes = {
    label: PropTypes.text,
    value: PropTypes.text,
    type: PropTypes.text,
    handleChange: PropTypes.func.isRequired,
    defaultValue:PropTypes.number
  };
  
export function BasicInput({value, handleChange, type, definedStyles}) {
  return (
  <div>
     <TextField
        value={value}
        type={type}
        onChange={(e) => handleChange(e.target.value)}
        variant="outlined"
        inputMode={type =="number" ? "numeric":""}
        pattern={type =="number" ? "[0-9]*":""}
        className={definedStyles}
      />
  </div>)
}

BasicInput.propTypes = {
  value: PropTypes.text,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  definedStyles: PropTypes.string
};