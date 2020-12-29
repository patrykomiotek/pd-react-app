import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from './colors';

// [{value: 12, label: 'Label for value 12'}]
const Select = forwardRef(({items, className, ...restProps}, ref) => {
  return (
    <select className={className} ref={ref}>
      {items.map(elem => (
        <option key={elem.value} value={elem.value}>
          {elem.label}
        </option>
      ))}
    </select>
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
