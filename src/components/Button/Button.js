import React, { forwardRef } from 'react';
import PropTypes from "prop-types";

const Button = forwardRef(({ children, className, ...restProps }, ref) => (
  <button
    type="button"
    ref={ref}
    {...restProps}
    className={`Button ${className}`}
  >
    {children}
  </button>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
