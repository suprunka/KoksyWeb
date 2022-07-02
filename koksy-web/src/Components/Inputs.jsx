import React from "react";
import PropTypes from "prop-types";

export function InputWithLabel({label, value, handleChange, isValueHidden}) {
    return (
    <div>
        <label htmlFor={label}>{label}</label>
      <input id="" name={label}  value={value}
             type={isValueHidden? "password":"text"}
          onChange={(e)=>handleChange(e.target.value)}></input>
    </div>)
  }
  
  InputWithLabel.propTypes = {
    label: PropTypes.text,
    value: PropTypes.text,
    isValueHidden: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
  };
  
export function BasicInput({value, handleChange, type}) {
  return (
  <div>
    <input id=""  value={value}
           type={type}
           inputMode={type =="number" ? "numeric":""}
           pattern={type =="number" ? "[0-9]*":""}
        onChange={(e)=>handleChange(e.target.value)}></input>
  </div>)
}

BasicInput.propTypes = {
  value: PropTypes.text,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string
};