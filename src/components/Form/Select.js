import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './colors';

// [{value: 12, label: 'Label for value 12'}]
const Select = forwardRef(({name, label, items, errors, className, ...restProps}, ref) => {
  return (
    <div>
      <div><label>{label}</label></div>
      <select data-testid={name} name={name} className={className} {...restProps} ref={ref}>
        {items.map(elem => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && <span style={{ color: '#c0392b' }}>{errors[name].message}</span>}
    </div>
  );
});

Select.propTypes = {
  items: PropTypes.array.isRequired,
};

const SelectStyled = styled(Select)`
  background-color: ${colors.backgroundColor};
  color: ${colors.color};
  border: ${colors.borderColor} 1px solid;
  border-radius: 5px;
  padding: 4px;
`;

export {Select};
export default SelectStyled;
