import React from "react";
import PropTypes from "prop-types";

const BaseInput = ({ name, type, label }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          required
          className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-primary sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

BaseInput.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // placeholder: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.func.isRequired,
  // disabled: PropTypes.bool,
};

export default BaseInput;
