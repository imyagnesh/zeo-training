import React from "react";
import PropTypes from "prop-types";

const textInput = ({ name, label, placeholder, value, onChange, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += ` has-error`;
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

textInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

textInput.defaultProps = {
  error: ""
};

export default textInput;
