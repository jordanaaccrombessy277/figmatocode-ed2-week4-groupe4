import React from "react";
import PropTypes from "prop-types";

const BaseAuthButton = ({ title }) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-gradient-to-tr from-blue-primary to-purple-primary px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
    >
      {title}
    </button>
  );
};

BaseAuthButton.propTypes = {
  title: PropTypes.string,
};

export default BaseAuthButton;
