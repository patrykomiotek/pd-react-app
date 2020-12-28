import React, { forwardRef } from 'react';
import PropTypes from "prop-types";

import './styles.css';

const Button = forwardRef(({ badge, children, className, ...restProps }, ref) => (
  <button
    type="button"
    ref={ref}
    {...restProps}
    className={`Button ${className}`}
  >
    {children}
    {badge && <span class="badge">{badge}</span>}
  </button>
));

Button.propTypes = {
  badge: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
