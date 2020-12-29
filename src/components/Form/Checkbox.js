import {forwardRef} from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({name, elemName, label, errors, className, ...restProps}, ref) => {
  return (
    <label htmlFor={elemName}>
      <input
        id={elemName}
        name={name}
        data-testid={name}
        type="checkbox"
        className={className}
        {...restProps}
        ref={ref}
      />
      {' '}
      <span>{label}</span>
      {errors && errors[name] && <span style={{ color: '#c0392b' }}>{errors[name].message}</span>}
    </label>
  );
});

Checkbox.propTypes = {
  elemName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
