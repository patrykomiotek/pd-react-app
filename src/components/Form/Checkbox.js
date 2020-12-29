import {forwardRef} from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({name, label, className, ...restProps}, ref) => {
  return (
    <label htmlFor={name}>
      <input id={name} type="checkbox" className={className} {...restProps} ref={ref} />{' '}
      <span>{label}</span>
    </label>
  );
});

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
