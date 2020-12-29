import PropTypes from 'prop-types';

function Checkbox({name, label, className, ...restProps}) {
  return (
    <label htmlFor={name}>
      <input id={name} type="checkbox" className={className} {...restProps} /> <span>{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
